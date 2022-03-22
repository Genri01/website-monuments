import React from 'react';
import Title from '../Title';
import OrangeButton from '../OrangeButton';
import './style.css';

class MainBlock extends React.Component {

    render(){

      return (
        <div className="itemWrapper">
          <div className="colInfoBlock">
            <div className="wrapper_maintxt">
              <Title margin={"0px 0px 20px 0px"} size={33} text="Вечная память, застывшая в камне." />
              <div className="txt_main_subtxt">
              Изготовление, доставкой и установкой гранитных памятников и благоустройством могил по доступным ценам
              </div>
              <OrangeButton width={200} margin="20px 0px 0px 0px" text="Заказать" onClick={() => { console.log('w') }} />
              <div className="colTimerBlock">
                <div className="timerTxt">Получи скидку 15% до окончания времени: </div>
                <div className="wrapperTimer">
                  <div className="txtTimer">0</div>
                  <div className="txtTimer">1</div>
                  <div className="txtTimer">:</div>
                  <div className="txtTimer">3</div>
                  <div className="txtTimer">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default MainBlock;