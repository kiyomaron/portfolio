import React from 'react';
import "./Work.css";

const Work = (props) => {
  return (
    <div className='work-container'>
        <img className='work-image' src={props.workImageSource} alt="" />
        <h3>{props.workTitle}</h3>
        <p>{props.description}</p>
        <p>{props.skills}</p>
    </div>
  );
};

export default Work;