import React from "react";
import "./ModalWork.css";

const ModalWork = (props) => {
  return (
    <>
        <div className="modal-popup-container">
            <h3>ModalWork</h3>
            <button>✖︎</button>
            <div className='work-container'>
                <h3>{props.workTitle}</h3>
                <p>{props.description}</p>
                <p>{props.skills}</p>
            </div>
        </div>
        
    </>
    
  );
};

export default ModalWork;