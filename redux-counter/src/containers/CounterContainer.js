import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
  const colors = [
    '#495070',
    '#f03e3e',
    '#d6336c',
    '#8048e8',
    '#1098ad'
  ];

  const random = Math.floor(Math.random() * 5);
  return colors[random];
}

const mapStateToProps = state => ({
  color: state.color,
  number: state.number
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);


export default CounterContainer;