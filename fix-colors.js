const fs = require('fs');
const path = require('path');
const targetDirs = [
  path.join('d:', 'Bal_Sanskar_Sainik_School_Website_2', 'Bal-Sanskar-Sainik-School-Website', 'components'),
  path.join('d:', 'Bal_Sanskar_Sainik_School_Website_2', 'Bal-Sanskar-Sainik-School-Website', 'app')
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace text-ivory with text-navy-dark so text is dark on white cards
      content = content.replace(/text-ivory/g, 'text-navy-dark');
      
      // Update background variables
      content = content.replace(/bg-navy-dark/g, 'bg-ivory');
      content = content.replace(/bg-navy(?!-)/g, 'bg-ivory-dark');
      
      // Keep glass-panel instead of glass-card-navy
      content = content.replace(/glass-card-navy/g, 'glass-panel');

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

targetDirs.forEach(processDir);
console.log('Fixed colors in TSX files');
