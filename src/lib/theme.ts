import { writable } from 'svelte/store';
import type { Theme } from './types';

export const borderRadius = writable<string>(`rounded`);
export const disabled = writable<string>('cursor-not-allowed');

export const button = writable<string>('px-4 py-2 border-none');
export const buttonColorsCTA = writable<string>('bg-green-600 text-gray-100 hover:bg-green-400');
export const buttonColorsTertiary = writable<string>(
	'bg-slate-400 text-slate-800 hover:bg-slate-300'
);
export const buttonColorsDanger = writable<string>('bg-red-700 text-red-50 hover:bg-red-600');
export const buttonColorsGray = writable<string>('bg-gray-300 text-gray-800 hover:bg-gray-400');
export const buttonColorsSubtle = writable<string>(
	'bg-transparent text-gray-500 hover:bg-gray-200'
);
export const buttonColorsDisabled = writable<string>('bg-gray-200 text-gray-500');

export const textInputAddon = writable<string>(
	'border-slate-300 bg-slate-200 text-slate-800 border px-2'
);
export const textInput = writable<string>(
	'px-4 py-2 rounded border-slate-300 bg-slate text-slate-800 w-full'
);

export const setTheme = (theme: Partial<Theme>) => {
	if (theme.borderRadius) {
		borderRadius.set(theme.borderRadius);
	}
	if (theme.button) {
		button.set(theme.button);
	}
	if (theme.disabled) {
		disabled.set(theme.disabled);
	}
};
