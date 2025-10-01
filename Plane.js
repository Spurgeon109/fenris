import * as THREE from 'three';

// ...existing code...

// Create plane
const planeGeometry = new THREE.PlaneGeometry(5, 5); // width, height
const planeMaterial = new THREE.MeshLambertMaterial({ 
    color: '#4287f5',
    side: THREE.DoubleSide // Make plane visible from both sides
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

// Position the plane
plane.position.set(0, 0, -2); // Move plane behind pyramid
plane.rotation.x = Math.PI / 4; // Rotate 45 degrees on X axis

scene.add(plane);

function animate() {
    requestAnimationFrame(animate);
    pyramid.rotation.y += 0.01;
    plane.rotation.z += 0.005; // Add subtle rotation to plane
    
    renderer.render(scene, camera);
}
