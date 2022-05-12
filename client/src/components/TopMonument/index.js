import React from 'react'; 
import CardsMonument from '../CardsMonument/index';
import OrangeButton from '../OrangeButton';
import Title from '../Title'; 
import { top_product } from '../../config';
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
            {
              top_product.map((item, i) => (<CardsMonument key={i} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} category={item.category} />))
            } 
          </div>
          <div className='buttonContainer'>
            <OrangeButton  width={238} text="Перейти в каталог" />
          </div>
        </>
        :
        <>
          <Title margin="50px 0px 0px 0px" size={38} text="Мы предлагаем:" under/>
          <div className="cardMonumentContainer">
            {
              top_product.map((item, i) => (<CardsMonument key={i} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} category={item.category} />))
            } 
          </div>
          <div className='buttonContainer'>
            <OrangeButton  width={238} text="Перейти в каталог" />
          </div>
        </>
      }
    </div>
  );
}
 