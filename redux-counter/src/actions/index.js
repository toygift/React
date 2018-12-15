// -------------------------------------------
// 2. 액션 객체 만들기
// -------------------------------------------


import * as types from './ActionTypes';

export const create = (color) => ({
  type: types.CREATE,
  color
})
export const remove = () => ({
  type: types.REMOVE,
})
export const increment = (index) => ({
  type: types.INCREMENT,
  index
});

export const decrement = (index) => ({
  type: types.DECREMENT,
  index
});

export const setColor = ({color, index}) => ({
  type: types.SET_COLOR,
  index,
  color
})