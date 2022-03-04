import React from 'react';
import images from '../../assets/images';
import './style.css';

function HeaderMenu(props) {
  const { statuy }= images;
  const { onClick, userName} = props;
    return (
      <div className="headerWrapper">
        <div className="logo">Monumentum</div>
        <img style={{marginLeft: '15px' }} src={statuy} alt="profile" width="40" height="40" />
        <div className="catigories">
          <div className="tab">Каталог</div>
          <div className="tab">Установка</div>
          <div className="tab">Наши работы</div>
          <div className="tab">Доставка</div>
          <div className="tab">Контакты</div>
          <div className="tab">Отзывы</div>
        </div>
      </div>
    );
}

export default HeaderMenu;