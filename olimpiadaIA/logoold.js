
document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.createElement('canvas');
    canvas.width = 220;
    canvas.height = 220;
    var ctx = canvas.getContext('2d');
    document.getElementById('logo').appendChild(canvas);

    var colors = ['#6200EA', '#3700B3', '#03DAC5', '#BB86FC', '#03DAC5', '#FFFFFF'];
    var time = 0;
    var animating = true;
    var animationFrameId;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawFilledCircle(x, y, radius, color, alpha) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    function drawThinCircle(x, y, radius, color, alpha, lineWidth) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    function drawSquare(x, y, size, color, alpha, rotation) {
        ctx.save();
        ctx.translate(x + size / 2, y + size / 2);
        ctx.rotate(rotation);
        ctx.translate(-x - size / 2, -y - size / 2);
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.restore();
        ctx.globalAlpha = 1;
    }

    function drawTriangle(x, y, size, color, alpha, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.translate(-x, -y);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y - size);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.restore();
        ctx.globalAlpha = 1;
    }

    function drawConcentricCircles(number) {
	var initialHue = 300; // Initial hue value (blue)
	var initialLightness = 70; // Initial lightness value

        for (var i = 0; i < number; i++) {
            var angle = time + i * 0.3;
            var x = canvas.width/2 + Math.sin(angle) * 15;
            var y =  canvas.width/2 + Math.cos(angle) * 15;
	    var color = `hsl(${initialHue  - i * 3}, 70%, ${initialLightness - i *2}%)`;
            drawThinCircle(x, y, 20 + i * 6, color, 0.8, 2);
        }
    }

    function drawSymmetricShapes() {
        var count = 2*colors.length;
        for (var i = 0; i < count; i++) {
            var angle = (i / count) * Math.PI * 2 + time * 0.5;
            var x =  canvas.width/3+ Math.cos(angle) * 60;
            var y =  canvas.width/3 + Math.sin(angle) * 60;
            var size = 11 + Math.sin(time * 2 + i) * 5;
            var color = colors[ 4 ];
            var alpha = Math.random() * 0.3 + 0.5;
            var rotation = angle;

            drawSquare(x, y, size, color, alpha, rotation);
            drawTriangle(canvas.width - x, y, size, color, alpha, rotation);
            drawTriangle(x, canvas.width - y, size, color, alpha, rotation);
            drawSquare(canvas.width - x, canvas.width - y, size, color, alpha, rotation);
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width+50, canvas.height+50);

        // Dibujar el círculo grande oscuro completamente relleno detrás de las figuras
        drawFilledCircle(canvas.width/2, canvas.width/2, 90, '#270083', 0.8);

        // Dibujar las circunferencias delgadas con movimiento armonioso
        drawConcentricCircles(12);

        // Dibujar las figuras geométricas simétricas
        drawSymmetricShapes();

        time += 0.0051; // Animación más lenta
        animationFrameId = requestAnimationFrame(animate);
    }

    function toggleAnimation() {
        if (animating) {
            cancelAnimationFrame(animationFrameId);
        } else {
            animate();
        }
        animating = !animating;
    }

           animate();

    setTimeout(toggleAnimation, 200);
    
    canvas.addEventListener('click', toggleAnimation);
});

      
