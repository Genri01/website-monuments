import React from 'react';
import images from '../../assets/images';
import './style.css';
import FilterItem from '../FilterItem';



class MainBlock extends React.Component {

    render(){
      const {
        login,
      } = this.props;

      const lock = images.lock;
      const logo = images.logo;

      return (
        <div className="itemWrapper">
          <div className="colInfoBlock">
            <div className="wrapper_maintxt">
              <div className="txt_maintxt">Вечная память, застывшая в камне.</div>
              <div className="txt_main_subtxt">
              Занимаемся изготовлением, доставкой и установкой гранитных памятников и благоустройством могил по доступным ценам
              </div>
            </div>
            {/* <div className="wrapper_img_mainlogo">
              <img className="img_mainlogo" src={logo} alt="mainlogo" />
            </div> */}
          </div>
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
          <div className="colButtonBlock">
            <div className="wrapperButton">
              <div className="txtButton">Заказать</div>
            </div>
          </div>
          <FilterItem />
        </div>
      );
    }
}
export default MainBlock;