import React, { useState } from "react";
import {Link} from "react-router-dom";
import MaskedInput from "../components/maskedInput";
import ButtonHome from "../components/buttonHome";
import RadioInput from "../components/radioInput";
import CheckboxInput from "../components/checkboxInput";

export default function Register(){

    const [nome,setNome] = useState("");
    const [username,setUsername] = useState("");
    const [cpf,setCpf] = useState("");
    const [nasc,setNasc] = useState(null);
    const [email,setEmail] = useState("");
    const [telefone,setTelefone] = useState(null);
    const [client,setClient] = useState("");
    const [passowrd,setPassword] = useState("");

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
                    <MaskedInput
                        type="text"
                        label="data de nascimento"
                        value={nasc}
                        setValue={setNasc}
                        mask={"99/99/9999"}
                    />
                    <MaskedInput
                        type="email"
                        label="Seu Email"
                        value={email}
                        setValue={setEmail}
                    />
                    <MaskedInput
                        type="text"
                        label="Número de telefone (opcional)"
                        value={telefone}
                        setValue={setTelefone}
                        mask={"(99) 999999-9999"}
                    />
                    <div className="choose" style={{display:"flex"}}>
                        <RadioInput
                            name="client"
                            value="cliente"
                            setValue={setClient}
                            label="Cliente"
                        />
                        <RadioInput
                            name="client"
                            value="programador"
                            setValue={setClient}
                            label="Programador"
                        />
                        <RadioInput
                            name="client"
                            value="designer"
                            setValue={setClient}
                            label="Designer"
                        />
                    </div>
                    <MaskedInput
                        type="password"
                        label="Crie uma senha"
                        value={passowrd}
                        setValue={setPassword}
                    />
                    <CheckboxInput
                        label="Eu concordo com os Termos de Serviço e a Politica de Privacidade"
                    />
                    <CheckboxInput
                        label="Desejo receber propragandas promocionais por e-mail"
                    />
                    <button className="createAccount">Criar Conta</button>
                </form>
            </section>
            <aside>
            <span className="round"></span>
                <h1>Já <br/> possui<br/> uma<br/> conta?</h1>
                <Link to={"/login"}><button>Faça login</button></Link>
                <span className="round-brackets">{`{}`}</span>
            </aside>
        </div>
    )
}