import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
// -------------------------------------------
// 4. 스토어 생성
// -------------------------------------------
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// -------------------------------------------
// 5. 프로바이더로 감싸기
// -------------------------------------------
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
