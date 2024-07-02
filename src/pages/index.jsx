import React from "react";
import Header from "../components/header";
import WelcomeCard from "../components/welcomeCard";
import DepoimentWire from "../components/depoimentWire";
import Depoiment from "../components/depoiment";
import "../style/style.css";

import pessoa from "../assets/pessoa.jpg";

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
                    <section className="depoiments">
                        <Depoiment
                            photo={pessoa}
                            name={"Pedro"}
                            aval={"Serviço muito bom,explendidodasdasdasdasasdasadsasdasadasdadasdasdadasadsasdasdasdasdasdasasdasadasdasdsadasddasdasasdadsdassdsadasdasasadad!"}
                            team={"DevCollab"}
                        />
                    </section>
                    <DepoimentWire
                        content={"</depoimentos>"}
                        className={"wire_end"}
                    />
                </section>
            </main>
        </>
        
    )
}