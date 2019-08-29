import { ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS } from './action-types';
import { ThunkDispatch } from 'redux-thunk';

import { ITodo } from '../types';

export const addTodoActionSync = (todo:ITodo):AddTodoAction => ({ type: ADD_TODO, todo });
export const deleteTodoAction = (index:number):DeleteTodoAction => ({ type: DELETE_TODO, index });
export const changeTodoStatusAction = (index:number):ChangeTodoStatusAction => ({ type: CHANGE_TODO_STATUS, index });

export const addTodoAction:any = (todo:ITodo) => (dispatch:ThunkDispatch<{}, {}, AddTodoAction>) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(dispatch(addTodoActionSync(todo)));
    }, 1000 * Math.random());
  })
}

export type AddTodoAction = typeof addTodoAction
export type DeleteTodoAction = {
  type: typeof DELETE_TODO,
  index:number;
}

export type ChangeTodoStatusAction = {
  type: typeof CHANGE_TODO_STATUS,
  index:number;
}
