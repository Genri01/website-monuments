import React from 'react'; 
import OrangeButton from '../OrangeButton';
import ItemOrder from '../ItemOrder';
import Title from '../Title';
import { ordedr_work } from '../../config'
import './style.css';

export default function WorkOrder(props) {
  const { mobile } = props
  return (
    <div className="workOrderWrapper">
      {
        mobile ?
        <>
          <Title size={22} text="Порядок выполнения работ" under />
          <div className="mobileWorkOrderItemWrapper">
            {
              ordedr_work.map((item, i) => (<ItemOrder key={i} mobile={mobile} number={i+1} title={item.title} text={item.description} />))
            } 
          </div>
          <div className="workOrderBtnWrapper">
          <OrangeButton text="Заказать" />
          </div>
          </> :
        <>
          <Title text="Порядок выполнения работ" under />
          <div className="workOrderItemWrapper">
            {
              ordedr_work.map((item, i) => (<ItemOrder key={i} number={i+1} title={item.title} text={item.description} />))
            }  
          </div>
          <div className="workOrderBtnWrapper">
          <OrangeButton text="Заказать" />
          </div>
        </>
      }
    </div>
  );
}
