import React, { useState } from "react";
import {Link} from "react-router-dom";
import MaskedInput from "../components/common/maskedInput";
import ButtonHome from "../components/common/buttonHome";
import RadioInput from "../components/common/radioInput";
import CheckboxInput from "../components/common/checkboxInput";
import axios from "axios";
import instance from "../axios";

import { useNavigate } from "react-router-dom";


export default function Register(){

    const [nome,setNome] = useState("");
    const [username,setUsername] = useState("");
    const [cpf,setCpf] = useState("");
    const [nasc,setNasc] = useState(null);
    const [email,setEmail] = useState("");
    const [telefone,setTelefone] = useState(null);
    const [client,setClient] = useState("");
    const [passowrd,setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) =>{

        e.preventDefault();
        const splitedNasc = nasc.split("/");
        const newNasc = `${splitedNasc[2]}/${splitedNasc[1]}/${splitedNasc[0]}`

        instance.post("/register",{
            nome: nome,
            nome_usuario: username,
            cpf: cpf,
            data_nascimento: newNasc,
            email: email,
            telefone:telefone,
            senha: passowrd,
            tipo_user: client
        })
        .then(() =>{
            navigate("/login");
        })
    }

    return(
        <div className="register-container">
            <section className="register-side">
                <header className="register-header">
                    <ButtonHome/>
                    <p className="title">{`{devCollab}`}</p>
                </header>
                <h2>Bem-vindo ao devCollab!</h2>
                <p>Crie sua conta</p>
                <form onSubmit={handleRegister}>
                    <MaskedInput
                        id="label1"
                        type="text"
                        label="Seu nome completo"
                        value={nome}
                        setValue={setNome}
                    />
                    <MaskedInput
                        id="label2"
                        type="text"
                        label="Nome de usuário"
                        value={username}
                        setValue={setUsername}
                    />
                    <MaskedInput
                        id="label3"
                        type="text"
                        label="Seu CPF"
                        value={cpf}
                        setValue={setCpf}
                        mask={"999.999.999-99"}
                    />
                    <MaskedInput
                        id="label4"
                        type="text"
                        label="data de nascimento"
                        value={nasc}
                        setValue={setNasc}
                        mask={"99/99/9999"}
                    />
                    <MaskedInput
                        id="label5"
                        type="email"
                        label="Seu Email"
                        value={email}
                        setValue={setEmail}
                    />
                    <MaskedInput
                        id="label6"
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
                        id="label7"
                        type="password"
                        label="Crie uma senha"
                        value={passowrd}
                        setValue={setPassword}
                    />
                    <CheckboxInput
                        id="label8"
                        label="Eu concordo com os Termos de Serviço e a Politica de Privacidade"
                    />
                    <CheckboxInput
                        id="label9"
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