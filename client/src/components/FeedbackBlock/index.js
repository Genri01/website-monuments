
import React from 'react';
import Title from '../Title';
import FeedbackItem from '../FeedbackItem';
import './style.css';

class FeedbackBlock extends React.Component {

    render(){
      return (
        <div className="feedbackWrapper">
          <Title text="Отзывы наших клиентов" margin="20px 0px 50px 0px" />
          <div className='feedbackItemContainer'>
            <FeedbackItem name="killer" subname="jack" feed="dsdfsdffsdfsdfsdfsvcsdvds  s dd dsvsvcz" cool="40" />
            <FeedbackItem name="dodik" subname="goodd" feed="авывваи птрьввыси  ыаи рты  ваым" cool="2" />
            <FeedbackItem name="dura" subname="locker" feed="" cool="3" />
            <FeedbackItem name="som" subname="pidor" feed="" cool="1" />
            <FeedbackItem name="som" subname="pidor" feed="" cool="5" />
          </div>
        </div>
      );
    }
}
export default FeedbackBlock;