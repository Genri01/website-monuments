import React from 'react';
import './style.css';

function Title(props) {
    const { text, color, size, margin ,under, z, customclass, id } = props;
    return (
      <div 
      id={id}
      style={{ 
        fontSize: size === undefined ? '40px': size,
        color: color === undefined ? '#333' : color,
        margin: margin === undefined ? '0px' : margin,
        zIndex: z === undefined ? '0' : z,
      }} 
        className={`titleWrapper ${customclass === undefined ? '' : customclass}`}
      >
        <div className="titleContainer">
          <div className="titleText">{ text }</div>
        </div>
        { under && <div className="underline" /> }
      </div>
    );
}

export default Title;
