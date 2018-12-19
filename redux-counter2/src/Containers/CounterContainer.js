import Counter from '../Components/Counter';
import * as actions from '../Actions';
import { connect } from 'react-redux';

export function getRandomColor() {
  const colors = [
    '#495057',
    '#f03e3e',
    '#d6336c',
    '#ae3ec9',
    '#7048e8',
    '#4263eb',
    '#1c7cd6',
    '#1098ad',
    '#0ca678',
    '#37b24d',
    '#74b816',
    '#f59f00',
    '#f76707'
  ];
  const random = Math.floor(Math.random() * 13);
  return colors[random];
}
//store.getState() 결과값인 state를 파라미터로 받아 컴포넌트의 props로 사용할 객체를 반환
const mapStateToProps = (state) => ({
  color: state.color,
  number: state.number
})
//dispatch를 파라미터로 받아 액션을 디스패치하는 함수들을 객체안에 넣어서 반환
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color))
  }
});
//connect함수를 호출하고 나면 또 다른 함수를 반환, 이때 반환하는 함수의 파라미터로 리덕스에 연결시킬
// 컴포넌트를 넣으면 mapStateToProps,mapDispatchToProps 에서 정의한 값들을 props로 받아오는 
// 새컴포넌트를 만든다
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;