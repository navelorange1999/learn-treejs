import * as THREE from 'three';

/**
 * 第一步
 * 创建场景、相机、渲染器
 */
// 设置渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染器的大小
renderer.setSize( window.innerWidth, window.innerHeight );
// 将渲染器添加到页面
document.body.appendChild( renderer.domElement );

// 设置相机
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );

// 设置相机位置
camera.position.set( 0, 0, 100 );

// 设置相机看向的位置
camera.lookAt( 0, 0, 0 );

// 设置场景
const scene = new THREE.Scene();

/**
 * 第二步
 * 创建物体
 */

// 创建材质
const material = new THREE.LineBasicMaterial( { color: 0x00ff00 } );

// 创建几何体
const points = [];
// 三个点
points.push( 
    // 向量
    new THREE.Vector3( - 10, 0, 0 ) 
);
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, -10, 0 ) );
points.push( new THREE.Vector3( -10, 0, 0 ) );



// 带有一些顶点的几何体
const geometry = new THREE.BufferGeometry().setFromPoints( points );

// 创建线
const line = new THREE.Line( geometry, material );



/**
 * 第三步
 * 渲染
 */

// 将线添加到场景
scene.add( line );

// 渲染
renderer.render( scene, camera );