import React from 'react';
import Answer from '../../components/Answer';
import Title from '../Title';
import { answers } from '../../config';
import './style.css';
 
function AnswerBlock(props) {
  const { header, mobile } = props;
  let st = {fontSize: '10px'}
    return (
      <div id="answer" className={`${mobile ? 'mobileAnswerBlock_container' : "answerblock_container"}`}>
        {
          mobile ? 
          <>
            <Title size={28} margin="20px 0px 30px 0px" text="Вoпросы ответы" under /> 
            {
              answers.map((item,id) => ( 
              <Answer mobile={mobile} style={st} title={item.request} description={item.response} key={id} />
              ))
            }
          </>
          :
          <>
            <Title margin="50px 0px 30px 0px" text="Вoпросы отвевты" under />
            <div className="answerblock_container_header">{header}</div>
            {
              answers.map((item,id) => ( 
              <Answer mobile={mobile} style={st} title={item.request} description={item.response} key={id} />
              ))
            }
          </>
        }
      </div>
    );
}

export default AnswerBlock;
