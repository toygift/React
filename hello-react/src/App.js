import React, { Component } from 'react';
import './App.css'
import MyComponent from './MyComponent'
import Event from './EventPractics'
class App extends Component {
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
      </div>
      
    );
  }
}

export default App;
// var는 scope가 함수단위임..
// let 과 const는 scope가 함수 단위가 아닌 블록단위
// const는 한번 선언하면 재설정 할수 없음(상수!)