import React, { useContext } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectedJobContext } from "../../contexts/SelectedJobContext";

export default function SelectedJob(){

    const {selectedJob,setSelectedJob} = useContext(selectedJobContext);

    const handleLess = () =>{
        if(selectedJob > 1){
            setSelectedJob(selectedJob - 1);
        }
    }

    const handleMore = () =>{
        setSelectedJob(selectedJob + 1);
    }

    return(
        <section style={{display:"flex",alignItems:"center"}} className="selectJobCounter">
            <div className="less" onClick={handleLess}>
                <button>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>   
            </div>
            <div className="selection">{selectedJob}</div>
            <div className="more" onClick={handleMore}>
                <button>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </section>
    )
}