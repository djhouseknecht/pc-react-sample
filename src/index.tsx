import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './store/store';
import { startListeningToState } from './services/todo.service';

startListeningToState();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

