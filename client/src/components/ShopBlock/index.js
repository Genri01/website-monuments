import React from 'react';
import images from '../../assets/images';
import OrangeButton from '../OrangeButton';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cart } from '../../redux/selectors'; 
import { setBuy } from '../../redux/actions/cart'; 
import imageToBase64 from 'image-to-base64/browser';
import './style.css';

export default function ShopBlock(props) {
  const { mobile } = props;
  const { cross } =images;

  const insert = useSelector(cart.insert);
  const link = useSelector(cart.link);
  var procuct_cart = insert;
  var procuct_link = link;

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  if(Object.keys(insert).length === 0) {
    procuct_cart = JSON.parse(localStorage.getItem('card_inf')); 
    procuct_link = localStorage.getItem('cross_link'); 
  } 
 
  return (
    <div className={`${mobile ? 'mobileShopBlockWrapper' : "shopBlockWrapper"}`}>
      {
        mobile ?
        <>
          <div className="cross">
            <Link style={{ textDecoration: 'none' }} to={`${procuct_link}`}><img className="imageShopBlock" src={cross} alt="cross" /></Link>
          </div>
          <div style={mobile ? { width: '100%' } : {}} className="imageShopBlockWrapper">
            <img style={mobile ? { width: '100%' } : {}} className="imageShopBlock" src={procuct_cart.img} alt="" />
          </div>
          <div style={mobile ? { width: '80%',marginBottom: '50px' } : {}} className="infoShopBlockWrapper">
            <div className="titleShopBlock">
             {
               procuct_cart.title
             }
            </div>
            <div style={mobile ? { justifyContent: 'center' } : {}} className="priceShopBlock">
              {
               procuct_cart.price + ' руб.'
              }
            </div>
            <div style={mobile ? { justifyContent: 'center' } : {}} className='btnShopBlockWrapper'>
            <OrangeButton style={{ textDecoration: 'none' }} text='Оформить заказ' onClick={()=>{
                imageToBase64(procuct_cart.img)
                  .then(
                      (response) => {
                        dispatch(setBuy({ count:procuct_cart.count,img:procuct_cart.img, img64:response, price:procuct_cart.price, title:procuct_cart.title, id: procuct_cart.id }))
                        navigate('/cart');
                      }
                  )
                  .catch(
                      (error) => {
                          console.log(error); // Logs an error if there was one
                          dispatch(setBuy({ count:procuct_cart.count, img:procuct_cart.img, img64:'', price:procuct_cart.price, title:procuct_cart.title, id: procuct_cart.id })) 
                          navigate('/cart');
                      }
                  ) 
             }} /> 
            </div>
            <div className="aboutShopBlock" dangerouslySetInnerHTML={{__html: procuct_cart.description}} />
            <div className="infoblockShopBlock" dangerouslySetInnerHTML={{__html: procuct_cart.prop}} />
            <div className="telephoneShopBlockMobile" dangerouslySetInnerHTML={{__html: procuct_cart.info}} />
          </div>
        </> :
        <>
          <div className="cross">
          <Link to={`${procuct_link}`}><img className="imageShopBlock" src={cross} alt="cross" /></Link>
          </div>
          <div className="imageShopBlockWrapper">
          <img className="imageShopBlock" src={procuct_cart.img} alt="" />
          </div>
          <div className="infoShopBlockWrapper">
          <div className="titleShopBlock">
            {
              procuct_cart.title
            }
          </div>
          <div className="priceShopBlock">
            {
              procuct_cart.price + ' руб.'
            }
          </div>
          <div className='btnShopBlockWrapper'>
          <OrangeButton style={{ textDecoration: 'none' }} text='Оформить заказ' onClick={()=>{
                imageToBase64(procuct_cart.img)
                  .then(
                      (response) => {
                        dispatch(setBuy({ count:procuct_cart.count,img:procuct_cart.img, img64:response, price:procuct_cart.price, title:procuct_cart.title, id: procuct_cart.id }))
                        navigate('/cart');
                      }
                  )
                  .catch(
                      (error) => {
                          console.log(error); // Logs an error if there was one
                          dispatch(setBuy({ count:procuct_cart.count, img:procuct_cart.img, img64:'', price:procuct_cart.price, title:procuct_cart.title, id: procuct_cart.id })) 
                          navigate('/cart');
                      }
                  ) 
             }} /> 
          </div>
            <div className="aboutShopBlock" dangerouslySetInnerHTML={{__html: procuct_cart.description}} />
            <div className="infoblockShopBlock" dangerouslySetInnerHTML={{__html: procuct_cart.prop}} />
            <div className="telephoneShopBlock" dangerouslySetInnerHTML={{__html: procuct_cart.info}} />
          </div>
        </>
      }
    </div>
  );
}

