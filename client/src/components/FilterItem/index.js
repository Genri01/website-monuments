import React from 'react';
import OrangeButton from '../OrangeButton';
import './style.css'

class FilterItem extends React.Component {

    render(){

      return (
        <div className="filterItemWrapper">
          <div className="filterItemCol">
            <OrangeButton text="мужские" />
            <OrangeButton margin="0px 0px 0px 10px" text="женские" />
          </div>
          <div className="filterItemCol">
          <OrangeButton text="семейные" />
            <OrangeButton margin="0px 0px 0px 10px" text="детские" />
          </div>
          <div className="filterItemCol">
          <OrangeButton text="животным" />
            <OrangeButton margin="0px 0px 0px 10px" text="бабушкам" />
          </div>
          <div className="filterItemCol">
          <OrangeButton text="дедушкам" />
          </div>
        </div>
      );
    }
}

export default FilterItem;