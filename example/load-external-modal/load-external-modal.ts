import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// 设置场景
const scene = new THREE.Scene();

// 设置白色背景
scene.background = new THREE.Color( 0xffffff );

// 设置相机
const camera = 
    // 透视相机
    new THREE.PerspectiveCamera( 
        // 视角 FOV （在显示器上看到的场景的范围，单位：角度）
        75, 
        // 长宽比
        window.innerWidth / window.innerHeight, 
        // 近截面，小于这个值的物体不会被渲染
        0.1, 
        // 远截面，大于这个值的物体不会被渲染
        1000 );

// 设置相机位置
camera.position.set(0, 0, 10);

// 设置相机看向的位置
camera.lookAt(scene.position);

// 设置渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染器的大小
renderer.setSize( window.innerWidth, window.innerHeight );
// 将渲染器添加到页面
document.body.appendChild( renderer.domElement );

// 加载模型
const loader = new GLTFLoader();

loader.load("/model/example.glb", function ( gltf ) {
	scene.add( gltf.scene );

}, undefined, function ( error ) {
	console.error( error );
} );

// 设置动画
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();




