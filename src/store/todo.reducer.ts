import { TodoListState } from '../interfaces/todo';
import * as TodoActions from './todo.actions';
import { data } from '../data/todos';


const initialState: TodoListState = {
	addingTodo: false,
	loading: true,
	filter: 'all',
	todos: []
};

export function todoReducer (state: TodoListState = initialState, action: TodoActions.TodoActionTypes): TodoListState {
	switch (action.type) {
		case TodoActions.GET_TODOS: {
			return { ...state, todos: data, loading: false };
		}
		case TodoActions.ADDING_TODO: {
			return { ...state, addingTodo: action.isAdding }
		}
		case TodoActions.ADD_TODO: {
			return { ...state, todos: state.todos.concat(action.todo) };
		}
		case TodoActions.FILTER_TODOS: {
			return { ...state, filter: action.filter };
		}
		case TodoActions.UPDATE_TODO: {
			return { ...state, todos: state.todos.map(todo => todo.id === action.todo.id ? action.todo : todo) };
		}
		default: {
			console.debug(`Unknown TodoActionType received in todoReducer. Type [${action['type']}]`);
			return state;
		}
	}
}