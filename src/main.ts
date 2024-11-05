import * as THREE from 'three';

// 设置场景
const scene = new THREE.Scene();

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

// 设置渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染器的大小
renderer.setSize( window.innerWidth, window.innerHeight );
// 将渲染器添加到页面
document.body.appendChild( renderer.domElement );

// 创建一个几何体
// 几何体是一个对象，包含了物体的所有顶点和面
// 这里创建了一个立方体
const geometry = new THREE.BoxGeometry( 
    // 宽
    1, 
    // 高
    1, 
    // 深
    1 );

// 创建一个材质
// 材质是一个对象，包含了物体的外观
// 这里使用了基础材质，只显示一种颜色
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// 创建一个网格
// 网格是由几何体和材质组成的
const cube = new THREE.Mesh( geometry, material );

// 将网格添加到场景
scene.add( cube );

// 设置相机的位置，使相机可以看到物体，否则物体默认添加位置是在原点 (0,0,0)，相机默认位置也是在原点，所以看不到物体
camera.translateZ(5);

/**
 * 到这里，我们已经创建了一个立方体，设置了场景、相机、渲染器，将立方体添加到场景，并设置了相机的位置
 * 但是不会在页面中看到任何东西
 * 因为我们没有设置动画，也就是没有让渲染器不断的渲染场景
 */

// 设置动画
// 每一帧都会调用这个函数
// 1. 使立方体旋转
// 2. 渲染场景
// 所以连贯起来就是一个不断旋转的立方体动画
function animate() {

    // 使渲染器不断的渲染场景
    // 这个方法会在浏览器每次重绘之前调用一次
	requestAnimationFrame( animate );

    cube.rotateX(0.01)
    cube.rotateY(0.01)

    // 渲染场景
	renderer.render( scene, camera );
}

// 开始动画
animate();

