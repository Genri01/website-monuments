import React from 'react';
import OrangeButton from '../OrangeButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory } from '../../redux/actions/cart'; 
import './style.css'

export default function FilterItem(props) {
  const { customclass, mobile  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    mobile ?   
    <div className={`${customclass === undefined ? '' : customclass} filterItemWrapperMobile `}>
      <div className="filterItemCol">
        <OrangeButton onClick={() => { navigate(`/catalog/man`); dispatch(setCategory('man')); }} text="Мужские" />
        <OrangeButton onClick={() => {  navigate(`/catalog/woman`); dispatch(setCategory('woman')); }} margin="0px 0px 0px 10px" text="Женские" />
      </div>
      <div className="filterItemCol">
        <OrangeButton onClick={() => { navigate(`/catalog/family`); dispatch(setCategory('family')); }} text="Семейные" />
        <OrangeButton onClick={() => { navigate(`/catalog/animals`); dispatch(setCategory('animals')); }} margin="0px 0px 0px 10px" text="Животным" />
      </div>
      <div className="filterItemCol">
        <OrangeButton onClick={() => { navigate(`/catalog/children`); dispatch(setCategory('children')); }} text="Детские" />
        <OrangeButton onClick={() => { navigate(`/catalog/forms`); dispatch(setCategory('forms')); }} margin="0px 0px 0px 10px" text="Формы" />
      </div> 
      <div className="filterItemCol">
        <OrangeButton onClick={() => { navigate(`/catalog/mramor`); dispatch(setCategory('mramor')); }} text="Мраморные" />
        <OrangeButton onClick={() => { navigate(`/catalog/granit`); dispatch(setCategory('granit')); }} margin="0px 0px 0px 10px" text="Гранитные" />
      </div> 
    </div> :
    <div className={`${customclass === undefined ? '' : customclass} filterItemWrapper `}>
    <div className="filterItemCol">
      <OrangeButton onClick={() => { navigate(`/catalog/man`); dispatch(setCategory('man')); }} text="Мужские" />
      <OrangeButton onClick={() => {  navigate(`/catalog/woman`); dispatch(setCategory('woman')); }} margin="0px 0px 0px 10px" text="Женские" />
    </div>
    <div className="filterItemCol">
      <OrangeButton onClick={() => { navigate(`/catalog/family`); dispatch(setCategory('family')); }} text="Семейные" />
      <OrangeButton onClick={() => { navigate(`/catalog/animals`); dispatch(setCategory('animals')); }} margin="0px 0px 0px 10px" text="Животным" />
    </div>
    <div className="filterItemCol">
      <OrangeButton onClick={() => { navigate(`/catalog/children`); dispatch(setCategory('children')); }} text="Детские" />
      <OrangeButton onClick={() => { navigate(`/catalog/forms`); dispatch(setCategory('forms')); }} margin="0px 0px 0px 10px" text="Формы" />
    </div> 
    <div className="filterItemCol">
      <OrangeButton onClick={() => { navigate(`/catalog/mramor`); dispatch(setCategory('mramor')); }} text="Мраморные" />
      <OrangeButton onClick={() => { navigate(`/catalog/granit`); dispatch(setCategory('granit')); }} margin="0px 0px 0px 10px" text="Гранитные" />
    </div> 
  </div>
  );
}
 