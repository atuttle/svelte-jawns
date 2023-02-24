<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;

	import DataTable from '$lib/ui/DataTable.svelte';

	import type { DataTableData, DataTableConfig } from '$lib/types';
	const data: DataTableData = [
		{ name: 'Foo', favoriteNumber: 999, hasTheThing: true },
		{ name: 'Bar', favoriteNumber: 99999, hasTheThing: false },
		{ name: 'Baz', favoriteNumber: 99999999, hasTheThing: true },
		{ name: 'Qux', favoriteNumber: 9999999999, hasTheThing: false }
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
			label: 'Has the thing?',
			formatter: (value) => (Boolean(value) ? 'Yes' : 'No'),
			justify: 'center'
		}
	};
</script>

<Hst.Story title="ui/DataTable">
	<DataTable {data} {config} searchable sortable sticky />
</Hst.Story>
