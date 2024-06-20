import React from "react";
import Header from "../components/header";
import WelcomeCard from "../components/welcomeCard";
import DepoimentWire from "../components/depoimentWire";

import "../style/style.css";

export default function Index(){
    return(
        <>
            <Header/>
            <main>
                <WelcomeCard/>
                <section className="depoiment_container">
                    <DepoimentWire
                        content={"<depoimentos>"}
                        className={"wire_start"}
                    />
                    <section className="depoiments"></section>
                    <DepoimentWire
                        content={"</depoimentos>"}
                        className={"wire_end"}
                    />
                </section>
            </main>
        </>
        
    )
}