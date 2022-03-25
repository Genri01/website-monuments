
import React from 'react';
import ProductItem from '../ProductItem';
import images from '../../assets/images';
import './style.css';

class TransferForm extends React.Component {

    render(){
      return (
        <div className="payFormWrapper">
          <div className='titlepayFormContainer'>
            <div className='titlePay textTitlepayForm'>Способ доставки</div>
          </div>
          <div className='payFormContainer'>
            <div className='pay'><input type="Radio" style={{ marginRight:'10px' }}/>Доставка транспортной кампанией (оплачивается заказчиком)</div>
            <div className='pay'><input type="Radio" style={{ marginRight:'10px' }} />Cамовывоз с производства г. Майкоп Промышленная 54а</div>
            <div className='pay'><input type="Radio" style={{ marginRight:'10px' }} />Cамовывоз с производства г. Анапа Чехова 50а</div>
          </div>
        </div>
      );
    }
}

export default TransferForm;