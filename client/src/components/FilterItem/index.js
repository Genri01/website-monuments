import React from 'react';
import OrangeButton from '../OrangeButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory } from '../../redux/actions/cart';
import { setTabHeader } from '../../redux/actions/app';
import './style.css'

export default function FilterItem(props) {
  const { customclass, mobile  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    mobile ?   
    <div className={`${customclass === undefined ? '' : customclass} filterItemWrapperMobile `}>
      <div className="filterItemCol">
        <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/man`); dispatch(setCategory('man')); }} text="Мужские" />
        <OrangeButton onClick={() => { dispatch(setTabHeader(1)); navigate(`/catalog/woman`); dispatch(setCategory('woman')); }} margin="0px 0px 0px 10px" text="Женские" />
      </div>
      <div className="filterItemCol">
        <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/family`); dispatch(setCategory('family')); }} text="Семейные" />
        <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/animals`); dispatch(setCategory('animals')); }} margin="0px 0px 0px 10px" text="Животным" />
      </div>
      <div className="filterItemCol">
        <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/children`); dispatch(setCategory('children')); }} text="Детские" />
        <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/forms`); dispatch(setCategory('forms')); }} margin="0px 0px 0px 10px" text="Формы" />
      </div> 
      <div className="filterItemCol">
        <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/mramor`); dispatch(setCategory('mramor')); }} text="Мраморные" />
        <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/granit`); dispatch(setCategory('granit')); }} margin="0px 0px 0px 10px" text="Гранитные" />
      </div> 
    </div> :
    <div className={`${customclass === undefined ? '' : customclass} filterItemWrapper `}>
    <div className="filterItemCol">
      <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/man`); dispatch(setCategory('man')); }} text="Мужские" />
      <OrangeButton onClick={() => { dispatch(setTabHeader(1)); navigate(`/catalog/woman`); dispatch(setCategory('woman')); }} margin="0px 0px 0px 10px" text="Женские" />
    </div>
    <div className="filterItemCol">
      <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/family`); dispatch(setCategory('family')); }} text="Семейные" />
      <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/animals`); dispatch(setCategory('animals')); }} margin="0px 0px 0px 10px" text="Животным" />
    </div>
    <div className="filterItemCol">
      <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/children`); dispatch(setCategory('children')); }} text="Детские" />
      <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/forms`); dispatch(setCategory('forms')); }} margin="0px 0px 0px 10px" text="Формы" />
    </div> 
    <div className="filterItemCol">
      <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/mramor`); dispatch(setCategory('mramor')); }} text="Мраморные" />
      <OrangeButton onClick={() => {dispatch(setTabHeader(1)); navigate(`/catalog/granit`); dispatch(setCategory('granit')); }} margin="0px 0px 0px 10px" text="Гранитные" />
    </div> 
  </div>
  );
}
 