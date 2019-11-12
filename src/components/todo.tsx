import React, { Dispatch } from 'react';
import { ITodo } from '../interfaces/todo';
import { AppStoreState } from '../store/store';
import { Action } from 'redux';
import { updateTodo } from '../store/todo.actions';
import { connect } from 'react-redux';

export class _Todo extends React.Component<TodoProps> {
	render () {
		return (
			<div className="card">
				<h5 style={{ margin: 0 }}>I am a Todo:</h5>
				<p>
					Complete: {this.props.complete ? 'Yes' : 'No'} <br />
					Task: {this.props.todo} <br />
				</p>
				<button
					onClick={() => this.props.updateTodo({ ...this.props, complete: !this.props.complete })}
					type="button">
					Mark as {this.props.complete ? 'Incomplete' : 'Complete'}
				</button>
			</div>
		)
	}
}

const mapStateToProps = (appState: AppStoreState, ownProps: TodoOwnProps) => {
	return {}
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: TodoOwnProps) => {
	return {
		updateTodo: (todo: ITodo) => dispatch(updateTodo(todo)),
	}
}

type TodoOwnProps = ITodo;

type TodoProps = ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>
	& TodoOwnProps;

export const Todo = connect(
	mapStateToProps,
	mapDispatchToProps
)(_Todo);