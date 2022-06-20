import React from 'react';
import images from '../../assets/images';
import OrangeButton from '../OrangeButton';
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector, useDispatch } from 'react-redux';
import { cart } from '../../redux/selectors'; 
import './style.css';

export default function ShopBlock(props) {
  const { mobile } = props;
  const { cross, _1 } =images;

  const insert = useSelector(cart.insert);
  console.log(insert)
  return (
    <div className={`${mobile ? 'mobileShopBlockWrapper' : "shopBlockWrapper"}`}>
      {
        mobile ?
        <>
          <div className="cross">
            <Link style={{ textDecoration: 'none' }} to={"/"}><img className="imageShopBlock" src={cross} alt="cross" /></Link>
          </div>
          <div style={mobile ? { width: '100%' } : {}} className="imageShopBlockWrapper">
            <img style={mobile ? { width: '100%' } : {}} className="imageShopBlock" src={_1} alt="" />
          </div>
          <div style={mobile ? { width: '80%',marginBottom: '50px' } : {}} className="infoShopBlockWrapper">
            <div className="titleShopBlock">
             {
               insert.title
             }
            </div>
            <div style={mobile ? { justifyContent: 'center' } : {}} className="priceShopBlock">
              {
               insert.price + ' руб.'
              }
            </div>
            <div style={mobile ? { justifyContent: 'center' } : {}} className='btnShopBlockWrapper'>
              <Link style={{ textDecoration: 'none' }} to={"/cart"}><OrangeButton text='Оформить заказ' /></Link>
            </div>
            <div className="aboutShopBlock" dangerouslySetInnerHTML={{__html: insert.description}} />
            <div className="infoblockShopBlock" dangerouslySetInnerHTML={{__html: insert.prop}} />
            <div className="telephoneShopBlock" dangerouslySetInnerHTML={{__html: insert.info}} />
          </div>
        </> :
        <>
          <div className="cross">
          <Link to={"/"}><img className="imageShopBlock" src={cross} alt="cross" /></Link>
          </div>
          <div className="imageShopBlockWrapper">
          <img className="imageShopBlock" src={_1} alt="" />
          </div>
          <div className="infoShopBlockWrapper">
          <div className="titleShopBlock">
            {
              insert.title
            }
          </div>
          <div className="priceShopBlock">
            {
              insert.price + ' руб.'
            }
          </div>
          <div className='btnShopBlockWrapper'>
          <Link style={{ textDecoration: 'none' }} to={"/cart"}><OrangeButton text='Оформить заказ' /></Link>
          </div>
            <div className="aboutShopBlock" dangerouslySetInnerHTML={{__html: insert.description}} />
            <div className="infoblockShopBlock" dangerouslySetInnerHTML={{__html: insert.prop}} />
            <div className="telephoneShopBlock" dangerouslySetInnerHTML={{__html: insert.info}} />
          </div>
        </>
      }
    </div>
  );
}
