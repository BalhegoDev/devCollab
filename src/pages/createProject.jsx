import React, {useState} from "react";
import Header from "../components/layout/header";
import Input from "../components/common/input";
import instance from "../axios";
import { useNavigate } from "react-router-dom";

export default function CreateProject(){

    const [projectTitle,setProjectTitle] = useState("");
    const [valor,setValor] = useState(null);
    const [description,setDescription] = useState("");
    const navigate = useNavigate();
    

    const handleCriarProjeto = (e) =>{
        e.preventDefault();
        
        //titulo, valor, descricao, usuario_criador

        instance.post("/criarProjeto",{
            titulo: projectTitle,
            valor: valor,
            descricao: description,
            usuario_criador: localStorage.getItem("userId")
        })
        .then(() => {
            console.log("Projeto criado com sucesso !");
            navigate("/projetos")
        })
        
        
    }

    return(
        <>
            <Header/>
            <section className="createProjectSection">
                <h2>
                    Crie Seu Projeto
                </h2>
                <form onSubmit={handleCriarProjeto}>
                    <div className="top">
                        <Input
                            type="text"
                            label="Título do Projeto"
                            value={projectTitle}
                            setValue={setProjectTitle}
                        />
                        <Input
                            type="number"
                            label="Valor"
                            value={valor}
                            setValue={setValor}
                        />
                    </div>
                    <label>
                        <span>Descrição do Projeto</span>
                        <textarea rows={10} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </label>
                    <button className="criaProjeto" type="submit">Postar</button>
                </form>
            </section>
        </>
    )
}