import React from 'react';
import Title from '../Title';
import './style.css'

class PlusBlock extends React.Component {

    render(){

      return (
        <div className="plusItemWrapper">
          <div className='layout'></div>
          <Title margin="50px 0px 0px 0px" color="white" text="Работая с нами вы получите :" under z={2}/>
            <div style={{borderColor:'white',zIndex: 9}} className="underlineTextMonument"></div>
          <div style={{zIndex: 9}} className="plusRightBlock">
            <div className="plusItem">Своевременную бесплатную консультацию по любому вопросу</div>
            <div className="plusItem">Гарантию 15 лет на памятники категории вип</div>
            <div className="plusItem">Качество продукции и материалов</div>
          </div>
        </div>
      );
    }
}

export default PlusBlock;