import { ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS } from './action-types';
import { ITodo  } from '../types';
import { AddTodoAction, DeleteTodoAction, ChangeTodoStatusAction } from './actions'

const initTodoList:ITodo[] = [];

export const todoReducer = (todos:ITodo[] = initTodoList, action:AddTodoAction | DeleteTodoAction | ChangeTodoStatusAction) => {
  switch(action.type) {
    case ADD_TODO:
      return [(action as AddTodoAction).todo, ...todos];
    case DELETE_TODO:
      return todos.filter((todo, index) => index !== (action as DeleteTodoAction).index);
    case CHANGE_TODO_STATUS:
      const nextTodo:ITodo[] = [...todos];
      let target:ITodo = nextTodo.find((todo, index) => index === (action as ChangeTodoStatusAction).index) as ITodo;
      target.done = !target.done;
      return nextTodo;
    default:
      return todos;
  }
}
