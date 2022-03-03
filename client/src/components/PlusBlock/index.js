import React from 'react';
import './style.css'

class PlusBlock extends React.Component {

    render(){

      return (
        <div className="plusItemWrapper">
          <div className="plusLeftBlock">
            <div className="titlePlus">почему стоит работать с нами ПЛЮСЫ</div>
          </div>
          <div className="plusRightBlock">
            <div className="plusItem">плюс</div>
            <div className="plusItem">плюс2</div>
            <div className="plusItem">плюс3</div>
          </div>
        </div>
      );
    }
}

export default PlusBlock;
