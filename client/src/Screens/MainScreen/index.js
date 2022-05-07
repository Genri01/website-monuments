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
import { useSelector } from 'react-redux';
import { app } from '../../redux/selectors'
function MainScreen(props) {
  const mobile = useSelector(app.mobile);
    return (
      <div className="main_screen" >
        <HeaderMenu mobile={mobile} />
        <MainBlock mobile={mobile} />
        <TopMonument mobile={mobile} />
        { 
         mobile ? 
         <>
            <div className='backgroundFilter'>
              <Title size={30} text="Фильтры" margin="30px 0px 10px 0px" />
            </div>
            <div className='mobileSubTitleFilter'>
              <Title size={22} margin="0px 0px 30px 0px" text="Категории памятников:" />
              <FilterItem customclass={`${mobile ? 'mobileItem' : ''}`}/>
            </div>
            <div className='mobileFilterContainer'>
              <Title size={22} margin="30px 0px 10px 0px" text="Виды камня:" />
              <ViewStone customclass="mobileArrow mobileSlider" />
            </div>
         </> 
       : 
       <>
          <div className='backgroundFilter'>
            <Title text="Фильтры" margin="50px 0px 10px 0px" customclass="mobileTitle" />
          </div>
          <div className='subTitleFilter'>
            <Title text="Категории памятников:"  customclass="mobileTitle" />
            <Title text="Виды камня:"  customclass="mobileTitle" />
          </div>
          <div className='filterContainer'>
            <FilterItem />
            <ViewStone customclass="mobileArrow" />
          </div>
        </> 
        }
        <PlusBlock mobile={mobile} />
        <AboutProduct mobile={mobile} />
        <WorkOrder mobile={mobile} />
        <FeedbackBlock mobile={mobile} />
        <AnswerBlock mobile={mobile} />
        <div className='answerContainer'>
          {
            mobile ?
            <>
              <Title size={28} margin="30px 0px 50px 0px" text="Остались вопросы?" />
              <div style={mobile ? { width: '90%'} : {} } className='answerAbout'>
                Заполните небольшую форму. Мы вам перезвоним в ближайшее время и проконсультируем.
              </div>
              <div className='formWrapper'>
              <input name="name" placeholder="Представьтесь пожалуйста" style={mobile ? { width: '100%'} : {} } className={`popup_input`}  type="text" value='' onChange={()=>{}} />
              <InputMask style={mobile ? { width: '100%'} : {} } placeholder="Ваш телефон" className={`popup_input`}  name="telephone" mask={``} maskChar={'_'} value='' onChange={()=>{}} />
              <textarea style={mobile ? { width: '100%'} : {} } name="msg" placeholder="Задайте Ваш вопрос, консультация бесплатна..." className="popup_textarea" value={''} onChange={()=>{}} />
              </div>
              <div className='answerBtnWrapper'>
              <OrangeButton text="Заказать звонок" /> 
              </div>
            </>
            :
            <>
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
            </>
          }
        </div>
        <Footer mobile={mobile} /> 
      </div>
    );
}

export default MainScreen;
