import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Link } from 'react-router-dom';

class SigninWindow extends React.Component {

  constructor( props ){
    super( props );
    this.handleInputChange = this.handleInputChange.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  escFunction(event) {
    const { pass,log,put } = this.props;
    const { formLogin,formPassword} = this.state;
    if(event.keyCode === 13 ) {
      if(formLogin !== log && formPassword !== pass) {
        this.setState({ wrong: true });
      }
      put({formLogin,formPassword})
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  handleInputChange(event) {

    const {
      target: {
        type,
        name,
        checked,
        value
      }
    } = event
   
    
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  render() {
    const {    
      formLogin,
      formPassword,
      login,
      password,
      forgot_email 
    } = this.props

    console.log(this.props)

    return (
      <div className="signinWindowWrapper">
        <div className="signinImageContainer">
          <div className="signinTextContainer">MONUMENTUM.RU</div>
        </div>
        <div className="signinInfoContainer">
          <div className="signinLoginContainer">
            <div>LOGIN</div>
            <input onChange={this.handleInputChange} value={formLogin} name="formLogin" placeholder='Введите почту' className="signinLogin" />
          </div>
          <div className="signinPasswordContainer">
            <div>PASSWORD</div>
            <input type="password" onChange={this.handleInputChange} name="formPassword" placeholder='Введите пароль' className="signinPassword" />
          </div>
          <div className="signinMemberContainer">
            <div className="signinMemberContainerleft">
              <input type="checkbox" name="membercheck" className="chekbox"></input>
              <div>запомни меня</div>
            </div>
            <div className="signinMemberContainerRightBox">
              <Link to='/forgot' >забыли пароль?</Link>
            </div>
          </div>
          <div className="signinBtnContainer">
            <div className="signinBtn">
              <div className="signinBtntext">Войти</div>
            </div>
          </div>
          <div className="signinAutorizationContainer">
              <Link to='/signup' className="signinAutorizeText">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
   user : {
    formLogin,
    formPassword,
    login,
    password,
    forgot_email
   }
  } = state;
  return {
    formLogin,
    formPassword,
    login,
    password,
    forgot_email
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SigninWindow);
