import React, { useEffect } from "react";
import "../style/style.css";
import Header from "../components/header";
import WelcomeCard from "../components/welcomeCard";
import DepoimentWire from "../components/depoimentWire";
import Depoiment from "../components/depoiment";
import Outdoor from "../components/outdoor";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <Outdoor>
                    <p>Freelancers ou equipes <br/> <span style={{color:"#39A672"}}>qualificadas</span> que vão tornar <span style={{color:"#39A672"}}>seu projeto em realidade</span></p>
                    <Link>
                        <button>
                            Encontre Profissionais
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Link>
                </Outdoor>
            </main>
        </>
        
    )
}