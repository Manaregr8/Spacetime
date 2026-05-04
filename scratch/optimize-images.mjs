import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.jfif'];

async function processImages(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processImages(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                const relativePath = path.relative(PUBLIC_DIR, fullPath);
                const outputFileName = file.replace(ext, '.webp');
                const outputPath = path.join(dir, outputFileName);

                console.log(`Processing: ${relativePath}`);

                let width = 1920;
                let quality = 80;

                // Determine if it's a small card or a banner
                // We'll use folder names or filenames as hints
                const isBanner = relativePath.includes('banner') || relativePath.includes('Hero') || relativePath.includes('section');
                const isTestimonial = relativePath.includes('testimonials');
                const isSmallCard = relativePath.includes('card') || isTestimonial || file.startsWith('g2') || file.startsWith('person');

                if (isSmallCard) {
                    width = 600; // Small cards don't need high res
                    quality = 75;
                    console.log(`  -> Treating as small card (width: ${width})`);
                } else if (isBanner) {
                    width = 1920;
                    quality = 82;
                    console.log(`  -> Treating as banner (width: ${width})`);
                } else {
                    width = 1200;
                    quality = 80;
                    console.log(`  -> Treating as medium image (width: ${width})`);
                }

                try {
                    const image = sharp(fullPath);
                    const metadata = await image.metadata();

                    let pipeline = image;
                    if (metadata.width > width) {
                        pipeline = pipeline.resize(width);
                    }

                    await pipeline
                        .webp({ quality })
                        .toFile(outputPath);

                    const oldSize = (stat.size / 1024).toFixed(2);
                    const newSize = (fs.statSync(outputPath).size / 1024).toFixed(2);
                    console.log(`  -> Success: ${oldSize}KB -> ${newSize}KB`);
                } catch (err) {
                    console.error(`  -> Failed to process ${file}:`, err.message);
                }
            }
        }
    }
}

console.log('Starting image optimization...');
processImages(PUBLIC_DIR).then(() => {
    console.log('Optimization complete.');
}).catch(err => {
    console.error('Error during optimization:', err);
});
