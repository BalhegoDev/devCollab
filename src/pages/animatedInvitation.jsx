import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function AnimatedInvitation(){

    const divPai = useRef();

    const square = {
        width:"5rem",
        height:"5rem",
        backgroundColor:"#74D98C",
        border: "2px solid black"
    }

    useEffect(() =>{
        anime({
            easing: 'easeInOutSine',
            targets: divPai.current.children,
            rotate:"1turn",
            loop:true,
            perspective: "1200px",
            borderRadious: ["0px","60px"]
        })
    },[])


    return(
        <div ref={divPai} style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
            <div style={square}></div>
            <div style={square}></div>
            <div style={square}></div>
            <div style={square}></div>
            <div style={square}></div>
        </div>
    )
}