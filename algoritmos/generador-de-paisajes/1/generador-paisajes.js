// Generador de paisajes naturales básico

// Configuración del lienzo
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

// Función para generar un número aleatorio en un rango específico
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Función para dibujar una montaña
function drawMountain(x, y, width, height) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width / 2, y - height);
  ctx.lineTo(x + width, y);
  ctx.closePath();
  ctx.fillStyle = '#9e9e9e';
  ctx.fill();
}

// Función para dibujar un árbol
function drawTree(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size / 2, y - size);
  ctx.lineTo(x + size, y);
  ctx.closePath();
  ctx.fillStyle = '#795548';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + size / 2, y - size, size / 4, 0, 2 * Math.PI);
  ctx.fillStyle = '#4caf50';
  ctx.fill();
}

// Generar paisaje
function generateLandscape(treeCount, roughness) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar montañas
  const mountainCount = randomInRange(1, 4);
  for (let i = 0; i < mountainCount; i++) {
    const mountainWidth = randomInRange(100, 300);
    const mountainHeight = randomInRange(100, 200);
    const mountainX = randomInRange(0, canvas.width - mountainWidth);
    const mountainY = canvas.height - mountainHeight;
    drawMountain(mountainX, mountainY, mountainWidth, mountainHeight);
  }

  // Dibujar árboles
  for (let i = 0; i < treeCount; i++) {
    const treeSize = randomInRange(20, 40);
    const treeX = randomInRange(0, canvas.width - treeSize);
    const treeY = canvas.height - treeSize;
    drawTree(treeX, treeY, treeSize);
  }
}

// Generar paisaje inicial
generateLandscape(10, 0.5);
