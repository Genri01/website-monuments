import React from 'react';
import Title from '../Title';
import OrangeButton from '../OrangeButton';
import './style.css';
 
export default function MainBlock(props) {
  const { mobile } = props;
  return (
    <div className="itemWrapper">
      <div className="colInfoBlock"> 
        <div className={`${mobile ? 'mobile-wrapper_maintxt' : 'wrapper_maintxt'}`} >
          <Title margin={`${mobile ? "0px 20px 20px" : "0px 0px 20px 0px"}`} size={`${mobile ? '16px' : '33px'}`} text="Вечная память, застывшая в камне." />
          <div className={`${mobile ? 'mobile-txt_main_subtxt' : 'txt_main_subtxt'}`}>
          Изготовление, доставкой и установкой гранитных памятников и благоустройством могил по доступным ценам
          </div>
          <OrangeButton width={200} margin="20px 0px 0px 0px" text="Заказать" onClick={() => { console.log('w') }} />
          <div className="colTimerBlock">
            <div className={`${mobile ? 'mobile-txtTimer' : 'txtTimer'}`}>Получи скидку 15% до окончания времени: </div>
            <div className="wrapperTimer">
              <div className={'txtTimer'}>0</div>
              <div className={'txtTimer'}>1</div>
              <div className={'txtTimer'}>:</div>
              <div className={'txtTimer'}>3</div>
              <div className={'txtTimer'}>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};