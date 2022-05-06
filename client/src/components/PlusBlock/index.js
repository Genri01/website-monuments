import React from 'react';
import Title from '../Title';
import './style.css'



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
              <div className="mobilePlusItem">Своевременную бесплатную консультацию по любому вопросу</div>
              <div className="mobilePlusItem">Гарантию 15 лет на памятники категории вип</div>
              <div className="mobilePlusItem">Качество продукции и материалов</div>
            </div>
          </>
        :
        <>
          <Title margin="50px 0px 0px 0px" color="white" text="Работая с нами вы получите :" under z={2}/>
          <div style={{borderColor:'white',zIndex: 9}} className="underlineTextMonument"></div>
          <div style={{zIndex: 9}} className="plusRightBlock">
            <div className="plusItem">Своевременную бесплатную консультацию по любому вопросу</div>
            <div className="plusItem">Гарантию 15 лет на памятники категории вип</div>
            <div className="plusItem">Качество продукции и материалов</div>
          </div>
        </>
      }
    </div>
  );
}
 