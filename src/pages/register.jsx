import React, { useState } from "react";
import {Link} from "react-router-dom";
import MaskedInput from "../components/maskedInput";
import ButtonHome from "../components/buttonHome";

export default function Register(){

    const [nome,setNome] = useState("");
    const [username,setUsername] = useState("");
    const [cpf,setCpf] = useState("");

    return(
        <div className="register-container">
            <section className="register-side">
                <header className="register-header">
                    <ButtonHome/>
                    <p className="title">{`{devCollab}`}</p>
                </header>
                <h2>Bem-vindo ao devCollab!</h2>
                <p>Crie sua conta</p>
                <form>
                    <MaskedInput
                        type="text"
                        label="Seu nome completo"
                        value={nome}
                        setValue={setNome}
                    />
                    <MaskedInput
                        type="text"
                        label="Nome de usuário"
                        value={username}
                        setValue={setUsername}
                    />
                    <MaskedInput
                        type="text"
                        label="Seu CPF"
                        value={cpf}
                        setValue={setCpf}
                        mask={"999.999.999-99"}
                    />
                </form>
            </section>
            <aside>
            <span className="round"></span>
                <h1>Já possui uma conta?</h1>
                <Link to={"/login"}><button>Faça login</button></Link>
                <span className="round-brackets">{`{}`}</span>
            </aside>
        </div>
    )
}