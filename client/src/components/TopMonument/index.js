import React from 'react'; 
import CardsMonument from '../CardsMonument/index';
import OrangeButton from '../OrangeButton';
import Title from '../Title';
import './style.css';

export default function TopMonument(props) {
  const { mobile } = props;
  return (
    <div className="topMonumentWrapper" >
      {
        mobile ?
        <>
          <Title margin="30px 0px 0px 0px" size={33} text="Мы предлагаем:" under/>
          <div className="mobileCardMonumentContainer">
            <CardsMonument />
            <CardsMonument />
            <CardsMonument />
            <CardsMonument />
          </div>
          <div className='buttonContainer'>
            <OrangeButton  width={238} text="Перейти в каталог" />
          </div>
        </>
        :
        <>
          <Title margin="50px 0px 0px 0px" size={38} text="Мы предлагаем:" under/>
          <div className="cardMonumentContainer">
            <CardsMonument />
            <CardsMonument />
            <CardsMonument />
            <CardsMonument />
          </div>
          <div className='buttonContainer'>
            <OrangeButton  width={238} text="Перейти в каталог" />
          </div>
        </>
      }
    </div>
  );
}
 