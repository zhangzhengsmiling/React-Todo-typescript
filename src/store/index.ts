import { todoReducer } from './reducers';
import userReducers from '../components/test/store/reducers';
import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  todoList: todoReducer,
  user: userReducers,
})

export type RootState = ReturnType<typeof rootReducer>

export function configStore() {
  return createStore(
    rootReducer as Reducer<RootState>,
    applyMiddleware(thunk)
  );
}
