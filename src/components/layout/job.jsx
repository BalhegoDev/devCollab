import React from "react";

export default function Job({title,description,price}){
    return(
        <>
            <section className="job">
                <header className="header_job">
                    <h2 className="title">{title}</h2>
                </header>
                <article className="article_description">
                    <p>{description}</p>
                </article>
                <aside className="aside_job">
                    <p id="p1">Preço</p>
                    <p id="p2">R$ {price}</p>
                </aside>
            </section>
        </>
    )
}