import React from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div 
      className="Counter"
      onClick={onIncrement}
      onContextMenu={(e)=> {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{
        backgroundColor: color
      }}>
      {number}
      </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
}

Counter.defaultProps = {
  number: 0,
  color: 'red',
  onIncrement: () => console.warn('onIncrement not define'),
  onDecrement: () => console.warn('onDecrement not define'),
  onSetColor: () => console.warn('onSetColor not define')
};
export default Counter;