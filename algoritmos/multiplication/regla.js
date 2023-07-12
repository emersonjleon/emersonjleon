// Obtener el elemento de lienzo (canvas) y su contexto
const canvas = document.getElementById('regla');
const ctx = canvas.getContext('2d');

// Dimensiones del lienzo
const width = canvas.width;
const height = canvas.height;

// Establecer los colores
const backgroundColor = '#ffffff';
const lineColor = '#000000';
const textColor = '#000000';

// Limpiar el lienzo
function clearCanvas() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
}

// Dibujar una línea vertical
function drawVerticalLine(x, startY, endY, lineWidth) {
  ctx.beginPath();
  ctx.moveTo(x, startY);
  ctx.lineTo(x, endY);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  ctx.stroke();
}

// Dibujar un número en la regla
function drawNumber(x, y, number) {
  ctx.fillStyle = textColor;
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(number.toString(), x, y);
}

// Calcular el logaritmo en base 10 de un número
function calculateLogarithm(number) {
  return Math.log10(number);
}

// Dibujar la regla numérica con escala logarítmica
function drawLogarithmicNumberLine() {
  clearCanvas();
  
  const startX = 20; // Posición inicial de la regla
  const endX = width - 20; // Posición final de la regla
  const lineHeight = 20; // Espaciado entre las líneas

  const startNumber = 1; // Número inicial
  const endNumber = 100; // Número final

  // Dibujar las líneas y los números
  for (let i = startNumber; i <= endNumber; i++) {
    const logarithm = calculateLogarithm(i);
    const x = startX + (logarithm / Math.log10(endNumber)) * (endX - startX);
    const y1 = height / 2 - lineHeight / 2;
    const y2 = height / 2 + lineHeight / 2;
    
    drawVerticalLine(x, y1, y2, 1);
    drawNumber(x, y2 + 15, i);
  }
}

// Dibujar la regla al cargar la página
drawLogarithmicNumberLine();
