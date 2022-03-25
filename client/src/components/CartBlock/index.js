import React from 'react';
import Title from '../Title';
import OrangeButton from '../OrangeButton';
import ProductForm from '../ProductForm';
import BuyerForm from '../BuyerForm';
import ComentForm from '../ComentForm';
import LocationForm from '../LocationForm';
import TransferForm from '../TransferForm';
import PayForm from '../PayForm';
import './style.css';

class CartBlock extends React.Component {

    render(){

      return (
        <div className="cartBlockWrapper">
          <div className='productWrapper'>
            <ProductForm />
          </div>
          <div className='infoWrapper'>
            <div className='infoLeftWrapper'>
              <BuyerForm />
              <ComentForm />
            </div>
            <div className='infoRightWrapper'>
              <LocationForm />
              <TransferForm />
              <PayForm />
            </div>
          </div>
          <div className='btnWrapperCart'>
            <OrangeButton text="Оформить" />
          </div>
        </div>
      );
    }
}
export default CartBlock;