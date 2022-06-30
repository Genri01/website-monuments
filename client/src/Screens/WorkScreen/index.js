import React from 'react';
import './style.css';
import HeaderMenu from '../../components/HeaderMenu'
import Footer from '../../components/Footer'
import MainBlock from '../../components/MainBlock'
import ViewStone from '../../components/ViewStone'
import TopMonument from '../../components/TopMonument'
import AboutProduct from '../../components/AboutProduct'
import WorkOrder from '../../components/WorkOrder'
import FeedbackBlock from '../../components/FeedbackBlock'
import AnswerBlock from '../../components/AnswerBlock'
import DataForm from '../../components/DataForm'
import Title from '../../components/Title';
import CardsMonument from '../../components/CardsMonument';
import { works_images } from '../../config';

function WorkScreen(props) {

  const { mobile } = props; 
    return (
      <div className="main_screen" >
        <HeaderMenu  mobile={mobile}/>
        <div className='catalog_wrapper'>
          {
            mobile ?
            <>
            <Title margin="110px 0px 0px 0px" size={33} text="Наши работы" under/>
              <div className="mobileCardMonumentContainer">
              {
                works_images.map((item, i) => (<img key={i} src={item}  className='worksImageMobile'  id={item.id} alt={`work_${i}`} />))
              } 
              </div> 
            </>
            :
            <>
              <Title margin="50px 0px 30px 0px" size={38} text="Наши работы" under/>
              <div className="cardMonumentContainer">
              {
                works_images.map((item, i) => (<img className='worksImage' key={i} src={item}  id={item.id} alt={`work_${i}`} />))
              } 
              </div> 
            </>
          }
        </div>
        <Footer mobile={mobile} /> 
        {/* <TopMonument /> */}
        {/* <AboutProduct /> */}
        {/* <WorkOrder /> */}
        {/* <FeedbackBlock /> */}
        {/* <AnswerBlock /> */}
        {/* <DataForm />  */}
        {/* <ViewStone /> */}
      </div>
    );
}

export default WorkScreen;
