import { writable } from 'svelte/store';

export type ToastMessage = {
	type: 'success' | 'error' | 'warning';
	message: string;
	duration: number;
	autoDismiss: boolean;
	id: string | number;
};

const newToaster = () => {
	const { subscribe, update } = writable<ToastMessage[]>([]);

	function boop(message: ToastMessage) {
		update((state) => [...state, message]);
	}

	function remove(id: string | number) {
		update((store) => {
			return store.filter((message) => message.id !== id);
		});
	}

	function success(message: string, duration = 10000) {
		boop({ type: 'success', message, duration, autoDismiss: duration > 0, id: Date.now().toString() });
	}
	function error(message: string, duration = 10000) {
		boop({ type: 'error', message, duration, autoDismiss: duration > 0, id: Date.now().toString() });
	}
	function warn(message: string, duration = 10000) {
		boop({ type: 'warning', message, duration, autoDismiss: duration > 0, id: Date.now().toString() });
	}

	return { subscribe, success, warn, error, remove };
};

const toast = newToaster();
export default toast;
