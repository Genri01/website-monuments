import React from 'react';
import images from '../../assets/images';
import './style.css';

function SignupWindow() {
    return (
      <div className="signUpWindowWrapper">
        <div className="signUpImageContainer">
          <div className="signUpTextContainer">MONUMENTUM.RU</div>
        </div>
        <div className="signUpInfoContainer">
          <div className="signUpLoginContainer">
            <div className="">EMAIL</div>
            <input placeholder='Введите имя' className="signUpLogin" />
          </div>
          <div className="signUpPasswordContainer">
            <div className="">PASSWORD</div>
            <div className='passContain'>
              <input placeholder='Введите пароль' className="signUpPassword" />
              {
              !true ? <img aly="eyeon" src={images.eye_on}  className="signUpPasswordEye"/>:
              <img aly="eyeoff" src={images.eye_off}  className="signUpPasswordEye"/>
              }
            </div>
          </div>
          <div className="signUpPasswordReplayContainer">
            <div className="">PASSWORD REPLAY</div>
            <div className='passContain'>
              <input placeholder='Введите пароль еще раз' className="signUpPasswordReplay" />
              {
              !true ? <img aly="eyeon" src={images.eye_on}  className="signUpPasswordEye"/>:
              <img aly="eyeoff" src={images.eye_off}  className="signUpPasswordEye"/>
              }
            </div>
          </div>
          <div className="signUpErrContainer">
            <div className="signUpErr">Пользователь с таким именем уже существует</div>
          </div>
          <div className="signUpBtnContainer">
            <div className="signUpBtn">
              <div className="signUpBtntext">Зарегистрироваться</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SignupWindow;
