import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
//액션정의
const SET_INPUT = 'input/SET_INPUT';
//액션생성
export const setInput = createAction(SET_INPUT);
//초기값 설정
const initialState = Map({
  value:''
})

//리듀서
export default handleActions({
  [SET_INPUT]: (state,action) => {
    return state.set('value',action.payload)
  }
},(initialState))