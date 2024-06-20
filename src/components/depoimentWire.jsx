import React from "react";

export default function DepoimentWire({className,content}){
    return(
       <div className={`wire ${className}`}>
         <p>{content}</p>
       </div>
    )
}