
import React from 'react';
import ProductItem from '../ProductItem';
import images from '../../assets/images';
import { useDispatch,useSelector } from 'react-redux';
import {  
  setDelBuy
 } from '../../redux/actions/cart';
 import { cart } from '../../redux/selectors';
 import { priceDelivery } from '../../config';
import './style.css';

export default function ProductForm(props) {
  const { mobile } = props;
  const dispatch = useDispatch();
  const buy = useSelector(cart.buy);
  
  let sumPrice = 0;
  buy.map((item) => { sumPrice += Number(item.price ) * item.count ;return false});
 
console.log(buy)
  return (
    <div className="productFormWrapper">
      {
        mobile ? 
        <>
          <div style={mobile ? {justifyContent: 'space-evenly'} : {} } className='titleProductContainer'>
          <div className='mobilePhotoProduct mobileTextTitleForm'>Фото</div>
          <div className='mobileNameProduct mobileTextTitleForm'>Наименование</div>
          <div className='countProduct mobileTextTitleForm'>Кол-во</div>
          <div className='mobilePriceProduct mobileTextTitleForm'>Цена</div>
          <div className='allpriceProduct mobileTextTitleForm'>Итого</div>
          </div>
          <div className='productContainer'>
            { 
              buy.map((item,i) => (<ProductItem key={i} onClick={()=>{dispatch(setDelBuy(`${item.id}`))}} id={item.id} mobile={mobile} photo={item.img} name={item.title} count={item.count} price={item.price} /> ))
            }
          </div>
          <div className='transportContainer'>
          <div className='mobileProductFormTitle'>Доставка транспортной кампанией (оплачивается заказчиком):</div>
          <div className='mobileProductFormPrice'>{ buy.length !== 0 ? priceDelivery : 0 }</div>
          </div>
          <div className='salesContainer'>
          <div className='mobileProductFormTitle'>Предварительная стоимость: </div>
          <div className='mobileProductFormPrice'>{ sumPrice }</div>
          </div>
          <div className='priceContainer'>
          <div className='mobileProductFormTitle' style={{fontWeight: 'bold'}}>Итого:  </div>
          <div className='mobileProductFormPrice'>{ priceDelivery + (buy.length !== 0 ? sumPrice : 0)}</div>
          </div>
        </> :
        <>
          <div className='titleProductContainer'>
          <div className='photoProduct textTitleForm'>Фото</div>
          <div className='nameProduct textTitleForm'>Наименование товара</div>
          <div className='countProduct textTitleForm'>Количество</div>
          <div className='priceProduct textTitleForm'>Цена</div>
          <div className='allpriceProduct textTitleForm'>Итогова Цена</div>
          </div>
          <div className='productContainer'>
            { 
              buy.map((item,i) => (<ProductItem key={i} onClick={()=>{dispatch(setDelBuy(`${item.id}`))}} id={item.id} mobile={mobile} photo={item.img} name={item.title} count={item.count} price={item.price} /> ))
            }
          </div>
          <div className='transportContainer'>
          <div className='productFormTitle'>Доставка транспортной кампанией (оплачивается заказчиком):</div>
          <div className='productFormPrice'>{ buy.length !== 0 ? priceDelivery : 0 }</div>
          </div>
          <div className='salesContainer'>
          <div className='productFormTitle'>Предварительная стоимость: </div>
          <div className='productFormPrice'>{ sumPrice }</div>
          </div>
          <div className='priceContainer'>
          <div className='productFormTitle' style={{fontWeight: 'bold'}}>Итого:  </div>
          <div className='productFormPrice'>{ priceDelivery + buy.length !== 0 ? sumPrice : 0}</div>
          </div>
        </>
      }
    </div>
  );
}
