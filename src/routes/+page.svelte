<script lang="ts">
	import DataTable from '$lib/ui/DataTable.svelte';

	import type { DataTableData, DataTableConfig } from '$lib/types';
	const data: DataTableData = [
		{ name: 'Foo', favoriteNumber: 999, hasTheThing: true },
		{ name: 'Bar', favoriteNumber: 99999, hasTheThing: false },
		{ name: 'Baz', favoriteNumber: 99999999, hasTheThing: true },
		{ name: 'Qux', favoriteNumber: 9999999999, hasTheThing: false },
		{ name: 'Foo', favoriteNumber: 999, hasTheThing: true },
		{ name: 'Bar', favoriteNumber: 99999, hasTheThing: false },
		{ name: 'Baz', favoriteNumber: 99999999, hasTheThing: true },
		{ name: 'Qux', favoriteNumber: 9999999999, hasTheThing: false },
		{ name: 'Foo', favoriteNumber: 999, hasTheThing: true },
		{ name: 'Bar', favoriteNumber: 99999, hasTheThing: false },
		{ name: 'Baz', favoriteNumber: 99999999, hasTheThing: true },
		{ name: 'Qux', favoriteNumber: 9999999999, hasTheThing: false },
		{ name: 'Foo', favoriteNumber: 999, hasTheThing: true },
		{ name: 'Bar', favoriteNumber: 99999, hasTheThing: false },
		{ name: 'Baz', favoriteNumber: 99999999, hasTheThing: true },
		{ name: 'Qux', favoriteNumber: 9999999999, hasTheThing: false },
		{ name: 'Foo', favoriteNumber: 999, hasTheThing: true },
		{ name: 'Bar', favoriteNumber: 99999, hasTheThing: false },
		{ name: 'Baz', favoriteNumber: 99999999, hasTheThing: true },
		{ name: 'Qux', favoriteNumber: 9999999999, hasTheThing: false },
		{ name: 'Foo', favoriteNumber: 999, hasTheThing: true },
		{ name: 'Bar', favoriteNumber: 99999, hasTheThing: false },
		{ name: 'Baz', favoriteNumber: 99999999, hasTheThing: true },
		{ name: 'Qux', favoriteNumber: 9999999999, hasTheThing: false },
		{ name: 'Foo', favoriteNumber: 999, hasTheThing: true },
		{ name: 'Bar', favoriteNumber: 99999, hasTheThing: false },
		{ name: 'Baz', favoriteNumber: 99999999, hasTheThing: true },
		{ name: 'Qux', favoriteNumber: 9999999999, hasTheThing: false },
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
		hasTheThing: {
			label: 'Has the thing?',
			formatter: (value) => (Boolean(value) ? 'Yes' : 'No'),
			justify: 'center'
		}
	};
</script>

<img src="favicon.png" class="w-24" alt="JAWN logo (inspired by Wawa logo)" />
<h1>Svelte Jawns</h1>

<p style="text-align: center"><em>Go birds!</em></p>

<DataTable {data} {config} sticky sortable searchable />
