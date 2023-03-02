import React from 'react';
import "./Work.css";

const Work = (props) => {
  const popupDetailClick = () => {
    console.log("Hello");
  }
  return (
    <div className='work-container'>
      <a href="#" onClick={popupDetailClick}>
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
  );
};

export default Work;