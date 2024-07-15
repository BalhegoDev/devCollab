import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";

export default function ButtonHome(){
    return(
        <NavLink to={"/"}>
            <button>
                <FontAwesomeIcon icon={faHouseUser}/>
                <p>
                    Home
                </p>
            </button>
        </NavLink>
    )
}