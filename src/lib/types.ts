export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type InputType = 'text' | 'email' | 'password' | 'tel' | 'search' | 'date' | 'time' | 'url';

export interface Theme {
	borderRadius: string;
	button: string;
	buttonColorsCTA: string;
	buttonColorsDanger: string;
	buttonColorsDisabled: string;
	buttonColorsGray: string;
	buttonColorsSubtle: string;
	buttonColorsTertiary: string;
	disabled: string;
	textInput: string;
	textInputAddon: string;
}
