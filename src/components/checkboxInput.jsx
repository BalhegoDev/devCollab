import React from "react";

export default function CheckboxInput({label}){
    return(
        <label>
            <input
                type="checkbox"
            />
            <span>{label}</span>
        </label>
    )
}