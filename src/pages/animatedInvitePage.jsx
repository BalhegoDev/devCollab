import React, { useEffect,useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default function AnimatedInvitePage(){

    const div = useRef();

    useEffect(() =>{
        
        const width = div.current.clientWidth;
        const height = div.current.clientHeight

        const renderer = new THREE.WebGLRenderer();
        const camera = new THREE.PerspectiveCamera(75,width / height,0.1,1000);
        const scene = new THREE.Scene();
        const axes = new THREE.AxesHelper(5);

        const control = new OrbitControls(camera,renderer.domElement);

        scene.add(axes);
        camera.position.z = 5;
        camera.position.y = 1;

        control.update();

        const sphere = new THREE.SphereGeometry();
        const cube = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({"color": "#008000"});

        const box = new THREE.Mesh(cube,material);
        const esfera = new THREE.Mesh(sphere,material);

        scene.add(box);
        scene.add(esfera);

        const animate = () =>{
            requestAnimationFrame(animate);
            esfera.rotation.x += .01;
            esfera.rotation.y += 0.01;
            esfera.rotation.z += .01 ;
            renderer.render(scene,camera);
        }

        renderer.setSize(div.current.clientWidth, div.current.clientHeight);
        animate();

        div.current.appendChild(renderer.domElement);

        return () => {
            div.current.removeChild(renderer.domElement);
        };

    },[]);

    return(
        <div ref={div} style={{ width: '100%', height: '100vh' }}>
        </div>
    )
}