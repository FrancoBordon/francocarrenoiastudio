const fs = require('fs');
const path = require('path');

function copyIfExists(from, to) {
  const source = path.join(process.cwd(), from);
  const destination = path.join(process.cwd(), to);

  if (!fs.existsSync(source)) {
    console.log(`No existe: ${source}`);
    return;
  }

  try {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    // Prefer fs.cpSync when available (Node 16.7+ / 18+)
    if (typeof fs.cpSync === 'function') {
      fs.cpSync(source, destination, { recursive: true });
    } else {
      // Fallback: recursive copy
      copyRecursive(source, destination);
    }
    console.log(`Copiado: ${source} -> ${destination}`);
  } catch (err) {
    console.error(`Error copiando ${source} -> ${destination}:`, err);
    process.exitCode = 1;
  }
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      const srcPath = path.join(src, entry);
      const destPath = path.join(dest, entry);
      copyRecursive(srcPath, destPath);
    }
  } else if (stat.isFile()) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// Rutas replicando el comportamiento de los comandos originales:
// cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/
copyIfExists('.next/static', '.next/standalone/.next/static');
copyIfExists('public', '.next/standalone/public');

// exit with non-zero if any copy failed (handled above by setting process.exitCode)
