import React from 'react';
import images from '../../assets/images';
import './style.css';

function HeaderMenu(props) {
  const { statuy,cart }= images;
  const { onClick, userName} = props;
    return (
      <div className="headerWrapper">
        <div className="logo">Monumentum</div>
        <img style={{marginLeft: '15px' }} src={statuy} alt="profile" width="40" height="40" />
        <div className="catigories">
          <div style={{ borderBottom: '2px solid #c5c7da'}} className="tab">Главная</div>
          <div className="tab">Каталог</div>
          <div className="tab">Установка</div>
          <div className="tab">Наши работы</div>
          <div className="tab">Доставка</div>
          <div className="tab">Контакты</div>
          <div className="tab">Отзывы</div>
        </div>
        <img style={{ paddingRight: '80px' }} src={cart} alt="profile" width="40" height="40" />
      </div>
    );
}

export default HeaderMenu;