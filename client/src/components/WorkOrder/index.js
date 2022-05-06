import React from 'react';
import images from '../../assets/images';
import OrangeButton from '../OrangeButton';
import ItemOrder from '../ItemOrder';
import Title from '../Title';
import style from './style.css';

export default function WorkOrder(props) {
  const { mobile } = props
  return (
    <div className="workOrderWrapper">
      {
        mobile ?
        <>
        <Title size={22} text="Порядок выполнения работ" under />
        <div className="mobileWorkOrderItemWrapper">
          <ItemOrder
            mobile={mobile}
            number="1"
            title="Заявка" 
            text={`Вы оставляете заявку :
            — заполнив любую форму
            на сайте, — по телефону,
            — или в одном из офисов продаж.`} 
          />
          <ItemOrder
            mobile={mobile}
            number="2"
            title="Договор" 
            text={`Вы оставляете заявку :
            — заполнив любую форму
            на сайте, — по телефону,
            — или в одном из офисов продаж.`} 
          />
          <ItemOrder
            mobile={mobile}
            number="3"
            title="Изготовление" 
            text={`Вы оставляете заявку :
            — заполнив любую форму
            на сайте, — по телефону,
            — или в одном из офисов продаж.`} 
          />
          <ItemOrder
            mobile={mobile}
            number="4"
            title="Установка" 
            text={`Вы оставляете заявку :
            — заполнив любую форму
            на сайте, — по телефону,
            — или в одном из офисов продаж.`} 
          />
          <ItemOrder
            mobile={mobile}
            number="4"
            title="Доставка" 
            text={`Мы доставляем по всей РосссиюС возможностьюб доставки ознакомиться в разделе корзина`} 
          />
          <ItemOrder
            mobile={mobile}
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
        </> :
        <>
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
        number="4"
        title="Доставка" 
        text={`Мы доставляем по всей РосссиюС возможностьюб доставки ознакомиться в разделе корзина`} 
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
        </>
      }
    </div>
  );
}
