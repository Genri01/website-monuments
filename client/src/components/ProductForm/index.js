
import React from 'react';
import ProductItem from '../ProductItem'; 
import { useDispatch,useSelector } from 'react-redux';
import {  
  setDelBuy
 } from '../../redux/actions/cart';
 import { cart } from '../../redux/selectors';
 import { setMaterial, setWidth } from '../../redux/actions/cart';

 import { priceDelivery,arrayMaterial } from '../../config';
import './style.css';

export default function ProductForm(props) {
  const { mobile } = props;
  const dispatch = useDispatch();
  const buy = useSelector(cart.buy); 
 
  const width = useSelector(cart.width);
  const material = useSelector(cart.material);

  let sumPrice = 0;
  buy.map((item) => { sumPrice += Number(item.price ) * item.count ;return false});
 
  let priceMaterial = (width > 4 && material === 2) ? 0 : arrayMaterial[width][material];




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
          <div className='salesContainer'>
            <div className='mobileProductFormTitle'>Предварительная стоимость: </div>
            <div className='mobileProductFormPrice'>{ sumPrice }</div>
          </div>
          <div className='transportContainer'>
            <div className='mobileProductFormTitle'>Доставка транспортной кампанией (оплачивается заказчиком):</div>
            <div className='mobileProductFormPrice'>{ buy.length !== 0 ? priceDelivery : 0 }</div>
          </div>
          <div className='salesContainer'>
            <div className='mobileProductFormTitle'>
              <div className='productFormTitle'>Параметры: </div>
              <select value={width} onChange={(e) => {dispatch(setWidth(+e.target.value))}} className="locationInput" name="width" id="width" data-theme="bootstrap" data-onchange="reloadAll">
                  <option value={0}> --- Выбрать --- </option>
                  <option value={1}>90x180x10</option>
                  <option value={2}>90x180x15</option>
                  <option value={3}>120x180x10</option>
                  <option value={4}>120x180x15</option>
                  <option value={5}>150x180x10</option>
                  <option value={6}>150x180x15</option>
                  <option value={7}>180x180x10</option>
                  <option value={8}>180x180x15</option>
                  <option value={9}>210x240x10</option>
                  <option value={10}>210x240x15</option>
                  <option value={11}>240x240x10</option>
                  <option value={12}>240x240x15</option>
                  <option value={13}>240x420x10</option>
                  <option value={14}>240x420x15</option>
              </select> 
            </div> 
          </div>
          <div className='salesContainer'>
            <div className='mobileProductFormTitle'>
            <div className='productFormTitle'>Плитка: </div>
              <select value={material} onChange={(e) => {dispatch(setMaterial(+e.target.value))}} className="locationInput" name="material" id="material" data-theme="bootstrap" data-onchange="reloadAll">
                <option value={0}>Тротуарная</option>
                <option value={1}>Керамогранитная</option>
                <option value={2}>Гранитная</option> 
              </select> 
            </div>
            <div className='mobileProductFormPrice'>{ arrayMaterial[width][material] }</div>
          </div>
          <div className='priceContainer'>
            <div className='mobileProductFormTitle' style={{fontWeight: 'bold'}}>Итого:  </div>
            <div className='mobileProductFormPrice'>{ priceDelivery + (buy.length !== 0 ? sumPrice : 0) + priceMaterial }</div>
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
          <div className='salesContainer'> 
            <div className='productFormTitle'>Параметры: </div>
              <select value={width} onChange={(e) => {dispatch(setWidth(+e.target.value))}} className="locationInputWidth" name="width" id="width" data-theme="bootstrap" data-onchange="reloadAll">
                <option value={0}> --- Выбрать --- </option>
                <option value={1}>90x180x10</option>
                <option value={2}>90x180x15</option>
                <option value={3}>120x180x10</option>
                <option value={4}>120x180x15</option>
                <option value={5}>150x180x10</option>
                <option value={6}>150x180x15</option>
                <option value={7}>180x180x10</option>
                <option value={8}>180x180x15</option>
                <option value={9}>210x240x10</option>
                <option value={10}>210x240x15</option>
                <option value={11}>240x240x10</option>
                <option value={12}>240x240x15</option>
                <option value={13}>240x420x10</option>
                <option value={14}>240x420x15</option>
              </select>  
          </div>
          <div className='salesContainer'> 
            <div className='productFormTitle'>Виды плитки: </div>
              <select value={material} onChange={(e) => {dispatch(setMaterial(+e.target.value))}} className="locationInputWidth" name="material" id="material" data-theme="bootstrap" data-onchange="reloadAll">
                <option value={0}>Тротуарная</option>
                <option value={1}>Керамогранитная</option>
                <option value={2}>Гранитная</option> 
              </select> 
            <div className='productFormPriceWidth'>{ arrayMaterial[width][material] }</div>
          </div>
          <div className='priceContainer'>
            <div className='productFormTitle' style={{fontWeight: 'bold'}}>Итого:  </div>
            <div className='productFormPrice'>{ priceDelivery + (buy.length !== 0 ? sumPrice : 0) + priceMaterial }</div>
          </div>
        </>
      }
    </div>
  );
}
