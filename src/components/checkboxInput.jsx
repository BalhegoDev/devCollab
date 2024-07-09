import React from "react";

export default function CheckboxInput({id,label}){
    return(
        <label id={id}>
            <input
                type="checkbox"
            />
            <span>{label}</span>
        </label>
    )
}