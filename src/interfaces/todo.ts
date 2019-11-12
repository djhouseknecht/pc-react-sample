export interface TodoListState {
	addingTodo: boolean;
	loading: boolean;
	filter: TodoFilterType;
	todos: ITodo[];
}
export type TodoFilterType = 'completed' | 'not_completed' | 'all';

export interface ITodo {
	id: number;
	todo: string;
	complete: boolean;
}