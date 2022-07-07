
import React from 'react'; 
import './style.css';
import { setPayMethod } from '../../redux/actions/cart'
import { useDispatch, useSelector } from 'react-redux'; 
import { cart } from '../../redux/selectors';

export default function PayForm(props) {
  const { mobile } = props;

  const dispatch = useDispatch(); 
  const pay_method = useSelector(cart.pay_method);

  const inputs = [
    {
      name: "pay",
      value: "nal",
      title: 'Наличными в офисе',
    },
    {
      name: "pay",
      value: "beznal",
      title: 'Безналичный расчёт (Сбербанк онлайн)',
    } 
  ]

  return (
    <div className="payFormWrapper">
      <div className='titlepayFormContainer'>
        <div className='titlePay textTitlepayForm'>Способ оплаты</div>
      </div>
      <div style={ mobile ? { width:'130px' } : {} } className='payFormContainer'>
        {
          inputs.map((item) => (<div key={item.value} className='pay'><div className='check_container'><input type="Radio" checked={pay_method === item.value} onChange={(e) => {  item.checked = e.target.checked;  dispatch(setPayMethod(e.target.value)) }}  name={item.name} value={item.value} /></div>{item.title}</div>))
        }
      </div>
    </div>
  );
}
 