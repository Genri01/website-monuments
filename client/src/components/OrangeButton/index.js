import React from 'react';
import './style.css';

function OrangeButton(props) {
    const { text, width, height, color, onClick, margin, disabled} = props;
    return (
      <div 
        style={{ 
          pointerEvents: disabled ? 'none' : 'all', 
          width: width === undefined ? '150px': width,
          height: height === undefined ? '40px' : height,
          margin: margin === undefined ? '0px' : margin,
          background: disabled ? '#c7c7c7' : `linear-gradient(0deg, ${color === undefined ? '#ea402f': color} 0%, ${color === undefined ? '#ea402f': color} 100%)` 
        }} 

        className="wrapperOrangeButton"
        onClick={onClick === undefined ? () => {} : () => onClick()}
      >
        <div className="textOrangeButton">{ text }</div>
      </div>
    );
}

export default OrangeButton;
