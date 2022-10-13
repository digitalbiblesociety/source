<script>
	import { context as store } from '../app/Context.js';
	export let id = 'svelte-simple-datatable';
	export let ref = '';

	const context = store.get(id);
	const options = context.getOptions();

	const search = (value) => {
		context.getPageNumber().set(1);
		context.getGlobalFilter().set(value);

	};
</script>

<input type="text" {ref}
	placeholder={$options?.labels?.search ?? 'Search'} 
	on:input={(e) => search(e.target.value)}
/>

<style>
input {
	height:3rem; 
	width:100%;
	display:block;
	text-indent:4rem;
	padding-left:12px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-color: rgb(209 213 219);
	color: rgb(55 65 81);
	border-radius: 0.375rem;
}
</style>