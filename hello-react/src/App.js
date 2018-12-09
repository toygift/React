import React, { Component } from 'react';
import './App.css'
import MyComponent from './MyComponent'
import Event from './EventPractics'
import Validate from './ValidationSample'
import ScrollBox from './ScrollBox'
import Iteration from './IterationSample'
import LifeCycle from './LifeCycleSample'

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}
class App extends Component {
  state = {
    color:'#000000'
  }
  handleClick = () => {
    this.setState({
      color:getRandomColor()
    });
  }
  render() {
    const text = '나는 천재다 !';
    const condition = false;
    const style = {
      backgroundColor:'gray',
      border: '1px solid black',
      width: 100,
      height: 100,
    }
    return (
      <div>
        <MyComponent 
        name={'react'}
        age={37}
      />
        <Event/>
        <Validate/>
        <ScrollBox
          ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => 
          this.scrollBox.scrollToBottom()
        }>맨 밑으로</button>
        <Iteration/>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCycle color={this.state.color}/>
      </div>
      
    );
  }
}

export default App;
// var는 scope가 함수단위임..
// let 과 const는 scope가 함수 단위가 아닌 블록단위
// const는 한번 선언하면 재설정 할수 없음(상수!)