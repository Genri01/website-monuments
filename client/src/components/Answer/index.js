import React from 'react';
import './style.css';
import images from '../../assets/images';
class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const { title, description } = this.props;
    const { cross } = images; 
    return (
      <div className="answer_container">
      <div className="answer_cross">
        <img onClick={this.handleClick} className={`cross_rotate ${!this.state.isToggleOn ? 'on_crooss' : 'off_crooss' }`} src={cross} alt="logo" width="15" height="15" />
        <div className="answer_title" onClick={this.handleClick}>{title}</div>
      </div>
      {!this.state.isToggleOn ? <div className="answer_description">{description}</div> : ''}
      </div>
    );
  }
}

export default Answer;