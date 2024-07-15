import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";

export default function Depoiment({ photo, name, aval, team }) {
  return (
    <section className="depoiment">
      <Avatar className="avatar" src={photo} />
      <p className="userName">{name}</p>
      <div className="avaliacao" style={{display:"flex",justifyContent:"space-evenly"}}>
        <FontAwesomeIcon icon={faStar} />
        <p>5,0</p>
      </div>
      <p className="avaliation">{aval}</p>
      <footer>
        <p className="realized">Realizado por:</p>
        <p className="teamName">{`<${team}>`}</p>
      </footer>
    </section>
  );
}