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

    const axes = new THREE.AxesHelper(5);
    scene.add(axes);

    camera.position.z = 8;
    control.update();

    renderer.setSize(window.innerWidth, window.innerHeight);

    const boxGeometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({"color" : "#00FFFF"});
    const box = new THREE.Mesh(boxGeometry,material);
    scene.add(box);

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