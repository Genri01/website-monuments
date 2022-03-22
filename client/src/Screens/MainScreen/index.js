import React from 'react';
import './style.css';

import MainBlock from '../../components/MainBlock'
import ViewStone from '../../components/ViewStone'
import TopMonument from '../../components/TopMonument'
import AboutProduct from '../../components/AboutProduct'
import WorkOrder from '../../components/WorkOrder'
import FeedbackBlock from '../../components/FeedbackBlock'
import AnswerBlock from '../../components/AnswerBlock'
import PlusBlock from '../../components/PlusBlock'
import DataForm from '../../components/DataForm'
import FilterItem from '../../components/FilterItem';
import Title from '../../components/Title';
import HeaderMenu from '../../components/HeaderMenu'
import OrangeButton from '../../components/OrangeButton';
import InputMask from 'react-input-mask';
import Footer from '../../components/Footer';

function MainScreen(props) {
    return (
      <div className="main_screen" >
        <HeaderMenu />
        <MainBlock />
        <TopMonument />
        <div className='backgroundFilter'>
          <Title text="Фильтры" margin="50px 0px 10px 0px" />
        </div>
        <div className='subTitleFilter'>
          <Title text="Категории памятников:" />
          <Title text="Виды камня:" />
        </div>
        <div className='filterContainer'>
          <FilterItem />
          <ViewStone />
        </div>
        <PlusBlock />
        <AboutProduct />
        <WorkOrder />
        <FeedbackBlock />
        <AnswerBlock />
        <div className='answerContainer'>
          <Title margin="30px 0px 50px 0px" text="Остались вопросы?" />
          <div className='answerAbout'>
          Заполните небольшую форму. Мы вам перезвоним в ближайшее время и проконсультируем.
          </div>
          <div className='formWrapper'>
            <input name="name" placeholder="Представьтесь пожалуйста" className={`popup_input`}  type="text" value='' onChange={()=>{}} />
            <InputMask placeholder="Ваш телефон" className={`popup_input`}  name="telephone" mask={``} maskChar={'_'} value='' onChange={()=>{}} />
            <textarea name="msg" placeholder="Задайте Ваш вопрос, консультация бесплатна..." className="popup_textarea" value={''} onChange={()=>{}} />
          </div>
          <div className='answerBtnWrapper'>
            <OrangeButton text="Заказать звонок" /> 
          </div>
        </div>
        <Footer /> 
      </div>
    );
}

export default MainScreen;
