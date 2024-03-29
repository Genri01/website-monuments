import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/images';
import { YMaps, Map, Placemark,ZoomControl } from 'react-yandex-maps';
import { setCategory } from '../../redux/actions/cart';
import './style.css';

function Footer(props) {
  const { visa, mastercard } = images;
  const { mobile } = props;
  const dispatch = useDispatch();
    return (
      <div className="footer_container">
        <div className="footer_up">
          <div className="footer_logo_section">
            <YMaps>
                <Map  className={`${mobile ? 'mobile-iframe' : 'iframe'}`} defaultState={{ center: [44.625040, 40.094427], zoom: 15 }}>
                  <Placemark geometry={[44.625040, 40.094427]} />
                  {/* <Placemark geometry={[44.889293, 37.340501]} /> */}
                  <ZoomControl />
                </Map>
            </YMaps>
          </div>
          <div className="footer_desription_section_left">
          <Link onClick={()=> { dispatch(setCategory('all')); }} to={"/catalog/all"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >Каталог</div></Link> 
          <Link to={"/works/#works"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >Наши работы</div></Link>
          <Link to={"/#feedback"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >Отзывы</div></Link>
          </div>
          <div className="footer_desription_section_right">
            <Link to={"/#answer"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Вопросы и ответы</div></Link>
            <Link to={"/#about"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>О нас</div></Link>
            <Link to={"/police"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Политика конфидециальности</div></Link>
          </div>
          {/* <div className="footer_social_section">
            <div className="social_container">
              <img className="social_img" style={{cursor: 'pointer'}} onClick={(e)=>{ document.location.href = "http://www.instagram.com";}}  src={instagram} alt="instagram" width="28" height="28" />
              <img style={{cursor: 'pointer'}} onClick={(e)=>{ document.location.href = "https://www.facebook.com/";}} src={facebook} alt="facebook" width="28" height="28" />
            </div>
          </div> */}
        </div>
        <div className="footer_down">
          <div className="coperait_container">
            <div className={`${mobile ? 'mobile-coperait_txt' : 'coperait_txt'}`}>Copyright © 2022 Лучшие памятники!</div> 
          </div>
          <div className="visa_container">
            <img src={visa} alt="visa" width="49" height="17" />
            <img src={mastercard} alt="mastercard" width="35" height="23" />
          </div>
        </div>
      </div>
    );
}

export default Footer;
