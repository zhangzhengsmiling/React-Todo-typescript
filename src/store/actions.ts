import { ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS } from './action-types';

import { ITodo } from '../types';

export const addTodoAction = (todo:ITodo):AddTodoAction => ({ type: ADD_TODO, todo });
export const deleteTodoAction = (index:number):DeleteTodoAction => ({ type: DELETE_TODO, index });
export const changeTodoStatusAction = (index:number):ChangeTodoStatusAction => ({ type: CHANGE_TODO_STATUS, index });


export type AddTodoAction = {
  type: typeof ADD_TODO,
  todo: ITodo;
}

export type DeleteTodoAction = {
  type: typeof DELETE_TODO,
  index:number;
}

export type ChangeTodoStatusAction = {
  type: typeof CHANGE_TODO_STATUS,
  index:number;
}
