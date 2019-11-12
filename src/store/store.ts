import { TodoListState } from '../interfaces/todo';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { todoReducer } from './todo.reducer';

export interface AppStoreState {
	todo: TodoListState;
}

const rootReducer = combineReducers({
	todo: todoReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppStoreState, any>));
