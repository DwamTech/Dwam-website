const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const QUALITY = 85; // جودة الصورة (1-100)
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.jfif'];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return;
  }

  try {
    const outputPath = filePath.replace(/\.(jpg|jpeg|png|gif|webp|avif|jfif)$/i, '.webp');
    const stats = fs.statSync(filePath);
    
    // تحويل وضغط الصورة
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(outputPath + '.tmp');
    
    const newStats = fs.statSync(outputPath + '.tmp');
    const savedSpace = ((stats.size - newStats.size) / stats.size * 100).toFixed(2);
    
    // استبدال الملف الأصلي
    fs.renameSync(outputPath + '.tmp', outputPath);
    
    // حذف الملف القديم إذا كان بصيغة مختلفة
    if (filePath !== outputPath) {
      fs.unlinkSync(filePath);
    }
    
    console.log(`✓ ${path.basename(filePath)} → ${path.basename(outputPath)} (وفرت ${savedSpace}%)`);
  } catch (error) {
    console.error(`✗ خطأ في ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  console.log('🚀 بدء ضغط الصور...\n');
  const startTime = Date.now();
  
  await processDirectory(PUBLIC_DIR);
  
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✅ تم الانتهاء في ${duration} ثانية`);
}

main();
