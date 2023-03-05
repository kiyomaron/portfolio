import React, { useState } from "react";
import "./ModalWork.css";

const ModalWork = (props) => {
    const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
    { modalOpen && 
        <div className="modal-popup-container">
            <div className="modal-inner-container">
                <h3>{props.workTitle}</h3>
                <div className='work-container'>
                    <img 
                        className='work-image' 
                        src={props.workImageSource} 
                        alt="" 
                    />
                    <p>{props.description}</p>
                    <p>{props.skills}</p>
                </div>
                
                <button onClick={props.handleCloseClick}>✖︎</button>

            </div>
            
            
        </div>
    }
        
        
    </>
    
  );
};

export default ModalWork;