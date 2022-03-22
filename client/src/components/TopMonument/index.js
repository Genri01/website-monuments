import React from 'react'; 
import CardsMonument from '../CardsMonument/index';
import OrangeButton from '../OrangeButton';
import Title from '../Title';
import './style.css';

class TopMonument extends React.Component {

    render(){

      return (
        <div className="topMonumentWrapper" >
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
        </div>
      );
    }
}

export default TopMonument;