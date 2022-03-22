import React from 'react';
import images from '../../assets/images';
import OrangeButton from '../OrangeButton';
import { HashLink as Link } from 'react-router-hash-link'
import './style.css';

class ShopBlock extends React.Component {

    render(){
      const {cross,_1} =images;
      return (
        <div className="shopBlockWrapper">
          <div className="cross">
          <Link to={"/"}><img className="imageShopBlock" src={cross} alt="cross" /></Link>
          </div>
          <div className="imageShopBlockWrapper">
            <img className="imageShopBlock" src={_1} alt="" />
          </div>
          <div className="infoShopBlockWrapper">
            <div className="titleShopBlock">
              Памятник для дедушки
            </div>
            <div className="priceShopBlock">
              40 227р.
            </div>
            <div className='btnShopBlockWrapper'>
              <OrangeButton text='Заказать' />
            </div>
            <div className="aboutShopBlock">
              Очень крутой памятник для любимого деда!Он будет нисказанно рад такому выбору!
            </div>
            <div className="infoblockShopBlock">
              <strong>• Размеры:</strong>
              <strong></strong>.Памятник 60х60х60
              <strong></strong>• Цена указана за готовый памятник
              • Мы можем изготовить памятник в любом цвете
              <strong></strong>• Оплата после установки памятника
              <strong></strong>
            </div>
            <div className="telephoneShopBlock">
              • Всю информацию можно уточнить по телефону:
              +7 (999) 666 99 66
            </div>
          </div>
        </div>
      );
    }
}
export default ShopBlock;