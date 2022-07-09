import React from 'react';
import './style.css';
import HeaderMenu from '../../components/HeaderMenu' 
import CartBlock from '../../components/CartBlock' 
import Title from '../../components/Title';
import { useSelector } from 'react-redux';
import { app } from '../../redux/selectors'

function CartScreen(props) {
  const mobile = useSelector(app.mobile);
    return (
      <div className="cart_screen" >
        <HeaderMenu mobile={mobile} />
        {
          mobile ? 
          <>
            <div className='backgroundCartProduct'>
              <Title size={25} text="Оформление заказа" margin="280px 0px 10px 0px" under/>
            </div>
            <CartBlock mobile={mobile} />
          </> :
          <>
            <div className='backgroundCartProduct'>
             <Title text="Оформление заказа" margin="250px 0px 10px 0px" under/>
            </div>
            <CartBlock />
          </>
        }
      </div>
    );
}

export default CartScreen;
