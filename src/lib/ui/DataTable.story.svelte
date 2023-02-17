<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;

	import DataTable from '$lib/ui/DataTable.svelte';

	import type { DataTableData, DataTableConfig } from '$lib/types';
	const data: DataTableData = [
		{ name: 'Tuttle', favoriteNumber: 1024 * 1024, livesInPA: true },
		{ name: 'Crump', favoriteNumber: 100.51, livesInPA: false },
		{ name: 'Paul', favoriteNumber: 1024 * 1024, livesInPA: true },
		{ name: 'Rittler', favoriteNumber: 1024 * 1024 + 1, livesInPA: false },
		{ name: 'Verostick', favoriteNumber: 1024, livesInPA: true },
		{ name: 'McAuliffe', favoriteNumber: 1025, livesInPA: true }
	];
	const faveNumberFormatter = Intl.NumberFormat('en-US', {
		style: 'decimal',
		maximumFractionDigits: 0
	});
	const config: DataTableConfig = {
		name: {
			label: 'Last Name'
		},
		favoriteNumber: {
			label: 'Fave Number',
			formatter: (value) =>
				typeof value === 'string' ? value : faveNumberFormatter.format(Number(value)),
			justify: 'right'
		},
		livesInPA: {
			label: 'PA Resident?',
			formatter: (value) => (Boolean(value) ? 'Yes' : 'No'),
			justify: 'center'
		}
	};
</script>

<Hst.Story title="ui/DataTable">
	<DataTable {data} {config} searchable sortable />
</Hst.Story>
