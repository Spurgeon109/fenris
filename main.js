import * as THREE from 'three';

const scene = new THREE.scene();
scene.background = new THREE.Color('#f0f0f0')
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
camera.position.z = 0.5

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'})
const cube = new THREE.mesh(geometry, material)

scene.add(cube)
const light = new THREE.DirectionalLight(0x9cdba6,10)
light.position.set(1,1,1)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)