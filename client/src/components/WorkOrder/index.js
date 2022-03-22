import React from 'react';
import images from '../../assets/images';
import OrangeButton from '../OrangeButton';
import ItemOrder from '../ItemOrder';
import Title from '../Title';
import style from './style.css';

class WorkOrder extends React.Component {

    render(){

      return (
        <div className="workOrderWrapper">
          <Title text="Порядок выполнения работ" under />
          <div className="workOrderItemWrapper">
            <ItemOrder
              number="1"
              title="Заявка" 
              text={`Вы оставляете заявку :
                — заполнив любую форму
                на сайте, — по телефону,
                — или в одном из офисов продаж.`} 
            />
            <ItemOrder
              number="2"
              title="Договор" 
              text={`Вы оставляете заявку :
                — заполнив любую форму
                на сайте, — по телефону,
                — или в одном из офисов продаж.`} 
            />
            <ItemOrder
              number="3"
              title="Изготовление" 
              text={`Вы оставляете заявку :
                — заполнив любую форму
                на сайте, — по телефону,
                — или в одном из офисов продаж.`} 
            />
            <ItemOrder
              number="4"
              title="Установка" 
              text={`Вы оставляете заявку :
                — заполнив любую форму
                на сайте, — по телефону,
                — или в одном из офисов продаж.`} 
            />
            <ItemOrder
              number="5"
              title="Оплата" 
              text={`Вы оставляете заявку :
                — заполнив любую форму
                на сайте, — по телефону,
                — или в одном из офисов продаж.`} 
            />
          </div>
          <div className="workOrderBtnWrapper">
            <OrangeButton text="Заказать" />
          </div>
        </div>
      );
    }
}
export default WorkOrder;