
import React from 'react';
import Title from '../Title';
import FeedbackItem from '../FeedbackItem';
import './style.css';


export default function FeedbackBlock(props) {
  const { mobile } = props;
  return (
    <div className="feedbackWrapper">
      {
        mobile ?
        <>
          <Title size={24} text="Отзывы наших клиентов" margin="0px 0px 50px 0px" />
          <div className='mobileFeedbackItemContainer'>
            <FeedbackItem mobile={mobile} name="killer" subname="jack" feed="dsdfsdffsdfsdfsdfsvcsdvds  s dd dsvsvcz" cool="40" />
            <FeedbackItem mobile={mobile} name="dodik" subname="goodd" feed="авывваи птрьввыси  ыаи рты  ваым" cool="2" />
            <FeedbackItem mobile={mobile} name="dura" subname="locker" feed="" cool="3" />
            <FeedbackItem mobile={mobile} name="som" subname="pidor" feed="" cool="1" />
            <FeedbackItem mobile={mobile} name="som" subname="pidor" feed="" cool="5" />
          </div>
        </>
        :
        <>
          <Title text="Отзывы наших клиентов" margin="20px 0px 50px 0px" />
          <div className='feedbackItemContainer'>
            <FeedbackItem name="killer" subname="jack" feed="dsdfsdffsdfsdfsdfsvcsdvds  s dd dsvsvcz" cool="40" />
            <FeedbackItem name="dodik" subname="goodd" feed="авывваи птрьввыси  ыаи рты  ваым" cool="2" />
            <FeedbackItem name="dura" subname="locker" feed="" cool="3" />
            <FeedbackItem name="som" subname="pidor" feed="" cool="1" />
            <FeedbackItem name="som" subname="pidor" feed="" cool="5" />
          </div>
        </>
      }
    </div>
  );
}

