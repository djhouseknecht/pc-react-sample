import React, { Dispatch } from 'react';
import { ITodo } from '../interfaces/todo';
import { AppStoreState } from '../store/store';
import { Action } from 'redux';
import { addTodo } from '../store/todo.actions';
import { connect } from 'react-redux';

const random = () => Math.floor(Math.random() * 10000);
const blankTodo = (): ITodo => {
	return {
		id: random(),
		todo: '',
		complete: false
	};
}

class _AddTodo extends React.Component<AddTodoProps, { newTodo: ITodo }> {
	constructor (props: AddTodoProps) {
		super(props);
		this.state = { newTodo: blankTodo() };
	}

	handleTextChange (event) {
		this.setState({ newTodo: { ...this.state.newTodo, todo: event.target.value } });
	}

	handleButtonClick (event) {
		event.preventDefault();
		this.props.addTodo(this.state.newTodo);
		this.setState({ newTodo: blankTodo() })
	}

	render () {
		return (
			<div>
				<input
					type="text"
					name="todo"
					value={this.state.newTodo.todo}
					onChange={this.handleTextChange.bind(this)}
					placeholder='Add a todo'
				/>
				<button onClick={this.handleButtonClick.bind(this)}>Add</button>
			</div>
		)
	}
}

const mapStateToProps = (appState: AppStoreState, ownProps: AddTodoOwnProps) => {
	return {}
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: AddTodoOwnProps) => {
	return {
		addTodo: (todo: ITodo) => dispatch(addTodo(todo)),
	}
}

type AddTodoOwnProps = {

}

type AddTodoProps = ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>
	& AddTodoOwnProps;

export const AddTodo = connect(
	mapStateToProps,
	mapDispatchToProps
)(_AddTodo);