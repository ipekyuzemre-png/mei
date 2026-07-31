const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

// Sadece png, jpg, jpeg formatlarını bul
function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findImages(filePath, fileList);
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

async function convertToWebp() {
  const images = findImages(publicDir);
  console.log(`Toplam ${images.length} adet görsel bulundu. Dönüştürülüyor...`);

  let convertedCount = 0;

  for (const imgPath of images) {
    const ext = path.extname(imgPath);
    const webpPath = imgPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');

    try {
      // Çevir ve kaydet
      await sharp(imgPath)
        .webp({ quality: 80 }) // Kalite 80 çok idealdir, boyutu %80 düşürür kaliteyi bozmaz
        .toFile(webpPath);
      
      // Eski PNG/JPG dosyasını sil
      fs.unlinkSync(imgPath);
      console.log(`✅ Dönüştürüldü: ${path.basename(webpPath)}`);
      convertedCount++;
    } catch (error) {
      console.error(`❌ Hata (${path.basename(imgPath)}):`, error.message);
    }
  }

  console.log(`\n🎉 İşlem tamam! Toplam ${convertedCount} görsel WebP formatına çevrildi ve eskileri silindi.`);
}

convertToWebp();
