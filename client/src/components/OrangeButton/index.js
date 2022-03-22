import React from 'react';
import './style.css';

function OrangeButton(props) {
    const { text, width, height, color, onClick, margin} = props;
    return (
      <div 
        style={{ 
          width: width === undefined ? '150px': width,
          height: height === undefined ? '40px' : height,
          margin: margin === undefined ? '0px' : margin,
          background:`linear-gradient(0deg, ${color === undefined ? '#ea402f': color} 0%, ${color === undefined ? '#ea402f': color} 100%)` 
        }} 

        className="wrapperOrangeButton"
        onClick={onClick === undefined ? () => {} : () => onClick()}
      >
        <div className="textOrangeButton">{ text }</div>
      </div>
    );
}

export default OrangeButton;
