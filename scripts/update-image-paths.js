const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const FILE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.css', '.module.css'];
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'avif', 'jfif', 'JPG', 'JPEG', 'PNG'];

let totalReplacements = 0;
let filesModified = 0;

function updateImagePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fileReplacements = 0;

  // استبدال في src و backgroundImage
  IMAGE_EXTENSIONS.forEach(ext => {
    const patterns = [
      // src="/image.jpg" أو src='/image.jpg'
      new RegExp(`(src=["'])([^"']*)\\.${ext}(["'])`, 'gi'),
      // backgroundImage: url(/image.jpg)
      new RegExp(`(url\\(['"]?)([^'"\\)]*)\\.${ext}(['"]?\\))`, 'gi'),
      // background: url(/image.jpg)
      new RegExp(`(background[^:]*:\\s*url\\(['"]?)([^'"\\)]*)\\.${ext}(['"]?\\))`, 'gi'),
      // import image from './image.jpg'
      new RegExp(`(from\\s+['"])([^'"]*)\\.${ext}(['"])`, 'gi'),
      // require('./image.jpg')
      new RegExp(`(require\\(['"])([^'"]*)\\.${ext}(['"]\\))`, 'gi'),
    ];

    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, `$1$2.webp$3`);
        fileReplacements += matches.length;
        modified = true;
      }
    });
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
    totalReplacements += fileReplacements;
    console.log(`✓ ${path.relative(SRC_DIR, filePath)} - ${fileReplacements} استبدال`);
  }
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // تجاهل node_modules و .next
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        processDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (FILE_EXTENSIONS.includes(ext)) {
        updateImagePaths(fullPath);
      }
    }
  }
}

function main() {
  console.log('🔄 بدء استبدال امتدادات الصور...\n');
  const startTime = Date.now();

  processDirectory(SRC_DIR);

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✅ تم الانتهاء في ${duration} ثانية`);
  console.log(`📊 الإحصائيات:`);
  console.log(`   - ملفات معدلة: ${filesModified}`);
  console.log(`   - إجمالي الاستبدالات: ${totalReplacements}`);
}

main();
