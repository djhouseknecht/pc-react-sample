import { TodoFilterType, ITodo } from '../interfaces/todo';

export const GET_TODOS = '[TODO] Get Todos';
export const FILTER_TODOS = '[TODO] Filer Todos';
export const UPDATE_TODO = '[TODO] Update todo';
export const ADDING_TODO = '[TODO] Adding todo';
export const ADD_TODO = '[TODO] Add todo';

export function getTodos (): { type: typeof GET_TODOS } {
	return {
		type: GET_TODOS
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

export type TodoActionTypes = ReturnType<typeof getTodos> | ReturnType<typeof filterTodos> | ReturnType<typeof updateTodo> | ReturnType<typeof addTodo> | ReturnType<typeof addingTodo>;
