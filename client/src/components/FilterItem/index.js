import React from 'react';
import OrangeButton from '../OrangeButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory } from '../../redux/actions/cart';
import './style.css'


export default function FilterItem(props) {
  const { customclass, category } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={`${customclass === undefined ? '' : customclass} filterItemWrapper `}>
      <div className="filterItemCol">
        <OrangeButton onClick={() => { navigate(`/catalog/man`); dispatch(setCategory('man')); }} text="мужские" />
        <OrangeButton onClick={() => {  navigate(`/catalog/woman`); dispatch(setCategory('woman')); }} margin="0px 0px 0px 10px" text="женские" />
      </div>
      <div className="filterItemCol">
      <OrangeButton onClick={() => { dispatch(setCategory('family')); navigate(`/catalog/family`) }} text="семейные" />
        <OrangeButton onClick={() => { dispatch(setCategory('animals')); navigate(`/catalog/animals`) }} margin="0px 0px 0px 10px" text="животным" />
      </div>
      {/* <div className="filterItemCol">
      <OrangeButton onClick={() => { dispatch(setCategory('man')); navigate(`/catalog/${category}`) }} text="животным" />
        <OrangeButton onClick={() => { dispatch(setCategory('man')); navigate(`/catalog/${category}`) }} margin="0px 0px 0px 10px" text="бабушкам" />
      </div>
      <div className="filterItemCol">
      <OrangeButton onClick={() => { dispatch(setCategory('man')); navigate(`/catalog/${category}`) }} text="дедушкам" />
      </div> */}
    </div>
  );
}
 