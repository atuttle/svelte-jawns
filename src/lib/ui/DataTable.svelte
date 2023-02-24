<script lang="ts">
	import TextInput from '$lib/inputs/TextInput.svelte';
	import type { DataTableData, DataTableConfig } from '$lib/types';
	import { tableHeader } from '$lib/theme';
	export let data: DataTableData;
	export let config: DataTableConfig = {};

	//set sticky=true to make the header row sticky;
	export let sticky: boolean = false;
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
		const columnConfig = config[column];
		if (columnConfig.hasOwnProperty('formatter')) {
			if (typeof columnConfig.formatter !== 'function') {
				throw new Error('formatter must be a function');
			}
			formatters[column] = columnConfig.formatter;
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

	const applySort = (dataInput: DataTableData, sortByCol: string, sortDir: 'asc' | 'desc') => {
		dataInput.sort((leftRow, rightRow) => {
			if (sortByCol !== '') {
				let cmpLeft = leftRow[sortByCol];
				let cmpRight = rightRow[sortByCol];
				if (cmpLeft === null) return 0;
				if (cmpRight === null) return 0;
				if (sortDir === 'asc') {
					return cmpLeft > cmpRight ? 1 : -1;
				} else {
					return cmpLeft < cmpRight ? 1 : -1;
				}
			} else {
				return 0;
			}
		});
		return dataInput;
	};

	const applyFormat = (data: DataTableData) =>
		data.map((row) => {
			columns.forEach((column) => {
				row[column] = formatters[column](row[column]);
			});
			return row;
		});

	const applyFilter = (data: DataTableData) =>
		data.filter((row) => {
			return columns.some((column) => {
				return String(row[column]).toLowerCase().includes(searchQuery.toLowerCase());
			});
		});

	let finalData: DataTableData;
	$: finalData = applyFilter(applyFormat(applySort(data, sortColumn, sortDirection)));
</script>

<div>
	{#if searchable}
		<div class="mb-1 px-1">
			<TextInput
				slot="middle"
				type="search"
				placeholder="Search Table"
				class="text-xs"
				bind:value={searchQuery}
			/>
		</div>
	{/if}
	<table class="w-full">
		<thead>
			<tr class="font-bold">
				{#each columns as column}
					{#if config[column] && config[column].label}
						<th class="p-0" class:sticky>
							<!-- you can put most of the style on the TH but the borders scroll up when sticky which is weird and dumb -->
							<div class="p-2 {$tableHeader} {alignment[column]}">
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
										<span class="text-xl">
											{sortColumn == column ? (sortDirection == 'asc' ? '↑' : '↓') : '↕'}
										</span>
									</button>
								{/if}
							</div>
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
			{#each finalData as row}
				<tr class="odd:bg-gray-100 hover:bg-slate-200">
					{#each columns as column}
						<td class="p-2 {alignment[column]}">{row[column]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	th.sticky {
		position: sticky;
		top: 0;
	}
	table {
		position: relative;
	}
</style>
