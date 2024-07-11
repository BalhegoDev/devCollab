import React, { useEffect,useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default function AnimatedInvitePage(){

    const div = useRef();

    useEffect(() => {
    // Configurações iniciais
    const camera = new THREE.PerspectiveCamera(75, div.current.clientWidth / window.innerHeight, 0.1, 1000);
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    const control = new OrbitControls(camera, renderer.domElement);
    const gridHelper = new THREE.GridHelper();  
    const axes = new THREE.AxesHelper(10)
    
    camera.position.z = 8;

    control.update();
    scene.add(axes);
    scene.add(gridHelper);


    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#F0EAD6");

    const boxGeometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: "#00FFFF"});
    const box = new THREE.Mesh(boxGeometry,material);
    scene.add(box);

    const centerObject = new THREE.Object3D();
    scene.add(centerObject);

    centerObject.add(box);

    box.position.y = 2;   

    const animate = () =>{
        requestAnimationFrame(animate);
        box.rotation.x += 0.01
        box.rotation.y += 0.01
        box.rotation.z += 0.01
        renderer.render(scene, camera);
    }

    animate();


    div.current.appendChild(renderer.domElement);

    return () => {
        div.current.removeChild(renderer.domElement);
    };
}, []);


    return(
        <div ref={div} style={{ width: '100%', height: '100vh' }}>
        </div>
    )
}