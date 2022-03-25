import React from 'react';
import './style.css';
import HeaderMenu from '../../components/HeaderMenu'
import MainBlock from '../../components/MainBlock'
import CartBlock from '../../components/CartBlock'
import ViewStone from '../../components/ViewStone'
import TopMonument from '../../components/TopMonument'
import AboutProduct from '../../components/AboutProduct'
import WorkOrder from '../../components/WorkOrder'
import FeedbackBlock from '../../components/FeedbackBlock'
import AnswerBlock from '../../components/AnswerBlock'
import DataForm from '../../components/DataForm'
import Title from '../../components/Title';

function CartScreen(props) {
    return (
      <div className="cart_screen" >
        <HeaderMenu />
        <div className='backgroundCartProduct'>
          <Title text="Оформление заказа" margin="250px 0px 10px 0px" under/>
        </div>
        <CartBlock />
      </div>
    );
}

export default CartScreen;
