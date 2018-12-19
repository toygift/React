import * as types from '../Actions/ActionType';
//리듀서 만들기
const initialState = {
  color: 'black',
  number: 0
}
//리듀서 함수는 state와 action을 파라미터로 가지는 함수
function counter(state=initialState,action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      }

    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }

    case types.SET_COLOR:
      return {
        ...state,
      color: action.color
      }

    default:
      return state;
  }
}
export default counter;