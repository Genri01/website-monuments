import React from 'react';
import './style.css'; 
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
    case 'mramor':
      text = 'Мраморные';
      break; 
    case 'granit':
      text = 'Гранитные';
      break; 
  
    default:
      break;
  }
 
  if(category === 'all') {
    products.map((item,i) => { 
      item.monuments.map((chank) => (category_obj_all.push(...chank.items)))  
    });
  }
 
  if(category === 'mramor' || category === 'granit' || category === 'poly') { 
    if(category === 'granit') {
      products.map((item,i) => { 
        item.monuments.map((chank) => ( chank.material === 'granit' ? category_obj.push(...chank.items) : false )) 
      });
    } else if(category === 'mramor') {
      products.map((item) => { 
        item.monuments.map((chank) => ( chank.material === 'mramor' ? category_obj.push(...chank.items) : false )) 
      });
    } else if(category === 'poly') {
      products.map((item) => { 
        item.monuments.map((chank) => ( chank.material === 'poly' ? category_obj.push(...chank.items) : false )) 
      });
    }   
  } else {
    products.map((item,i) => { 
      if(item.category === category) {
        item.monuments.map((chank) => ( category_obj.push(...chank.items) ))  
      } 
    });
  } 
 
    category_obj.length === 0 ? prod.push(...category_obj_all) : prod.push(...category_obj);

    return (
      <div className="main_screen" > 
        <div className='catalog_wrapper'>
          {
            mobile ?
            <>
            <Title margin="110px 0px 0px 0px" size={33} text={`Категория: ${text}`} />
            <FilterItem mobile={mobile} customclass="titleFilterMobile" scategory={category} />
              <div className="mobileCardMonumentContainer">
              {
                prod.map((item, i) => (<CardsMonument key={i} category={category} count={item.count} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} prop={item.prop} info={item.info} />))
              } 
              </div> 
            </>
            :
            <>
              <Title margin="50px 0px 0px 0px" size={38} text={`Категория: ${text}`} />
              <FilterItem mobile={mobile} customclass="titleFilter" category={category} />
              <div className="cardMonumentContainer">
              {
                prod.map((item, i) => (<CardsMonument key={i} category={category} count={item.count} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} prop={item.prop} info={item.info} />))
              } 
              </div> 
            </>
          }
        </div>
      </div>
    );
}

export default CatalogScreen;
