import React, { Dispatch } from 'react';
import { Todo } from './todo';
import { AddTodo } from './add-todo';
import { ITodo, TodoFilterType } from '../interfaces/todo';
import { TodoFilter } from './todo-filter';
import { connect } from 'react-redux';
import { getTodos, updateTodo, filterTodos, addingTodo, getTodosAsync } from '../store/todo.actions';
import { AppStoreState } from '../store/store';
import { Action } from 'redux';

class _TodoList extends React.Component<TodoListProps> {

	componentDidMount () {
		this.props.getTodosAsync();
	}

	render () {
		const todos = this.props.todos.map((todo, i) => {
			return <Todo key={i} {...todo} />
		});

		return (
			<div>
				<button type="button" onClick={() => this.props.toggleAddingTodo(!this.props.addingTodo)}>
					{this.props.addingTodo ? 'Hide' : 'Add new todo'}
				</button>
				<div style={{ display: this.props.addingTodo ? 'block' : 'none' }}>
					<AddTodo />
				</div>

				<div>
					<TodoFilter />
				</div>

				<h4>List of Todos:</h4>
				<span style={{ display: this.props.loading ? 'block' : 'none' }}>Loading...</span>
				{todos}
			</div>
		)
	}
}

function filteredTodos (todos: ITodo[], filter: TodoFilterType): ITodo[] {
	if (!todos || !todos.length) return [];
	switch (filter) {
		case 'completed': {
			return todos.filter(t => t.complete);
		}
		case 'not_completed': {
			return todos.filter(t => !t.complete);
		}
		case 'all':
		default: {
			return todos.slice();
		}
	}
}

const mapStateToProps = (appState: AppStoreState, ownProps: TodoListOwnProps = {}) => {
	const state = appState.todo;
	return {
		todos: filteredTodos(state.todos, state.filter),
		loading: state.loading,
		filter: state.filter,
		addingTodo: state.addingTodo
	}
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: TodoListOwnProps) => {
	return {
		getTodos: () => dispatch(getTodos()),
		getTodosAsync: () => dispatch(getTodosAsync() as any),
		updateTodo: (todo: ITodo) => dispatch(updateTodo(todo)),
		filterTodos: (filter: TodoFilterType) => dispatch(filterTodos(filter)),
		toggleAddingTodo: (isAdding: boolean) => dispatch(addingTodo(isAdding)),
	}
}

type TodoListOwnProps = {

}

type TodoListProps = ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>
	& TodoListOwnProps;

export const TodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(_TodoList);