import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0')
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
camera.position.z = 10

// Create cylinder
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 3, 32);
// params: radiusTop, radiusBottom, height, radialSegments
const cylinderMaterial = new THREE.MeshLambertMaterial({ 
    color: '#4B0082',  // Indigo color
    emissive: '#311B92',
    emissiveIntensity: 0.2
});
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(-3, 0, 0);  // Move left
scene.add(cylinder);

// ...existing code with pyramid...

function animate() {
    requestAnimationFrame(animate)
    
    pyramid.rotation.y += 0.01
    cylinder.rotation.x += 0.01
    cylinder.rotation.z += 0.005
    
    renderer.render(scene, camera)
}
animate()
