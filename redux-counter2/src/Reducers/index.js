import * as types from '../Actions/ActionType';
//리듀서 만들기
const initialState = {
  counters : [
    {
      color: 'black',
      number: 0
    }
  ]  
};
//리듀서 함수는 state와 action을 파라미터로 가지는 함수

function counter(state=initialState, action) {
  const { counters } = state;

  switch (action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      }
    case types.REMOVE:
      return {
        counters: counters.slice(0,counters.length - 1)
      };
      
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0,action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number + 1
          },
          ...counters.slice(action.index+1, counters.length)
        ]
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0,action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index+1, counters.length)
        ]
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0,action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index+1, counters.length)
        ]
      };
    default:
      return state;
  }
}
export default counter;