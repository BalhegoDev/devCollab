import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <h1>{"{devCollab}"}</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/projetos"}>Projetos</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/profissionais"} >Profissionais</NavLink>
                    </li>
                </ul>
            </nav> 
            <section className="actions">
                <Link to={"/login"}><button>Login</button></Link>
                <Link to={"/dev"}><button>Sou Desenvolvedor</button></Link>
            </section>
        </header>
    )
}