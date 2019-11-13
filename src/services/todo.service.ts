import { store, AppStoreState } from '../store/store';
import { Unsubscribe } from 'redux';
import { addingTodo } from '../store/todo.actions';

let unsubscribe: Unsubscribe | null = null;
const subscribe = function () {
	return store.subscribe(() => {
		const state: AppStoreState = store.getState();
		console.log('TodoService state', state);
	});
}

setTimeout(() => {
	console.log('dispatching event');
	store.dispatch(addingTodo(true));
}, 5000);
console.log('loaded TodoService');

export function startListeningToState (): void {
	stopListeningToState();
	unsubscribe = subscribe();
}

export function stopListeningToState (): void {
	if (unsubscribe) {
		unsubscribe();
		unsubscribe = null;
	}
}
