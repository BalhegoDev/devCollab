import React from "react";

export default function Input({label,id,type,placeholder,value,setValue}){
    return(
        <label>
            <span>{label}</span>
            <input id={id} type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
        </label>
    )
}