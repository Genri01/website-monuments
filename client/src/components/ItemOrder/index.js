import React from 'react';
import './style.css';

function ItemOrder(props) {
    const { number, title, text } = props;
    return (
      <div className='workOrderItem'>
      <div className='workOrderItemImg'>{number}</div>
      <div className='workOrderItemTitle'>{title}</div>
      <div className='workOrderItemSubTitle'>{text}</div>
    </div>
    );
}

export default ItemOrder;
