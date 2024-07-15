import React from "react";

export default function Input({label,id,type,placeholder}){
    return(
        <label>
            <span>{label}</span>
            <input id={id} type={type} placeholder={placeholder}/>
        </label>
    )
}