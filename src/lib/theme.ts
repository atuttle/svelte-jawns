import { writable } from 'svelte/store';
import type { Theme } from './types';

export const transitionDurationMS = writable<number>(200);

export const typography = writable<string>(`antialiased`);
export const headings = writable<string>(`font-bold`);

export const borderRadius = writable<string>(`rounded`);
export const disabled = writable<string>('cursor-not-allowed');

export const button = writable<string>(`border-2 px-4 py-2`);
export const buttonColorsCTA = writable<string>('border-green-600 bg-green-600 text-gray-100 hover:bg-green-500 hover:border-green-500');
export const buttonColorsCTAOutline = writable<string>(
	'bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
);
export const buttonColorsTertiary = writable<string>(
	'bg-slate-600 border-slate-600 text-slate-100 hover:bg-slate-500 hover:border-slate-500'
);
export const buttonColorsTertiaryOutline = writable<string>(
	'bg-transparent border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100'
);
export const buttonColorsDanger = writable<string>('border-red-700 bg-red-700 text-red-50 hover:bg-red-600 hover:border-red-600');
export const buttonColorsDangerOutline = writable<string>(
	'bg-transparent border-red-700 text-red-700 hover:bg-red-700 hover:text-white'
);
export const buttonColorsGray = writable<string>('border-gray-400 bg-gray-400 text-gray-100 hover:bg-gray-400 hover:border-gray-400');
export const buttonColorsGrayOutline = writable<string>(
	'bg-transparent border-gray-400 text-gray-500 hover:bg-gray-400 hover:text-white'
);
export const buttonColorsSubtle = writable<string>(
	'bg-transparent border-transparent text-gray-500 hover:bg-gray-300 hover:border-gray-300'
);
export const buttonColorsDisabled = writable<string>('border-gray-300 bg-gray-300 text-gray-500');

export const textInputAddon = writable<string>(
	'border-slate-300 bg-slate-200 text-slate-800 border px-2'
);
export const textInput = writable<string>(
	`${breathingRoom} rounded border-slate-300 bg-slate text-slate-800 w-full`
);

export const toggleBgOff = writable<string>('#e5e5e5');
export const toggleBgOn = writable<string>('#dcfce7');
export const toggleBgBorderOff = writable<string>('1px solid transparent');
export const toggleBgBorderOn = writable<string>('1px solid transparent');
export const toggleSwitchOff = writable<string>('#71717a');
export const toggleSwitchOn = writable<string>('#22c55e');

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
