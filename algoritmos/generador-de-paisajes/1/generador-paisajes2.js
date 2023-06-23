// Generador de paisajes naturales mejorado

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
function drawMountain(x, y, width, height, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width / 2, y - height);
  ctx.lineTo(x + width, y);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

// Función para dibujar un árbol
function drawTree(x, y, size, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size / 2, y - size * 2);
  ctx.lineTo(x + size, y);
  ctx.closePath();
  ctx.fillStyle = '#8BC34A';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + size / 2, y - size * 2, size / 4, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

// Generar paisaje
function generateLandscape(treeCount, roughness) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar cielo
  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Dibujar suelo
  ctx.fillStyle = '#C0C0C0';
  ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

  // Dibujar montañas
  const mountainCount = randomInRange(4, 8);
  for (let i = 0; i < mountainCount; i++) {
    const mountainWidth = randomInRange(100, 300);
    const mountainHeight = randomInRange(100, 200);
    const mountainX = randomInRange(0, canvas.width - mountainWidth);
    const mountainY = canvas.height * 0.7 - mountainHeight;
    const mountainColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Color aleatorio en formato hexadecimal
    drawMountain(mountainX, mountainY, mountainWidth, mountainHeight, mountainColor);
  }

  // Dibujar árboles
  for (let i = 0; i < treeCount; i++) {
    const treeSize = randomInRange(20, 40);
    const treeX = randomInRange(0, canvas.width - treeSize);
    const treeY = canvas.height * 0.7;
    const treeColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Color aleatorio en formato hexadecimal
    drawTree(treeX, treeY, treeSize, treeColor);
  }
}

// Generar paisaje inicial
generateLandscape(15, 0.6);
