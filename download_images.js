const axios = require('axios');
const fs = require('fs');
const path = require('path');

const images = [
  { id: '1498050108023-c5249f4df085', name: 'diyarbakir_web_tasarim.webp' },
  { id: '1556742049-0cfed4f6a45d', name: 'diyarbakir_otomasyon.webp' },
  { id: '1560518883-ce09059eeffa', name: 'diyarbakir_emlak.webp' },
  { id: '1586528116311-ad8ed7c05944', name: 'diyarbakir_b2b.webp' },
  { id: '1589829085413-56de8ae18c73', name: 'diyarbakir_avukat.webp' }
];

async function downloadImages() {
  for (const img of images) {
    const url = `https://images.unsplash.com/photo-${img.id}?w=800&q=80&fm=webp`;
    const dest = path.join(__dirname, 'public', 'blog', img.name);
    
    try {
      const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
      });
      
      response.data.pipe(fs.createWriteStream(dest));
      console.log(`Downloaded ${img.name}`);
    } catch (error) {
      console.error(`Error downloading ${img.name}:`, error.message);
    }
  }
}

downloadImages();
