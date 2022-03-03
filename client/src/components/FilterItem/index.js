import React from 'react';
import './style.css'

class FilterItem extends React.Component {

    render(){

      return (
        <div className="filterItemWrapper">
          <div className="filterItemCol">
            <div className="titleItem">мужские</div>
            <div className="titleItem">женские</div>
          </div>
          <div className="filterItemCol">
            <div className="titleItem">семейные</div>
            <div className="titleItem">детские</div>
          </div>
          <div className="filterItemCol">
            <div className="titleItem">животным</div>
            <div className="titleItem">бабушкам</div>
          </div>
          <div className="filterItemCol">
            <div className="titleItem">дедушкам</div>
          </div>
        </div>
      );
    }
}

export default FilterItem;
