import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/common/input";
import ButtonHome from "../components/common/buttonHome";
import instance from "../axios";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [connect,setConnect] = useState(false);
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();

        instance.post("/login", {
            email: email,
            senha: senha
        })
        .then((res) => {
            localStorage.setItem("userToken", res.data.token);
            localStorage.setItem("userId", res.data.userId);

            navigate("/");
        })

    }


    return(
        <div className="login-container">
            <aside>
                <span className="round"></span>
                <h1>Ainda não tem uma conta?</h1>
                <Link to={"/register"}><button>Crie uma conta</button></Link>
                <span className="round-brackets">{`{}`}</span>
            </aside>
            <section className="login-side">
                <header className="header-login-side">
                    <ButtonHome/>
                    <p className="title">{`{devCollab}`}</p>
                </header>
            <form onSubmit={handleLogin}>
                <header className="header-form">
                    <h2>Olá, é bom te ver de novo!</h2>
                    <p>Faça login</p>
                </header>
                <Input label={"Seu e-mail"} value={email} setValue={setEmail} type={"email"} placeholder={"Digite seu email"}/>
                <Input label={"Sua senha"} value={senha} setValue={setSenha} type={"password"} placeholder={"Digite sua senha"}/>
                <div className="check">
                    <input type="checkbox" value={connect} onChange={() => setConnect(!connect)}/>
                    <p>mantenha-me conectado</p>
                </div>
                <button type="submit">Entrar</button>
            </form>
            </section>
        </div>
        
    )
}