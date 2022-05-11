import React from 'react';
import OrangeButton from '../OrangeButton';
import ProductForm from '../ProductForm';
import BuyerForm from '../BuyerForm';
import ComentForm from '../ComentForm';
import LocationForm from '../LocationForm';
import TransferForm from '../TransferForm';
import PayForm from '../PayForm';
import './style.css';

export default function CartBlock(props) {
  const { mobile } = props;
  return (
    <div  style={ mobile ? { padding: '0px 10px' } : {} } className="cartBlockWrapper">
      {
        mobile ?
        <>
        <div className='mobileProductWrapper'>
          <ProductForm mobile={mobile} />
          <BuyerForm mobile={mobile} />
          <ComentForm />
          <LocationForm />
          <TransferForm />
          <PayForm />
          <div className='btnWrapperCart'>
          <OrangeButton text="Оформить" />
          </div>
        </div>
        </> :
        <>
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
            <OrangeButton onClick={() => { console.log() }} text="Оформить" />
          </div>
        </>
      }
    </div>
  );
}
 