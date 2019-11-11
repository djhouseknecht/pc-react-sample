import { ITodo } from "../interfaces/todo";

const data: ITodo[] = [
	{ id: 1, todo: 'Write react', complete: false },
	{ id: 2, todo: 'Learn Redux', complete: false },
	{ id: 3, todo: 'Author a novel', complete: false },
	{ id: 4, todo: 'Buy chicken', complete: false },
	{ id: 5, todo: 'Go to San Francisco', complete: false },
	{ id: 6, todo: 'Walk Cora', complete: false }
];

export function getTodosFromApi (): Promise<ITodo[]> {
	return new Promise(resolve => setTimeout(() => resolve(data), 2000));
}
