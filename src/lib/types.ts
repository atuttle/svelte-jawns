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
export type DataTableData = Array<{ [key: string]: ValuePrimitive }>

type DataTableColumnConfig = Partial<{ label: string, justify: 'left' | 'right' | 'center', sortable: boolean, formatter: (value: ValuePrimitive) => ValuePrimitive }>
export type DataTableConfig = { [key: string]: DataTableColumnConfig };
