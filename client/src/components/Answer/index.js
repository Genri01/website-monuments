import React, { useState } from 'react';
import './style.css';
import images from '../../assets/images'; 

export default function Answer(props) {

  const { title, description, mobile } = props;
  const { cross } = images; 
  const [isToggleOn,setIstoogle] =useState(true);
  return (
    <div className="answer_container">
    <div style={mobile ? { paddingLeft: '6%'} : {} } className="answer_cross">
      <img onClick={() => setIstoogle(!isToggleOn)} className={`cross_rotate ${!isToggleOn ? 'on_crooss' : 'off_crooss' }`} src={cross} alt="logo" width="15" height="15" />
      <div className={`${mobile ? 'mobileAnswerTitle' : "answer_title"}`} onClick={() => setIstoogle(!isToggleOn)}>{title}</div>
    </div>
    {!isToggleOn ? <div className="answer_description" dangerouslySetInnerHTML={{__html: description}} /> : ''}
    </div>
  );
}
 