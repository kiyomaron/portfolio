import React from 'react';
import ModalWork from './ModalWork';
import "./Work.css";
import { useState } from 'react';
import { createPortal } from 'react-dom';

const Work = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className='work-container'>
        <a 
          href="#" 
          onClick={() => setModalOpen(true)} 
          disabled={modalOpen}
        >
          <img 
              className='work-image' 
              src={props.workImageSource} 
              alt="" 
          />
        </a>
        <h3>{props.workTitle}</h3>
        <p>{props.description}</p>
        <p>{props.skills}</p>

      </div>

      {modalOpen && 
        <ModalWork 
          handleCloseClick={() => setModalOpen(false)} 
          workTitle={props.workTitle} 
          description={props.description}
          skills={props.skills}
        />}
      
    </>
    
  );
};

export default Work;