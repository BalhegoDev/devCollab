import React from "react";
import Header from "../components/header";
import WelcomeCard from "../components/welcomeCard";
import "../style/style.css";

export default function Index(){
    return(
        <>
            <Header/>
            <main>
                <WelcomeCard/>
            </main>
        </>
        
    )
}