import React from 'react';
import './App.css';
import { TodoList } from './components/todo-list';

export class App extends React.Component {
	render () {
		return (
			<div className="App">
				<h1>I am the app</h1>
				<TodoList />
			</div>
		)
	}
}
