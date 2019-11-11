import React from 'react';

interface TodoProps {
	updateFn: (todoId: number, isCompleted: boolean) => void
	complete: boolean;
	todo: string;
	id: number;
}

export class Todo extends React.Component<TodoProps> {

	todoUpdated () {
		const { id, complete } = this.props;
		this.props.updateFn(id, !complete);
	}

	render () {
		return (
			<div className="card">
				<h5 style={{ margin: 0 }}>I am a Todo:</h5>
				<p>
					Complete: {this.props.complete ? 'Yes' : 'No'} <br />
					Task: {this.props.todo} <br />
				</p>
				<button onClick={this.todoUpdated.bind(this)} type="button">
					Mark as {this.props.complete ? 'Incomplete' : 'Complete'}
				</button>
			</div>
		)
	}
}