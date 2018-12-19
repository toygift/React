import * as types from './ActionType';
// 액션생성
export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
})

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
})