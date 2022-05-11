
import React from 'react';
import './style.css';
import { setComent } from '../../redux/actions/cart'
import { useDispatch, useSelector  } from 'react-redux';
import { cart } from '../../redux/selectors';

export default function ComentForm(props) {

  const dispatch = useDispatch();
  const coment = useSelector(cart.coment);
  
  return (
    <div className="commentFormWrapper">
      <div className='titlecommentFormContainer'>
        <div className='titleComment textTitleForm'>Коментарии к заказу</div>
      </div>
      <div className='commentFormContainer'>
        <textarea value={coment} onChange={(e) => {dispatch(setComent(e.target.value))}} className='comments' placeholder="Необязательно к заполнению" />
      </div>
    </div>
  );
}
 