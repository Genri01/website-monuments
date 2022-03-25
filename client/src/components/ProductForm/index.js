
import React from 'react';
import ProductItem from '../ProductItem';
import images from '../../assets/images';
import './style.css';

class ProductForm extends React.Component {

    render(){
      return (
        <div className="productFormWrapper">
          <div className='titleProductContainer'>
            <div className='photoProduct textTitleForm'>Фото</div>
            <div className='nameProduct textTitleForm'>Наименование товара</div>
            <div className='countProduct textTitleForm'>Количество</div>
            <div className='priceProduct textTitleForm'>Цена</div>
            <div className='allpriceProduct textTitleForm'>Итогова Цена</div>
          </div>
          <div className='productContainer'>
            <ProductItem photo={images.view_10} name="Monumetum" count={2} price={170000} />
            <ProductItem photo={images.view_10} name="Monumetum" count={2} price={170000} />
            <ProductItem photo={images.view_10} name="Monumetum" count={2} price={170000} />
            <ProductItem photo={images.view_10} name="Monumetum" count={2} price={170000} />
          </div>
          <div className='transportContainer'>
            <div className='productFormTitle'>Доставка транспортной кампанией (оплачивается заказчиком):</div>
            <div className='productFormPrice'>85000</div>
          </div>
          <div className='salesContainer'>
            <div className='productFormTitle'>Предварительная стоимость: </div>
            <div className='productFormPrice'>120000</div>
          </div>
          <div className='priceContainer'>
            <div className='productFormTitle' style={{fontWeight: 'bold'}}>Итого:  </div>
            <div className='productFormPrice'>205000</div>
          </div>
        </div>
      );
    }
}

export default ProductForm;