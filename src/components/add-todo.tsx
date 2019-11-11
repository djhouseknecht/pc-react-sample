import React from 'react';
import { ITodo } from '../interfaces/todo';

const random = () => Math.floor(Math.random() * 10000);

const blankTodo = (): ITodo => {
	return {
		id: random(),
		todo: '',
		complete: false
	};
}

interface AddTodoProps {
	todoAdded: (todo: ITodo) => void
}

export class AddTodo extends React.Component<AddTodoProps, ITodo> {
	constructor (props: AddTodoProps) {
		super(props);
		this.state = blankTodo();
	}

	handleTextChange (event) {
		const { value } = event.target;
		this.setState({ ...this.state, todo: value });
	}

	handleButtonClick (event) {
		this.handleTextChange(event);
		const todo = this.state;
		this.props.todoAdded(todo);
		this.setState(blankTodo());
	}

	render () {
		return (
			<div>
				<input
					type="text"
					name="todo"
					value={this.state.todo}
					onChange={this.handleTextChange.bind(this)}
					placeholder='Add a todo'
				/>
				<button onClick={this.handleButtonClick.bind(this)}>Add</button>
			</div>
		)
	}
}