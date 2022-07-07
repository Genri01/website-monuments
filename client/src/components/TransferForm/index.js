
import React from 'react';
import { setDeliveryMethod } from '../../redux/actions/cart';
import { useDispatch, useSelector  } from 'react-redux';
import { cart } from '../../redux/selectors';
import './style.css';

export default function TransferForm(props) {
  const { mobile } = props;

  const dispatch = useDispatch(); 
  const delivery_method = useSelector(cart.delivery_method);

  const inputs = [
    {
      name: "delivery",
      value: "transit",
      title: 'Доставка транспортной кампанией (оплачивается заказчиком)',
    },
    {
      name: "delivery",
      value: "transitandinstall",
      title: 'Доставка и установка',
    },
    {
      name: "delivery",
      value: "maycop",
      title: 'Cамовывоз с производства г. Майкоп Промышленная 54а',
    },
    {
      name: "delivery",
      value: "anapa",
      title: 'Cамовывоз с производства г. Анапа Чехова 50а',
    },
  ]
  return (
    <div className="payFormWrapper">
      <div className='titlepayFormContainer'>
        <div className='titlePay textTitlepayForm'>Способ доставки</div>
      </div>
      <div className='payFormContainer'>  
        {
          inputs.map((item) => (<div key={item.value} className='pay'><div className='check_container'><input type="Radio" checked={delivery_method === item.value} onChange={(e) => {  item.checked = e.target.checked;  dispatch(setDeliveryMethod(e.target.value)) }}  name={item.name} value={item.value} /></div><div className='label_container'>{item.title}</div></div>))
        } 
      </div>
    </div>
  );
}
