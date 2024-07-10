import React, { useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

export default function Projetos() {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [individual, setIndividual] = useState(false);
  const [equipe, setEquipe] = useState(false);
  const [precisaDesign, setPrecisaDesign] = useState(false);
  const [apenasDesign, setApenasDesign] = useState(false);

  return (
    <>
      <Header />
      <section className="subHeader">
        <p>
          <span>Encontre Trabalhos</span>
          Precisa do serviço de um profissional?
          <Link to={"/"}>Crie um Projeto</Link>
          ou
          <Link to={"/profissionais"}>Procure um Profissional</Link>
        </p>
      </section>
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
  );
}
