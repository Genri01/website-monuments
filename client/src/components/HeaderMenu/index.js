import React from 'react';
import images from '../../assets/images';
import { HashLink as Link } from 'react-router-hash-link'
import './style.css';

function HeaderMenu(props) {
  const { statuy,cart,phone,map,time }= images;
  const { onClick, userName} = props;
    return (
      <div className="headerWrapper">

        <div className='topHeader'>

          <div className="catigories">
            <div style={{ borderBottom: '2px solid #c5c7da'}} className="tab">Главная</div>
            <div className="tab">Каталог</div>
            <div className="tab">Наши работы</div>
            <div className="tab">Отзывы</div>
          </div>
          <Link to={"/cart"}><img className='cart' src={cart} alt="profile" width="40" height="40" /></Link>
        </div>
        <div className='bottomHeader'>
          <div className='lableContainer'>
            <div className='textLogoContainer'>
              <div className="logo">Imperial</div>
              <div className="subLogo">Изготовление памятников</div>
            </div>
            <img style={{marginLeft: '15px' }} src={statuy} alt="profile" width="40" height="40" />
          </div>
          <ul className="header-extras">
              <li>
                  <img  style={{margin: '3px' }} src={map} alt="map" width="42" height="42" />
                  <div className="he-text">
                      Адрес
                      <span className="text-muted"> Майкоп Промышленная 54а Анапа Чехова 50а</span>
                  </div>
              </li>

              <li>
              <img className="i-plain" src={phone} alt="phone" />
                  <div className="he-text">
                      Телефон
                      <span className="text-muted">+7 (953) 534 41 11</span>
                  </div>
              </li>


              <li className="media-desktop">
                  <img className="i-plain" src={time} alt="time" />
                  <div className="he-text">
                      Часы работы
                      <span className="text-muted">Пн-Пт с 10:00 до 19:00</span>
                  </div>
              </li>
          </ul>
        </div>
      </div>
    );
}

export default HeaderMenu;