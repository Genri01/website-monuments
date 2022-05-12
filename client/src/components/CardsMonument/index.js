import React from 'react'; 
import OrangeButton from '../OrangeButton';
import { HashLink as Link } from 'react-router-hash-link';
import { setInsert } from '../../redux/actions/cart';
import { useDispatch } from 'react-redux';
import './style.css'

export default function CardsMonument(props) {
  const { img, title, description, price, id, category } = props;
  const dispatch = useDispatch();
  return (
    <div className="CardsItemWrapper">
      <div className="CardsItemTop">
        <img src={img} alt='statuy' width={200} height={200}/>
      </div>
      <div className="CardsItemBottom">
        <div className="txtCardsName">{title}</div>
        <div className="txtCardsAbout">{description}</div>
        <div className="txtCardsPrice">{`${price} руб.`}</div>
        <Link style={{ textDecoration: 'none' }} to={"/shop"}><OrangeButton margin="20px 0px 0px 0px" text="Подробнее" onClick={() => { dispatch(setInsert({ id, category })) }} /></Link> 
      </div>
    </div>
  ); 
}
 