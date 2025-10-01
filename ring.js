import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0')
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
camera.position.z = 10

// Create ring
const ringGeometry = new THREE.RingGeometry(1, 2, 32);
// params: innerRadius, outerRadius, thetaSegments
const ringMaterial = new THREE.MeshLambertMaterial({ 
    color: '#FFD700',  // Gold color
    side: THREE.DoubleSide,  // Make ring visible from both sides
    emissive: '#FFA500',
    emissiveIntensity: 0.2
});
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.position.set(2, 0, 0);  // Move right
scene.add(ring);

// ...existing code with pyramid...

function animate() {
    requestAnimationFrame(animate)
    
    pyramid.rotation.y += 0.01
    ring.rotation.x += 0.01
    ring.rotation.y += 0.005
    
    renderer.render(scene, camera)
}
animate()
