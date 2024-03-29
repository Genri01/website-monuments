import React from 'react'; 
import CardsMonument from '../CardsMonument/index';
import OrangeButton from '../OrangeButton';
import Title from '../Title'; 
import { top_product } from '../../config';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'; 
import { setCategory } from '../../redux/actions/cart';
import { cart } from '../../redux/selectors'; 
import './style.css';

export default function TopMonument(props) {
  
  const { mobile } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const category = useSelector(cart.category);

  return (
    <div className="topMonumentWrapper" >
      {
        mobile ?
        <>
          <Title margin="30px 0px 0px 0px" size={33} text="Мы предлагаем:" under/>
          <div className="mobileCardMonumentContainer">
            {
              top_product.map((item, i) => (<CardsMonument key={i} category={category} count={item.count} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} prop={item.prop} info={item.info}  />))
            } 
          </div>
          <div className='buttonContainer'>
            <OrangeButton  width={238} text="Перейти в каталог" onClick={() => { navigate('/catalog/all'); dispatch(setCategory('all')); }} />
          </div>
        </>
        :
        <>
          <Title margin="50px 0px 0px 0px" size={38} text="Мы предлагаем:" under/>
          <div className="cardMonumentContainer">
            {
              top_product.map((item, i) => (<CardsMonument key={i} category={category} count={item.count} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} prop={item.prop} info={item.info}  />))
            } 
          </div>
          <div className='buttonContainer'>
            <OrangeButton  width={238} text="Перейти в каталог" onClick={() => { navigate('/catalog/all'); dispatch(setCategory('all')); }} />
          </div>
        </>
      }
    </div>
  );
}
 