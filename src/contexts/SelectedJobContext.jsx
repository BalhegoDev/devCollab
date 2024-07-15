import { createContext, useState } from "react";

export const selectedJobContext = createContext();

export default function SelectedJobProvider({children}){

    const [selectedJob,setSelectedJob] = useState(1)

    return(
        <selectedJobContext.Provider value={{selectedJob,setSelectedJob}}>
            {children}
        </selectedJobContext.Provider>
    )
}