import { TodoListState } from '../interfaces/todo';
import { createStore, combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';

export interface AppStoreState {
	todo: TodoListState;
}

const rootReducer = combineReducers({
	todo: todoReducer
})

export const store = createStore(rootReducer);

