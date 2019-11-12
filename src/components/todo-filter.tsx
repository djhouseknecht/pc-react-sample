import React, { Dispatch } from 'react';
import { TodoFilterType } from '../interfaces/todo';
import { filterTodos } from '../store/todo.actions';
import { AppStoreState } from '../store/store';
import { Action } from 'redux';
import { connect } from 'react-redux';

class _TodoFilter extends React.Component<TodoFilterProps> {
	render () {
		return (
			<select id="filter"
				onChange={(e) => this.props.updateFilter(e.target.value as TodoFilterType)}
				defaultValue={this.props.defaultValue}
			>
				<option value="all">All</option>
				<option value="completed">Completed</option>
				<option value="not_completed">Not Completed</option>
			</select>
		);
	}
}

const mapStateToProps = (appState: AppStoreState, ownProps: TodoFilterOwnProps) => {
	const state = appState.todo;
	return {
		defaultValue: state.filter
	}
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: TodoFilterOwnProps) => {
	return {
		updateFilter: (filter: TodoFilterType) => dispatch(filterTodos(filter)),
	}
}

type TodoFilterOwnProps = {};

type TodoFilterProps = ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>
	& TodoFilterOwnProps;

export const TodoFilter = connect(
	mapStateToProps,
	mapDispatchToProps
)(_TodoFilter);