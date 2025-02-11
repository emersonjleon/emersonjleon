import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lighting setup
const ambientLight = new THREE.AmbientLight(0x222222);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x00ffff, 1, 10);
pointLight.position.set(2, 3, 3);
scene.add(pointLight);

// Glass plane
const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x111111,
    transparent: true,
    opacity: 0.3,
    roughness: 0.1,
    transmission: 0.9,
    metalness: 0.8
});

const glassGeometry = new THREE.PlaneGeometry(3, 2);
const glassPlane = new THREE.Mesh(glassGeometry, glassMaterial);
glassPlane.position.set(0, 1, 0);
scene.add(glassPlane);

// Load font and create text
const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (font) => {
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const textGeometry = new TextGeometry('for (let i=0; i<10; i++) {
    console.log(i);
}', {
        font: font,
        size: 0.2,
        height: 0.02
    });
    
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-1.3, 1, 0.1);
    scene.add(textMesh);
});

// Neon boxes
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xff00ff, emissive: 0xff00ff });
const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(1, 1, 0);
scene.add(box);

// Arrows
const arrowMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff });
const arrowGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.5, 1.2, 0),
    new THREE.Vector3(0.5, 1.2, 0)
]);
const arrow = new THREE.Line(arrowGeometry, arrowMaterial);
scene.add(arrow);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Resize handling
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
