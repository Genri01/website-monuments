
import React from 'react';
import ProductItem from '../ProductItem';
import images from '../../assets/images';
import './style.css';

class ComentForm extends React.Component {

    render(){
      return (
        <div className="commentFormWrapper">
          <div className='titlecommentFormContainer'>
            <div className='titleComment textTitleForm'>Коментарии к заказу</div>
          </div>
          <div className='commentFormContainer'>
            <textarea className='comments' placeholder="Необязательно к заполнению" />
          </div>
        </div>
      );
    }
}

export default ComentForm;