import React from 'react';
import './style.css';

import MainBlock from '../../components/MainBlock'
import ViewStone from '../../components/ViewStone'
import TopMonument from '../../components/TopMonument'
import AboutProduct from '../../components/AboutProduct'
import WorkOrder from '../../components/WorkOrder'
import FeedbackBlock from '../../components/FeedbackBlock'
import AnswerBlock from '../../components/AnswerBlock'
import DataForm from '../../components/DataForm'

function MainScreen(props) {
    return (
      <div className="main_screen" >

        <MainBlock />
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

export default MainScreen;
