import React from 'react'; 
import OrangeButton from '../OrangeButton';
import { Link, useNavigate } from 'react-router-dom';
import { setInsert,linkpage } from '../../redux/actions/cart';
import { useDispatch } from 'react-redux';
import './style.css'

export default function CardsMonument(props) {
  const { img, title, description, price, id, info, prop, count,category } = props; 
  const dispatch = useDispatch();
  return (
    <div className="CardsItemWrapper">
      <div className="CardsItemTop">
        <img src={img} alt='statuy' width='80%' height='100%' />
      </div>
      <div className="CardsItemBottom">
        <div className="txtCardsName">{title}</div>
        <div className="txtCardsAbout">{description}</div>
        <div className="txtCardsPrice">{`${price} руб.`}</div>
        <Link style={{ textDecoration: 'none' }} to={`/shop/${category}/${id}`}><OrangeButton margin="20px 0px 0px 0px" text="Подробнее" onClick={() => { dispatch(setInsert({img, title, description, price, id, info, prop, count }));dispatch(linkpage(`/catalog/${category}/`));localStorage.setItem('card_inf',JSON.stringify({ img, title, description, price, id, info, prop, count }));localStorage.setItem('cross_link',`/catalog/all`) }}  /></Link> 
      </div>
    </div>
  ); 
}
 