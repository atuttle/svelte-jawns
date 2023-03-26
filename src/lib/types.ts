import type { Validation } from 'sveltekit-superforms';
import type { AnyZodObject } from 'zod';
import type { Writable } from 'svelte/store';

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

type ValuePrimitive = string | number | boolean | null;
export type DataTableData = Array<{ [key: string]: ValuePrimitive }>;

type DataTableColumnConfig = Partial<{
	label: string;
	justify: 'left' | 'right' | 'center';
	sortable: boolean;
	hidden: boolean;
	formatter: (value: ValuePrimitive, row: DataTableData[number]) => ValuePrimitive;
	link: (value: ValuePrimitive, row: DataTableData[number]) => string;
	linkTarget: '_blank' | '_self' | '_parent' | '_top' | string;
}>;
export type DataTableConfig = { [key: string]: DataTableColumnConfig };

export type SuperformForm = Writable<Record<string, any>>;
export type SuperformErrors = Writable<Validation<AnyZodObject, any>['errors']>;
export type SuperformConstraints = Writable<Validation<AnyZodObject, any>['constraints']>;
export type SuperformContext = {
	form: SuperformForm;
	errors: SuperformErrors;
	constraints: SuperformConstraints;
};
