import React from 'react';

export type TodoFilterType = 'completed' | 'not_completed' | 'all';

interface TodoFilterProps {
	filterChanged: (filterType: TodoFilterType) => void;
	defaultValue?: TodoFilterType;
}

export class TodoFilter extends React.Component<TodoFilterProps> {

	onChange (event) {
		this.props.filterChanged(event.target.value);
	}

	render () {
		return (
			<select id="filter" onChange={this.onChange.bind(this)} defaultValue={this.props.defaultValue}>
				<option value="all">All</option>
				<option value="completed">Completed</option>
				<option value="not_completed">Not Completed</option>
			</select>
		);
	}
}