import React from 'react';
import Title from '../Title';
import OrangeButton from '../OrangeButton';
import Timer from '../Timer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTabHeader } from '../../redux/actions/app';
import { setCategory } from '../../redux/actions/cart';
import './style.css';

export default function MainBlock(props) {

  const { mobile } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="itemWrapper">
      <div className="colInfoBlock"> 
        <div className={`${mobile ? 'mobile-wrapper_maintxt' : 'wrapper_maintxt'}`} >
          <Title margin={`${mobile ? "0px 20px 20px" : "0px 0px 20px 0px"}`} size={`${mobile ? '16px' : '33px'}`} text="Вечная память, застывшая в камне." />
          <div className={`${mobile ? 'mobile-txt_main_subtxt' : 'txt_main_subtxt'}`}>
          Изготовление, доставкой и установкой гранитных памятников и благоустройством могил по доступным ценам
          </div>
          <OrangeButton width={200} margin="20px 0px 0px 0px" text="Заказать" onClick={() => {dispatch(setTabHeader(1)); navigate('/catalog/all');  dispatch(setCategory('all')); }} />
          <div className="colTimerBlock">
            <div className={`${mobile ? 'mobile-txtTimer' : 'txtTimer'}`}>Получи скидку 5% до окончания времени: </div>
            <div className="wrapperTimer">
              <Timer initialMinute={15} initialSeconds={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};