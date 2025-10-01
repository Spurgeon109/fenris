//This code creates a simple 3D scene using the Three.js library. 
//It sets up a scene with a light gray background, adds a camera, and creates a colored circle mesh. 
//The scene includes directional and ambient lighting. The circle mesh is animated to rotate continuously, 
//and the scene is rendered in a 600x300 pixel area on the web page.

import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0')
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
camera.position.z = 10  // Moved camera back to see all objects


// Create pyramid
const circleGeometry = new THREE.CircleGeometry(1, 32)
const circleMaterial = new THREE.MeshLambertMaterial({color: '#0095ffff'})
const circle = new THREE.Mesh(circleGeometry, circleMaterial)


scene.add(circle)

// Lighting
const light = new THREE.DirectionalLight(0x9cdba6, 2)  // Reduced intensity
light.position.set(1,1,1)
scene.add(light)

// Add ambient light
const ambientLight = new THREE.AmbientLight(0x404040)
scene.add(ambientLight)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(600,300)
document.body.appendChild(renderer.domElement)

function animate() {
    requestAnimationFrame(animate)
    circle.rotation.y += 0.01
    
    renderer.render(scene, camera)
}
animate()

