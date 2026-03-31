import { NextResponse } from "next/server";

const PLAYLISTS_PAGE_URL = "https://www.youtube.com/@dwamita/playlists";

function extractInitialData(html: string) {
  const patterns = [
    /ytInitialData\s*=\s*(\{[\s\S]*?\});/,
    /window\["ytInitialData"\]\s*=\s*(\{[\s\S]*?\});/,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) {
      try {
        return JSON.parse(m[1]);
      } catch {
      }
    }
  }
  return null;
}

type Title = { simpleText?: string; runs?: { text?: string }[] };
type GridPlaylistRenderer = {
  playlistId?: string;
  title?: Title;
  thumbnail?: { thumbnails?: { url?: string }[] };
};

function collectGridPlaylistRenderers(root: unknown) {
  const out: GridPlaylistRenderer[] = [];
  const stack: unknown[] = [root];
  while (stack.length) {
    const cur = stack.pop();
    if (!cur || typeof cur !== "object") continue;
    const obj = cur as Record<string, unknown>;
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      if (k === "gridPlaylistRenderer" && v && typeof v === "object") {
        out.push(v as GridPlaylistRenderer);
      }
      if (v && typeof v === "object") stack.push(v);
    }
  }
  return out;
}

function getText(t: Title | undefined): string {
  if (!t) return "";
  if (t.simpleText) return t.simpleText;
  if (Array.isArray(t.runs)) return t.runs.map((r) => r.text || "").join("");
  return "";
}

function bestThumb(renderer: GridPlaylistRenderer): string {
  const thumbs = renderer && renderer.thumbnail ? renderer.thumbnail.thumbnails : undefined;
  if (Array.isArray(thumbs) && thumbs.length) return thumbs[thumbs.length - 1].url || "";
  return "";
}

function fromRenderers(renderers: GridPlaylistRenderer[]) {
  const items: { id: string; title: string; url: string; thumbnailUrl?: string }[] = [];
  for (const r of renderers) {
    const id = r.playlistId;
    const title = getText(r.title);
    const thumbnailUrl = bestThumb(r);
    if (!id || !title) continue;
    items.push({
      id,
      title,
      url: `https://www.youtube.com/playlist?list=${id}`,
      thumbnailUrl,
    });
  }
  return items;
}

function fallbackParse(html: string) {
  const results: { id: string; title: string; url: string; thumbnailUrl?: string }[] = [];
  const re = /href="\/playlist\?list=([^"&]+)"[\s\S]*?title="([^"]+)"/g;
  const seen = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const id = m[1];
    const title = m[2];
    if (seen.has(id)) continue;
    seen.add(id);
    results.push({
      id,
      title,
      url: `https://www.youtube.com/playlist?list=${id}`,
    });
  }
  return results;
}

export async function GET() {
  try {
    const res = await fetch(PLAYLISTS_PAGE_URL, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "accept-language": "ar,en;q=0.9",
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json({ error: "failed_to_fetch" }, { status: 502 });
    }
    const html = await res.text();
    const initial = extractInitialData(html);
    let playlists: { id: string; title: string; url: string; thumbnailUrl?: string }[] | null = null;
    if (initial) {
      const renderers = collectGridPlaylistRenderers(initial);
      playlists = fromRenderers(renderers);
    }
    if (!playlists || playlists.length === 0) {
      playlists = fallbackParse(html);
    }
    return NextResponse.json({ playlists: playlists || [] }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "unexpected_error" }, { status: 500 });
  }
}
