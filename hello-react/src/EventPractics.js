import React, { Component } from 'react';

class EventPractics extends Component {
  state = {
    message:'',
    username:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleClick = () => {
    alert(this.state.message + ':' + this.state.username);
    this.setState({
      message : '',
      username: ''
    })
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleClick();
    } 
  }
  render() {
    return (
      <div>
        <h2>이벤트 연습</h2>
        <input 
          type='text'
          name='message'
          placeholder='입력해'
          value={this.state.message}
          onChange={this.handleChange}
          >
        </input>
        <input 
          type='text'
          name='username'
          placeholder='입력해'
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          >
        </input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractics;