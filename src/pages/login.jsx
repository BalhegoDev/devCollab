import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/input";

export default function Login(){
    return(
        <div className="login-container">
            <aside>
                <span className="round"></span>
                <h1>Ainda não tem uma conta?</h1>
                <Link to={"/register"}><button>Crie uma conta</button></Link>
                <span className="round-brackets">{`{}`}</span>
            </aside>
            <section className="login-side">
                <p>{`{devCollab}`}</p>
                <h2>Olá, é bom te ver de novo!</h2>
                <p>Faça login</p>
            <form>
                <Input label={"Seu e-mail"} type={"email"} placeholder={"Digite seu email"}/>
                <Input label={"Sua senha"} type={"password"} placeholder={"Digite sua senha"}/>
            </form>
            </section>
        </div>
        
    )
}