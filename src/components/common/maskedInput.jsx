import React from "react";
import InputMask from 'react-input-mask';

export default function MaskedInput({id,label,mask,value,setValue,type,className}){
    return(
        <label id={id} className={className}>
            <span>{label}</span>
            <InputMask 
                mask={mask}
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                type={type}
            />
        </label>
    )
}