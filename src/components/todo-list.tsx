import React from 'react';
import { Todo } from './todo';
import { getTodosFromApi } from '../data/todos';
import { AddTodo } from './add-todo';
import { ITodo } from '../interfaces/todo';
import { TodoFilter, TodoFilterType } from './todo-filter';

interface TodoListState {
	addTodo: boolean;
	loading: boolean;
	filter: TodoFilterType;
	todos: ITodo[];
}

export class TodoList extends React.Component<{}, TodoListState> {
	constructor (props) {
		super(props);

		this.state = {
			addTodo: false,
			loading: true,
			filter: 'all',
			todos: []
		};
	}

	componentDidMount () {
		getTodosFromApi().then(data => {
			this.setState({
				...this.state,
				loading: false,
				todos: data
			});
		})
	}

	todoAdded (newTodo: ITodo) {
		this.setState({
			todos: this.state.todos.concat(newTodo)
		});
	}

	todoIsCompleted (todoId: number, isComplete: boolean) {
		const newTodos = this.state.todos.slice();
		const updatedTodo = this.state.todos.find(todo => todo.id === todoId);

		if (!updatedTodo) {
			return console.warn('Could not find the ToDo to update');
		}

		updatedTodo.complete = isComplete;
		this.setState({
			...this.state,
			todos: newTodos
		});
	}

	filterTodos (filterType: TodoFilterType) {
		this.setState({ filter: filterType });
	}

	getFilteredTodos (): ITodo[] {
		let filteredTodos: ITodo[];
		switch (this.state.filter) {
			case 'completed': {
				filteredTodos = this.state.todos.filter(t => t.complete);
				break;
			}
			case 'not_completed': {
				filteredTodos = this.state.todos.filter(t => !t.complete);
				break;
			}
			case 'all':
			default: {
				filteredTodos = this.state.todos.slice();
			}
		}
		return filteredTodos;
	}

	render () {
		const todos = this.getFilteredTodos().map((todo, i) => {
			return <Todo key={i} todo={todo.todo} id={todo.id} complete={todo.complete} updateFn={this.todoIsCompleted.bind(this)} />
		});

		return (
			<div>
				<button type="button" onClick={() => this.setState({ ...this.state, addTodo: !this.state.addTodo })}>
					{this.state.addTodo ? 'Hide' : 'Add new todo'}
				</button>
				<div style={{ display: this.state.addTodo ? 'block' : 'none' }}>
					<AddTodo todoAdded={this.todoAdded.bind(this)} />
				</div>

				<div>
					<TodoFilter defaultValue={this.state.filter} filterChanged={this.filterTodos.bind(this)} />
				</div>

				<h4>List of Todos:</h4>
				<span style={{ display: this.state.loading ? 'block' : 'none' }}>Loading...</span>
				{todos}
			</div>
		)
	}
}