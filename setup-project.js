import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Créer les dossiers
const folders = [
  'components/figma',
  'components/ui',
  'pages',
  'styles'
];

folders.forEach(folder => {
  const folderPath = path.join(__dirname, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`✅ Created: ${folder}`);
  }
});

console.log('✅ All folders created!');