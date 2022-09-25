import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { slide as Menu } from 'react-burger-menu';
import { Link, useNavigate,useLocation } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import { header } from '../../redux/selectors';
import { change_page } from '../../redux/actions/app';
import images from '../../assets/images';
import './style.css';

function HeaderMenu(props) {
  const { statuy, cart, phone, map, time }= images;
  const { onClick, userName, page, mobile, isAuth} = props;
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {   
    dispatch(change_page(localStorage.getItem('page'))); 
  },[page]); 

  const {hash, key} = useLocation()
  useEffect(()=>{
      if(hash){
         const targetElement = document.getElementById(hash.substring(1))
          targetElement?.scrollIntoView({behavior: 'smooth'})
      }
  }, [key, hash])
  const headers_tab = [
    {
      title: 'Главная',
      key:"main",
      rout: '/',
    },
    {
      title: 'Каталог',
      key:"all",
      rout: '/catalog/all',
    },
    {
      title: 'Наши работы',
      key:"works",
      rout: '/works',
    },
    {
      title: 'Отзывы',
      key:"feedbacks",
      rout: '/#feedback',
    },
  ];
 
  let st = {}
 
    return (
      <div className={` ${ mobile ? 'mobileHeaderWrapper' : 'headerWrapper' }`}>
        { mobile ? 
          <>
            <div className='mobileTopHeader'>
            <Menu >
              { headers_tab.map(({ key, rout, title }) => {
                st = key === page ? 'active' : ''
                return <Link key={key} to={rout}><div id={key} className={`tabMobile ${st}`} onClick={(e) => { onClick(e); }}>{title}</div></Link>
              })} 
              {/* (<Link key={i} className={`tabMobile ${tab === i ? 'active' : ''}`} to={item.to}><div id={i} onClick={(e) => { dispatch(setTabHeader(Number(e.target.id))) }} >{item.title}</div></Link>))
              }   */}
            </Menu>
            </div>
            <Link className='cartMobile' to={"/cart"}><img src={cart} alt="profile" width="47" height="47" /></Link>
            <div className='mobileBottomHeader'>
            <div className='mobileLableContainer'>
              <div className='textLogoContainer'>
                <div className="mobileLogo">Imperial</div>
                <div className="subLogo">Изготовление памятников</div>
              </div>
              <img style={{marginLeft: '15px' }} src={statuy} alt="profile" width="40" height="40" />
            </div>
            <ul className="mobile-header-extras">
                <li>
                    <img  style={{marginLeft: '7px' }} src={map} alt="map" width="25" height="25" />
                    <div className="he-text"> 
                      <span className="text-muted"> Майкоп Промышленная 54а</span>
                    </div>
                </li>
                <li>
                    <div className='mobileContainerLi'>
                      <img className="mobile-i-plain" src={phone} alt="phone" />
                      <div className="he-text"> 
                        <span className="text-muted">+7 (953) 534 41 11</span>
                      </div>
                      <img className="mobile-i-plain" src={time} alt="time" />
                      <div className="he-text"> 
                          <span className="text-muted">Пн-Пт с 10:00 до 19:00</span>
                      </div>
                    </div>
                </li> 
            </ul>
            </div>
          </>
          :
          <>
            <div className='topHeader'>
            <div className="catigories">
            { headers_tab.map(({ key, rout, title }) => {
                st = key === page ? 'active' : ''
                return <Link key={key} to={rout}><div id={key} className={`tab ${st}`} onClick={(e) => { onClick(e); }}>{title}</div></Link>
              })} 
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
                    <img  style={{margin: '3px' }} src={map} alt="map" className='i-local' />
                    <div className="he-text">
                        Адрес
                        <span className="text-muted"> Майкоп: Промышленная 54а</span>
                    </div>
                </li>
                <li>
                <img className="i-plain" src={phone} alt="phone" />
                    <div className="he-text">
                        Телефон
                        <span className="text-muted">+7 (988) 083 76 29</span>
                    </div>
                </li>
                <li className="media-desktop">
                    <img className="i-plain" src={time} alt="time" />
                    <div className="he-text">
                        Часы работы
                        <span className="text-muted">Пн-Пт с 09:00 до 17:00</span>
                    </div>
                </li>
            </ul>
            </div>
          </> 
        }
      </div>
    );
}

export default HeaderMenu;