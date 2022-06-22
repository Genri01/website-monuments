import React from 'react';
import './style.css';
import HeaderMenu from '../../components/HeaderMenu';
import Title from '../../components/Title';
import CardsMonument from '../../components/CardsMonument';
import { products } from '../../config';
import { useSelector } from 'react-redux';
import { cart } from '../../redux/selectors';
import FilterItem from '../../components/FilterItem';

function CatalogScreen(props) {

  const { mobile } = props; 
  const category = useSelector(cart.category);

  let text = '';
  let category_obj_all = [];
  let category_obj = [];
  let prod = [];

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
    case 'children':
      text = 'Детские';
      break; 
    case 'forms':
      text = 'Формы';
      break; 
  
    default:
      break;
  }

  products.map((item,i) => {console.log(item);item.category === category ? category_obj.push(...item.items) : category_obj_all.push(...item.items); return false});
  category_obj.length === 0 ? prod.push(...category_obj_all) : prod.push(...category_obj);

    return (
      <div className="main_screen" >
        <HeaderMenu  mobile={mobile} />
        <div className='catalog_wrapper'>
          {
            mobile ?
            <>
            <Title margin="110px 0px 0px 0px" size={33} text={`Категория: ${text}`} />
            <FilterItem customclass="titleFilter" category={category} />
              <div className="mobileCardMonumentContainer">
              {
                prod.map((item, i) => (<CardsMonument key={i} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} category={item.category} prop={item.prop} info={item.info} />))
              } 
              </div> 
            </>
            :
            <>
              <Title margin="50px 0px 0px 0px" size={38} text={`Категория: ${text}`} />
              <FilterItem customclass="titleFilter" category={category} />
              <div className="cardMonumentContainer">
              {
                prod.map((item, i) => (<CardsMonument key={i} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} category={item.category} prop={item.prop} info={item.info} />))
              } 
              </div> 
            </>
          }
        </div>
      </div>
    );
}

export default CatalogScreen;
