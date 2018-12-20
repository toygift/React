import React, { Component } from 'react';

import Buttons from '../Components/Buttons';
import CounterListContainer from './CounterListContainer';
import getRandomColor from '../Lib/getRandomColor'

import { connect } from 'react-redux';
import * as actions from '../Actions';


class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className='App'>
        <Buttons onCreate={onCreate} onRemove={onRemove}/>
        <CounterListContainer/>
      </div>
    );
  }
}

const mapToDispatch = (dispatch) => ({
  onCreate:() => dispatch(actions.create(getRandomColor())),
  onRemove:() => dispatch(actions.remove())
})
export default connect(null,mapToDispatch)(App);