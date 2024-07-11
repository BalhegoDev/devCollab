import React, {useState ,createContext } from "react";

export const filterContext = createContext();

export default function FilterProvider({children}){

    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const [individual, setIndividual] = useState(false);
    const [equipe, setEquipe] = useState(false);
    const [precisaDesign, setPrecisaDesign] = useState(false);
    const [apenasDesign, setApenasDesign] = useState(false);

    return(
        <filterContext.Provider value={{min,setMin,max,setMax,individual,setIndividual,equipe,setEquipe,precisaDesign,setPrecisaDesign,apenasDesign,setApenasDesign}}>
            {children}
        </filterContext.Provider>
    )
}