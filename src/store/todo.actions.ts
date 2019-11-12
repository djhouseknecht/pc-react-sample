import { TodoFilterType, ITodo } from '../interfaces/todo';
import { getTodosFromApi } from '../data/todos';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AppStoreState } from './store';

export const GET_TODOS = '[TODO] Get Todos';
export const GET_TODOS_SUCCESS = '[TODO] Get Todos success';
export const FILTER_TODOS = '[TODO] Filer Todos';
export const UPDATE_TODO = '[TODO] Update todo';
export const ADDING_TODO = '[TODO] Adding todo';
export const ADD_TODO = '[TODO] Add todo';

export function getTodosAsync (): ThunkAction<void, AppStoreState, undefined, TodoActionTypes> {
	return (dispatch: ThunkDispatch<{}, {}, any>, getState, extraArgs?: any) => {
		dispatch(getTodos());
		return getTodosFromApi().then(todos => dispatch(getTodosSuccess(todos)));
	}
}

export function getTodos (): { type: typeof GET_TODOS } {
	return {
		type: GET_TODOS
	};
}

export function getTodosSuccess (todos: ITodo[]): { type: typeof GET_TODOS_SUCCESS, todos: ITodo[] } {
	return {
		type: GET_TODOS_SUCCESS,
		todos
	};
}


export function filterTodos (filter: TodoFilterType = 'all'): { type: typeof FILTER_TODOS, filter: TodoFilterType } {
	return {
		type: FILTER_TODOS,
		filter
	};
}

export function updateTodo (todo: ITodo): { type: typeof UPDATE_TODO, todo: ITodo } {
	return {
		type: UPDATE_TODO,
		todo
	};
}

export function addTodo (todo: ITodo): { type: typeof ADD_TODO, todo: ITodo } {
	return {
		type: ADD_TODO,
		todo
	};
}

export function addingTodo (isAdding: boolean): { type: typeof ADDING_TODO, isAdding: boolean } {
	console.log(`addingTodo(${isAdding}) called from within reducer`)
	return {
		type: ADDING_TODO,
		isAdding
	};
}

export type TodoActionTypes = ReturnType<typeof getTodos> | ReturnType<typeof getTodosSuccess> | ReturnType<typeof filterTodos> | ReturnType<typeof updateTodo> | ReturnType<typeof addTodo> | ReturnType<typeof addingTodo>;
