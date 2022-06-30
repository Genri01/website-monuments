import React from 'react';
import OrangeButton from '../OrangeButton';
import ProductForm from '../ProductForm';
import BuyerForm from '../BuyerForm';
import ComentForm from '../ComentForm';
import LocationForm from '../LocationForm';
import TransferForm from '../TransferForm';
import PayForm from '../PayForm';
import { useNavigate } from 'react-router-dom';
import { 
  setAddres,
  setBirthdayDate,
  setCity,
  setComent,
  setDeadDate,
  setEmail,
  setDeliveryMethod,
  setFile,
  setIndex,
  setInitial,
  setInitialDead,
  setInsert,
  setInstall,
  setPayMethod,
  setRegion,
  setTel,
  setDelBuy,
  clearBuy
 } from '../../redux/actions/cart';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { cart } from '../../redux/selectors';

export default function CartBlock(props) {

  const { mobile } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buy = useSelector(cart.buy);

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
          <OrangeButton disabled={ buy.length === 0 ? true : false }  text="Оформить" />
          <OrangeButton
              onClick={() => {
                dispatch(setAddres(''));
                dispatch(setBirthdayDate(''));
                dispatch(setCity(''));
                dispatch(setComent(''));
                dispatch(setDeadDate(''));
                dispatch(setEmail(''));
                dispatch(setDeliveryMethod(''));
                dispatch(setFile({}));
                dispatch(setIndex(''));
                dispatch(setInitial(''));
                dispatch(setInitialDead(''));
                dispatch(setInsert({}));
                dispatch(setInstall(false));
                dispatch(setPayMethod(''));
                dispatch(setRegion(''));
                dispatch(setTel(''));
                dispatch(clearBuy());
                navigate('/');
              }}
              text="Отменить"
            />
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
            <OrangeButton disabled={ buy.length === 0 ? true : false } onClick={() => { console.log() }} text="Оформить" />
            <OrangeButton
              onClick={() => {
                dispatch(setAddres(''));
                dispatch(setBirthdayDate(''));
                dispatch(setCity(''));
                dispatch(setComent(''));
                dispatch(setDeadDate(''));
                dispatch(setEmail(''));
                dispatch(setDeliveryMethod(''));
                dispatch(setFile({}));
                dispatch(setIndex(''));
                dispatch(setInitial(''));
                dispatch(setInitialDead(''));
                dispatch(setInsert({}));
                dispatch(setInstall(false));
                dispatch(setPayMethod(''));
                dispatch(setRegion(''));
                dispatch(setTel(''));
                navigate('/');
              }}
              text="Отменить"
            />
          </div>
        </>
      }
    </div>
  );
}
 