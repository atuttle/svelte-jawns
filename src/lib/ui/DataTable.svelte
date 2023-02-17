<script lang="ts">
	import InputGroup from '$lib/inputs/InputGroup.svelte';
	import InputGroupText from '$lib/inputs/InputGroupText.svelte';
	import TextInput from '$lib/inputs/TextInput.svelte';
	import type { DataTableData, DataTableConfig } from '$lib/types';
	export let data: DataTableData;
	export let config: DataTableConfig = {};

	//set searchable=true to use the built in search;
	export let searchable: boolean = false;
	//or implement your own custom search and bind it to this prop
	export let searchQuery: string = '';

	export let sortable: boolean = false;
	let sortColumn: string = '';
	let sortDirection: 'asc' | 'desc' = 'asc';

	const columns = Object.keys(data[0]);

	// allow us to assume that every column has a formatting function by providing a default
	let formatters: { [key: string]: (i: any) => any } = {};
	let alignment: { [key: string]: 'text-left' | 'text-right' | 'text-center' } = {};

	columns.forEach((column) => {
		if (!config[column]) {
			config[column] = {};
		}
		if (config[column].formatter) {
			//@ts-expect-error not sure why this is complaining
			formatters[column] = config[column].formatter;
		} else {
			formatters[column] = (value) => value ?? '';
		}
		if (!config[column]?.justify) {
			alignment[column] = 'text-left';
		} else if (config[column].justify == 'right') {
			alignment[column] = 'text-right';
		} else if (config[column].justify == 'center') {
			alignment[column] = 'text-center';
		}
	});

	let formattedData: DataTableData = data.map((row) => {
		columns.forEach((column) => {
			row[column] = formatters[column](row[column]);
		});
		return row;
	});

	let filteredData: DataTableData;
	$: filteredData = formattedData.filter((row) => {
		return columns.some((column) => {
			return String(row[column]).toLowerCase().includes(searchQuery.toLowerCase());
		});
	});

	let sortedFilteredData: DataTableData;
	$: sortedFilteredData = filteredData.sort((leftRow, rightRow) => {
		if (sortColumn !== '') {
			let cmpLeft = leftRow[sortColumn];
			let cmpRight = rightRow[sortColumn];
			if (cmpLeft === null) return 0;
			if (cmpRight === null) return 0;
			if (sortDirection === 'asc') {
				return cmpLeft > cmpRight ? 1 : -1;
			} else {
				return cmpLeft < cmpRight ? 1 : -1;
			}
		} else {
			return 0;
		}
	});
</script>

<div>
	{#if searchable}
		<div class="mb-1">
			<InputGroup>
				<InputGroupText slot="left" position="left"
					><span class="text-xs" style="transform: scaleX(-1)">🔍</span></InputGroupText
				>
				<TextInput
					slot="middle"
					type="search"
					placeholder="Search"
					class="text-xs"
					bind:value={searchQuery}
				/>
			</InputGroup>
		</div>
	{/if}
	<table class="w-full">
		<thead>
			<tr class="font-bold bg-slate-400 border-b-2 border-b-slate-600">
				{#each columns as column}
					{#if config[column] && config[column].label}
						<th class="p-2 {alignment[column]}">
							{config[column].label}
							{#if sortable}
								<button
									class="text-xs text-slate-100 hover:text-slate-200"
									on:click={() => {
										if (sortColumn == column && sortDirection === 'asc') {
											sortDirection = 'desc';
										} else if (sortColumn == column && sortDirection === 'desc') {
											sortDirection = 'asc';
											sortColumn = '';
										} else {
											sortColumn = column;
											sortDirection = 'asc';
										}
									}}
								>
									<!-- TODO: need a better unsorted placeholder character -->
									{sortColumn == column ? (sortDirection == 'asc' ? '▲' : '▼') : 'x'}
								</button>
							{/if}
						</th>
					{:else}
						<th class="p-2 {alignment[column]}">
							{column}
						</th>
					{/if}
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each sortedFilteredData as row}
				<tr class="odd:bg-gray-100 hover:bg-slate-200">
					{#each columns as column}
						<td class="p-2 {alignment[column]}">{row[column]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
