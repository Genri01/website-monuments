import React from 'react';
import OrangeButton from '../OrangeButton';
import './style.css'


export default function FilterItem(props) {
  const { customclass } = props;
  return (
    <div className={`${customclass === undefined ? '' : customclass} filterItemWrapper `}>
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
 