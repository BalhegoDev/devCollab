import React, { useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

export default function Projetos(){

    const [min,setMin] = useState(null);
    const [max,setMax] = useState(null);

    return(
        <>
            <Header/>
            <section className="subHeader">
                <p>
                    <span>
                        Encontre Trabalhos
                    </span>
                    Precisa do serviço de um profissional?
                    <Link to={"/"}>Crie um Projeto</Link>
                    ou
                    <Link to={"/profissionais"}>Procure um Profissional</Link>
                </p>
            </section>
            <form>
                <header className="header">
                    Filtrar por:
                </header>
                <section className="orcamento">
                    <header>
                        <p>Orçamento</p>
                    </header>
                    <article>
                        <input
                            type="number"
                            value={min}
                            onChange={(e) => setMin(e.target.value)}
                            placeholder="min"
                        />
                        <p>Para</p>
                        <input
                            type="number"
                            value={max}
                            onChange={(e) => setMax(e.target.value)}
                            placeholder="max"
                        />
                    </article>
                </section>
                <section className="habilidades">

                </section>
            </form>
        </>
    )
}