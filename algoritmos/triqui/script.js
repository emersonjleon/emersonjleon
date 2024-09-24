let scene, camera, renderer, controls;
const boardSize = 4;
const board = Array.from({ length: boardSize }, () => Array.from({ length: boardSize }, () => Array(boardSize).fill(' ')));
let currentPlayer = 'X';

init();
animate();

function init() {
    // Crear la escena
    scene = new THREE.Scene();

    // Configurar la cámara
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(6, 6, 6);
    camera.lookAt(1.5, 1.5, 1.5);

    // Crear el renderizador
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Agregar controles de órbita
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Agregar luz
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    // Crear el tablero
    createBoard();

    // Manejar clics del mouse
    window.addEventListener('click', onMouseClick, false);

    // Manejar el cambio de tamaño de la ventana
    window.addEventListener('resize', onWindowResize, false);
}

function createBoard() {
    for (let x = 0; x < boardSize; x++) {
        for (let y = 0; y < boardSize; y++) {
            for (let z = 0; z < boardSize; z++) {
                const geometry = new THREE.BoxGeometry(1, 1, 1);
                const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
                const cube = new THREE.Mesh(geometry, material);
                cube.position.set(x, y, z);
                scene.add(cube);
            }
        }
    }
}

function onMouseClick(event) {
    // Obtener posición del mouse
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycaster para detectar clics en los cubos
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    
    if (intersects.length > 0) {
        const selectedCube = intersects[0].object;
        const [x, y, z] = selectedCube.position.toArray().map(coord => Math.round(coord));

        if (board[y][x][z] === ' ') {
            board[y][x][z] = currentPlayer; // Realizar el movimiento
            selectedCube.material.color.set(currentPlayer === 'X' ? 0xff0000 : 0x0000ff); // Cambiar color

            if (checkWinner(currentPlayer)) {
                alert(`¡El jugador '${currentPlayer}' ganó!`);
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Cambiar de jugador
            }
        }
    }
}

function checkWinner(player) {
    // Verificar filas, columnas, y diagonales
    for (let z = 0; z < boardSize; z++) {
        for (let i = 0; i < boardSize; i++) {
            if (board[i].every(cell => cell[z] === player) || board.map(row => row[i][z]).every(cell => cell === player)) {
                return true;
            }
            if (board[i][i][z] === player && board[i][boardSize - 1 - i][z] === player) {
                return true;
            }
        }
    }
    
    // Verificación en 3D
    for (let x = 0; x < boardSize; x++) {
        for (let y = 0; y < boardSize; y++) {
            if (board[x][y].every(cell => cell === player)) {
                return true;
            }
        }
    }
    return false;
}

function resetGame() {
    // Reiniciar el tablero
    board.forEach(layer => layer.forEach(row => row.fill(' ')));
    scene.children.forEach(cube => {
        cube.material.color.set(0xffffff); // Resetear colores a blanco
    });
    currentPlayer = 'X'; // Reiniciar el jugador actual
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
