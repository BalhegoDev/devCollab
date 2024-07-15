import React from "react";
import company from "../../assets/company.svg";

export default function Outdoor({children}){
    return(
        <section className="outdoor">
            <span className="round1"></span>
            <article className="content">
                {children}
            </article>
            <img src={company}/>
            <span className="round2"></span>
        </section>
    )
}