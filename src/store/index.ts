import { todoReducer } from './reducers';
import { combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  todoList: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

export function configStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
