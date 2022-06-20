import React from 'react';
import './style.css';
import HeaderMenu from '../../components/HeaderMenu'
import MainBlock from '../../components/MainBlock'
import ViewStone from '../../components/ViewStone'
import TopMonument from '../../components/TopMonument'
import AboutProduct from '../../components/AboutProduct'
import WorkOrder from '../../components/WorkOrder'
import FeedbackBlock from '../../components/FeedbackBlock'
import AnswerBlock from '../../components/AnswerBlock'
import DataForm from '../../components/DataForm'
import Title from '../../components/Title';
import CardsMonument from '../../components/CardsMonument';
import { products } from '../../config';
import { useSelector } from 'react-redux';
import { cart } from '../../redux/selectors';
function CatalogScreen(props) {

  const { mobile } = props; 
  const category = useSelector(cart.category);

  let text = '';

  switch (category) {
    case 'all':
      text = 'Все';
      break;
    case 'man':
      text = 'Мужские';
      break;
    case 'woman':
      text = 'Женские';
      break;
    case 'animals':
      text = 'Животные';
      break;
    case 'family':
      text = 'Семейные';
      break;
  
    default:
      break;
  }



    return (
      <div className="main_screen" >
        <HeaderMenu  mobile={mobile} />
        <div className='catalog_wrapper'>
          {
            mobile ?
            <>
            <Title margin="110px 0px 0px 0px" size={33} text={`Категория: ${text}`} under/>
              <div className="mobileCardMonumentContainer">
              {
                products[0].items.map((item, i) => (<CardsMonument key={i} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} category={item.category} prop={item.prop} info={item.info} />))
              } 
              </div> 
            </>
            :
            <>
              <Title margin="50px 0px 0px 0px" size={38} text={`Категория: ${text}`} under/>
              <div className="cardMonumentContainer">
              {
                products[0].items.map((item, i) => (<CardsMonument key={i} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} category={item.category} prop={item.prop} info={item.info} />))
              } 
              </div> 
            </>
          }
        </div>
        {/* <MainBlock /> */}
        {/* <TopMonument /> */}
        {/* <AboutProduct /> */}
        {/* <WorkOrder /> */}
        {/* <FeedbackBlock /> */}
        {/* <AnswerBlock /> */}
        {/* <DataForm />  */}
        {/* <ViewStone /> */}
      </div>
    );
}

export default CatalogScreen;
