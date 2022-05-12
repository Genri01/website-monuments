import React from 'react';
import Title from '../Title';
import './style.css'
import { about_plus } from '../../config';


export default function PlusBlock(props) {
  const { mobile } = props;
  return (
    <div className="plusItemWrapper">
      <div className='layout'></div>
      {
        mobile 
        ? 
          <>
            <Title size={21} margin="30px 0px 0px 0px" color="white" text="Работая с нами вы получите :" under z={2}/>
            <div style={{borderColor:'white',zIndex: 9}} className="underlineTextMonument"></div>
            <div style={{zIndex: 9}} className="mobilePlusRightBlock">
              {
                about_plus.map((item,i) => (<div key={i+'1p'} className="mobilePlusItem">{ item.plus }</div>))
              }
            </div>
          </>
        :
        <>
          <Title margin="50px 0px 0px 0px" color="white" text="Работая с нами вы получите :" under z={2}/>
          <div style={{borderColor:'white',zIndex: 9}} className="underlineTextMonument"></div>
          <div style={{zIndex: 9}} className="plusRightBlock">
            {
              about_plus.map((item,i) => (<div key={i+'1p'} className="plusItem">{ item.plus }</div>))
            }
          </div>
        </>
      }
    </div>
  );
}
 