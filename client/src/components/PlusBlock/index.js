import React from 'react';
import './style.css'

class PlusBlock extends React.Component {

    render(){

      return (
        <div className="plusItemWrapper">
          <div className="plusLeftBlock">
            <div className="titlePlus">Работая с нами вы получите :</div>
          </div>
          <div className="plusRightBlock">
            <div className="plusItem">Своевременную бесплатную консультацию по любому вопросу</div>
            <div className="plusItem">Гарантию 15 лет на памятники категории вип</div>
            <div className="plusItem">Качество продукции и материалов</div>
          </div>
        </div>
      );
    }
}

export default PlusBlock;