import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import AsideFilterProjects from "../components/asideFilterProjects";

export default function Projetos() {

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
      <main className="main_projects">
        <AsideFilterProjects/>
      </main>
    </>
  );
}
