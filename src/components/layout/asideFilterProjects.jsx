import React, {useContext} from "react";
import { filterContext } from "../../contexts/FilterContext";


export default function AsideFilterProjects(){


    const {min,setMin,max,setMax,individual,setIndividual,equipe,setEquipe,precisaDesign,setPrecisaDesign,apenasDesign,setApenasDesign} = useContext(filterContext);

    return(
        <>
            <form>
            <header className="header">Filtrar por:</header>
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
            <section className="types">
                <p>Tipo</p>
                <label
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    position: "relative",
                }}
                >
                <input
                    type="checkbox"
                    value={individual}
                    onChange={(e) => setIndividual(!individual)}
                />
                <span>Individual</span>
                </label>
                <label
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    position: "relative",
                }}
                >
                <input
                    type="checkbox"
                    value={equipe}
                    onChange={(e) => setEquipe(!equipe)}
                />
                <span>Equipe</span>
                </label>
            </section>
            <section className="design">
                <p>Design</p>
                <label>
                <input
                    type="checkbox"
                    value={precisaDesign}
                    onChange={() => setPrecisaDesign(!precisaDesign)}
                />
                <span>Precisa de Designer</span>
                </label>
                <label>
                <input
                    type="checkbox"
                    value={apenasDesign}
                    onChange={() => setApenasDesign(!apenasDesign)}
                />
                <span>Apenas Designer</span>
                </label>
            </section>
            <button className="filter" type="submit">
                Filtrar
            </button>
            </form>
        </>
    )
}