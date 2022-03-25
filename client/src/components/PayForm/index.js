
import React from 'react';
import ProductItem from '../ProductItem';
import images from '../../assets/images';
import './style.css';

class PayForm extends React.Component {

    render(){
      return (
        <div className="payFormWrapper">
          <div className='titlepayFormContainer'>
            <div className='titlePay textTitlepayForm'>Способ оплаты</div>
          </div>
          <div className='payFormContainer'>
            <div className='pay'><input type="Radio"  style={{ marginRight:'10px' }}/>Наличными в офисе</div>
            <div className='pay'><input type="Radio" disabled  style={{ marginRight:'10px' }}/>Безналичный расчёт</div>
          </div>
        </div>
      );
    }
}

export default PayForm;