import React, { useState } from "react";
import "./ModalWork.css";

const ModalWork = (props) => {
    const [modalOpen, setModalOpen] = useState(true);
    const handleCloseClick = () => {
        setModalOpen(false);
        console.log(modalOpen);
    }
  return (
    <>
    { modalOpen && 
        <div className="modal-popup-container">
            <h3>ModalWork</h3>
            <button onClick={() => handleCloseClick()}>✖︎</button>
            <div className='work-container'>
                <h3>{props.workTitle}</h3>
                <p>{props.description}</p>
                <p>{props.skills}</p>
            </div>
        </div>

    }
        
        
    </>
    
  );
};

export default ModalWork;