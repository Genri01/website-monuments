import React from 'react'; 
import CardsMonument from '../CardsMonument/index';
import OrangeButton from '../OrangeButton';
import Title from '../Title'; 
import { top_product } from '../../config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTabHeader } from '../../redux/actions/app';
import { setCategory } from '../../redux/actions/cart';
import './style.css';

export default function TopMonument(props) {
  
  const { mobile } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="topMonumentWrapper" >
      {
        mobile ?
        <>
          <Title margin="30px 0px 0px 0px" size={33} text="Мы предлагаем:" under/>
          <div className="mobileCardMonumentContainer">
            {
              top_product.map((item, i) => (<CardsMonument key={i} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} category={item.category} prop={item.prop} info={item.info} />))
            } 
          </div>
          <div className='buttonContainer'>
            <OrangeButton  width={238} text="Перейти в каталог" onClick={() => {dispatch(setTabHeader(1)); navigate('/catalog/all'); dispatch(setCategory('all')); }} />
          </div>
        </>
        :
        <>
          <Title margin="50px 0px 0px 0px" size={38} text="Мы предлагаем:" under/>
          <div className="cardMonumentContainer">
            {
              top_product.map((item, i) => (<CardsMonument key={i} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} category={item.category} prop={item.prop} info={item.info} />))
            } 
          </div>
          <div className='buttonContainer'>
            <OrangeButton  width={238} text="Перейти в каталог" onClick={() => {dispatch(setTabHeader(1)); navigate('/catalog/all'); dispatch(setCategory('all')); }} />
          </div>
        </>
      }
    </div>
  );
}
 