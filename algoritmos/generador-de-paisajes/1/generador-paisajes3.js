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
  // Dibujar tronco
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size / 4, y - size * 2);
  ctx.lineTo(x + size / 2, y - size * 2);
  ctx.lineTo(x + size / 4 * 3, y - size * 2);
  ctx.lineTo(x + size, y);
  ctx.closePath();
  ctx.fillStyle = color.trunk;
  ctx.fill();

  // Dibujar copa
  const crownHeight = size * 2;
  const crownWidth = size * 1.5;
  const crownX = x + size / 2;
  const crownY = y - size * 2 - crownHeight;
  const crownGradient = ctx.createLinearGradient(crownX, crownY, crownX, crownY + crownHeight);
  crownGradient.addColorStop(0, color.crownStart);
  crownGradient.addColorStop(1, color.crownEnd);
  ctx.fillStyle = crownGradient;
  ctx.fillRect(crownX - crownWidth / 2, crownY, crownWidth, crownHeight);
}

// Generar paisaje
function generateLandscape(treeCount, roughness) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar suelo
  ctx.fillStyle = '#C0C0C0';
  ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

  // Dibujar montañas
  const mountainCount = randomInRange(4, 8);
  const mountainColors = ['#A29E9E', '#7D7878', '#605C5C', '#464141']; // Paleta de colores para las montañas
  for (let i = 0; i < mountainCount; i++) {
    const mountainWidth = randomInRange(100, 300);
    const mountainHeight = randomInRange(100, 200);
    const mountainX = randomInRange(0, canvas.width - mountainWidth);
    const mountainY = canvas.height * 0.7 - mountainHeight;
    const mountainColor = mountainColors[Math.floor(Math.random() * mountainColors.length)];
    drawMountain(mountainX, mountainY, mountainWidth, mountainHeight, mountainColor);
  }

  // Dibujar árboles
  const treeColors = [
    { trunk: '#5C4033', crownStart: '#4D7326', crownEnd: '#38761D' }, // Tono de verde más oscuro
    { trunk: '#6E493A', crownStart: '#5C9637', crownEnd: '#489C20' }, // Tono de verde medio
    { trunk: '#865E49', crownStart: '#74B132', crownEnd: '#59B30D' }, // Tono de verde más claro
  ]; // Paleta de colores para los árboles
  for (let i = 0; i < treeCount; i++) {
    const treeSize = randomInRange(20, 40);
    const treeX = randomInRange(0, canvas.width - treeSize);
    const treeY = canvas.height * 0.7;
    const treeColor = treeColors[Math.floor(Math.random() * treeColors.length)];
    drawTree(treeX, treeY, treeSize, treeColor);
  }

  // Dibujar cielo
  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height * 0.7);
}

// Generar paisaje inicial
generateLandscape(15, 0.6);
