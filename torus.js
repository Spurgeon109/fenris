import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0')
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
camera.position.z = 10

// Create torus
const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
// params: radius, tube radius, radial segments, tubular segments
const torusMaterial = new THREE.MeshLambertMaterial({ 
    color: '#00ff00',
    emissive: '#28a745',
    emissiveIntensity: 0.2
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(3, 0, 0);  // Move right
scene.add(torus);

// ...existing code with pyramid...

function animate() {
    requestAnimationFrame(animate)
    
    pyramid.rotation.y += 0.01
    torus.rotation.x += 0.01
    torus.rotation.y += 0.005
    
    renderer.render(scene, camera)
}
animate()
