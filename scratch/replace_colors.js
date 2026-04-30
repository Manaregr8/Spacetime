const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replace hex
  content = content.replace(/#f2b300/gi, '#fcbb2d');
  content = content.replace(/#ffc824/gi, '#fcbb2d');
  
  // Replace rgb(242, 177, 0) and rgba(242, 179, 0, x)
  content = content.replace(/rgb\(\s*242\s*,\s*177\s*,\s*0\s*\)/g, '#fcbb2d');
  content = content.replace(/rgba\(\s*242\s*,\s*179\s*,\s*0\s*,/g, 'rgba(252, 187, 45,');
  
  // Replace linear gradients with solid color if both stops became #fcbb2d
  content = content.replace(/linear-gradient\([^,]+,\s*#fcbb2d,\s*#fcbb2d\)/g, '#fcbb2d');
  
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, '..', 'src'));
console.log('Done!');
