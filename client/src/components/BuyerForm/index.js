
import React from 'react';
import ProductItem from '../ProductItem';
import images from '../../assets/images';
import './style.css';

export default function BuyerForm(props) {
  const { mobile } = props;
  return (
    <div className="locationFormWrapper">
      <div className='titleLocationContainer'>
        <div className='titlelocation textTitleForm'>Покупатель</div>
      </div>
      <div className='locationContainer'style={{  borderTop: '1px solid #ea402f'}}>
        <div className='locationForm'>
          <div style={ mobile ? { width:'150px', fontSize: '13px' } : {width:'150px'} }>Ф.И.О умершего</div><input className='locationInput' step="1" min="1" max="27" id="count_product" name="count_product" />
        </div>
      </div>
      <div className='locationContainer'>
        <div className='locationForm'>
          <div style={ mobile ? { width:'150px', fontSize: '13px' } : {width:'150px'} }>Дата рождения</div><input className='locationInput'  type="text" name="customer[date_end]" id="customer_date_end" value="" placeholder="01.01.2017" data-type="date" data-start-day="01.01.1900" data-end-day="01.01.2099" data-reload-payment-form="true" data-original-title="" title="" />
        </div>
      </div>
      <div className='locationContainer'>
        <div className='locationForm'>
          <div style={ mobile ? { width:'150px', fontSize: '13px' } : {width:'150px'} }>Дата смерти</div><input className='locationInput'  type="text" name="customer[date_end]" id="customer_date_end" value="" placeholder="01.01.2017" data-type="date" data-start-day="01.01.1900" data-end-day="01.01.2099" data-reload-payment-form="true" data-original-title="" title="" />
        </div>
      </div>
      <div className='locationContainer'>
        <div className='locationForm'>
          <div style={ mobile ? { width:'100px', fontSize: '13px' } : {width:'150px'} }>Загрузить фото</div><input style={ mobile ? { width:'150px', padding: '0px 25px' } : {} } className='downloadInput'  type="button" value="Загрузить файл" data-file="customer_file" />
        </div>
      </div>
      <div className='locationContainer'>
        <div className='locationForm'>
        <div  style={ mobile ? { width:'150px', fontSize: '13px' } : {width:'150px'} } className='pay'>Установка<input type="checkbox" style={{ marginRight:'10px' }}/></div>
        </div>
      </div>
      <div className='locationContainer'>
        <div className='locationForm'>
          <div style={ mobile ? { width:'150px', fontSize: '13px' } : {width:'150px'} }>Ваше Ф.И.О</div><input className='locationInput' step="1" min="1" max="27" id="count_product" name="count_product" />
        </div>
      </div>
      <div className='locationContainer'>
        <div className='locationForm'>
          <div style={ mobile ? { width:'150px', fontSize: '13px' } : {width:'150px'} }>Телефон</div><input className='locationInput' step="1" min="1" max="27" id="count_product" name="count_product" />
        </div>
      </div>
      <div className='locationContainer'>
        <div className='locationForm'>
          <div style={ mobile ? { width:'150px', fontSize: '13px' } : {width:'150px'} }>E-mail</div><input className='locationInput' step="1" min="1" max="27" id="count_product" name="count_product" />
        </div>
      </div>
    </div>
  );
}
