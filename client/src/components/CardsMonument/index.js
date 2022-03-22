import React from 'react';
import images from '../../assets/images';
import OrangeButton from '../OrangeButton';
import { HashLink as Link } from 'react-router-hash-link'
import './style.css'


class CardsMonument extends React.Component {

  render(){
    const { pum } = images;
    
      return (
        <div className="CardsItemWrapper">
          <div className="CardsItemTop">
            <img src={pum} alt='statuy' width={200} height={200}/>
          </div>
          <div className="CardsItemBottom">
            <div className="txtCardsName">Памятник</div>
            <div className="txtCardsAbout">Из гранита очь крутой прям стоит брать!</div>
            <div className="txtCardsPrice">1500руб.</div>
            <Link to={"/shop"}><OrangeButton margin="20px 0px 0px 0px" text="Подробнее" onClick={() => { console.log('w') }} /></Link> 
          </div>
        </div>
      );
    }
}

export default CardsMonument;