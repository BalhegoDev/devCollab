import React from "react";

export default function CheckboxInput({id,label,value,setValue}){
    return(
        <label style={{display:"flex",flexDirection:"row",alignItems:"center", position:"relative"}} id={id}>
            <input
                type="checkbox"
            />
            <span>{label}</span>
        </label>
    )
}