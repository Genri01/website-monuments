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
  clearBuy,
  sendInfoServer,
  uploadServer,
  setPopupMainMsg,
  setBuy
 } from '../../redux/actions/cart';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { cart } from '../../redux/selectors'; 

export default function CartBlock(props) {

  const { mobile } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const byer_initial_dead = useSelector(cart.byer_initial_dead);
  const byer_date_birthday = useSelector(cart.byer_date_birthday);
  const byer_date_dead = useSelector(cart.byer_date_dead);
  const byer_file = useSelector(cart.byer_file);
  const install = useSelector(cart.install);
  const byer_initial = useSelector(cart.byer_initial);
  const byer_tel = useSelector(cart.byer_tel);
  const coment = useSelector(cart.coment); 
  const byer_email = useSelector(cart.byer_email);
  const addres_city = useSelector(cart.addres_city);
  const addres = useSelector(cart.addres);
  const addres_index = useSelector(cart.addres_index);
  const addres_region = useSelector(cart.addres_region);
  const delivery_method = useSelector(cart.delivery_method);
  const pay_method = useSelector(cart.pay_method); 
  const buy = useSelector(cart.buy);  
  const width = useSelector(cart.width);
  const material = useSelector(cart.material);
  const fileName = useSelector(cart.fileName);
  const widthArr = ["90x180x10","90x180x15","120x180x10","120x180x15","150x180x10","150x180x15","180x180x10","180x180x15","210x240x10","210x240x15","240x240x10","240x240x15","240x420x10","240x420x15"];
  const materialArr = ['Тротуарная','Керамогранитная','Гранитная'];
   
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
          <OrangeButton 
            disabled={ buy.length === 0 ? true : false }  
            onClick={async () => { 
              if (byer_file.length !== 0) {
                let formDataImg = new FormData();
                formDataImg.append('imageFile', byer_file); 
                await uploadServer(formDataImg,dispatch);
              }  

              sendInfoServer({ 
                byer_initial_dead, 
                byer_date_birthday, 
                byer_date_dead,
                byer_file,
                install,
                byer_initial,
                byer_tel,
                coment, 
                byer_email,
                addres_city,
                addres,
                addres_index,
                addres_region,
                delivery_method,
                pay_method, 
                buy, 
                width: widthArr[width],
                material: materialArr[material],
                fileName
              },dispatch); 
            }} 
            text="Оформить" />
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
                dispatch(setPopupMainMsg(''));
                dispatch(setBuy([]));
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
            <OrangeButton 
            disabled={ buy.length === 0 ? true : false }  
            onClick={async () => {  
              if (byer_file.length !== 0) {
                let formDataImg = new FormData();
                formDataImg.append('imageFile', byer_file); 
                await uploadServer(formDataImg,dispatch);
              }  

              sendInfoServer({ 
                byer_initial_dead, 
                byer_date_birthday, 
                byer_date_dead,
                byer_file,
                install,
                byer_initial,
                byer_tel,
                coment, 
                byer_email,
                addres_city,
                addres,
                addres_index,
                addres_region,
                delivery_method,
                pay_method, 
                buy, 
                width: widthArr[width],
                material: materialArr[material],
                fileName
              },dispatch); 
            }} 
            text="Оформить" />
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
                dispatch(setPopupMainMsg(''));
                dispatch(setBuy([]));
                dispatch(clearBuy());
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
 


