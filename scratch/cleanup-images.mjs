import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.jfif'];

function cleanupImages(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            cleanupImages(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                const webpPath = fullPath.replace(ext, '.webp');
                if (fs.existsSync(webpPath)) {
                    console.log(`Deleting original: ${file}`);
                    fs.unlinkSync(fullPath);
                }
            }
        }
    }
}

console.log('Starting image cleanup...');
cleanupImages(PUBLIC_DIR);
console.log('Cleanup complete.');
