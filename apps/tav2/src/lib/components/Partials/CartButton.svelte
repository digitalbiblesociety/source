<script>
import { _ as t } from 'svelte-i18n'

//import IconShoppingCart from "~icons/heroicons-outline/shopping-cart"
import { cartQuantity } from "$lib/store.js"

if ($cartQuantity < 0) {
	cartQuantity.set(0)
}
</script>

<div class="flow-root">
	<a class="relative flex items-center p-2" href="/store/cart">

		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 flex-shrink-0 text-gray-100 group-hover:text-gray-500 dark:text-gray-200">
			<path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
		</svg>		  

		{#if $cartQuantity > 0}
			<span
				class="absolute bottom-0 right-0 -mb-1 h-5 w-5 rounded-full bg-primary-400 text-center text-sm font-medium text-gray-50 group-hover:text-gray-500"
				class:w-8="{$cartQuantity > 99}">
				{$cartQuantity < 1000 ? $cartQuantity : "1K+"}
			</span>
		{/if}
		<span class="sr-only">items in cart, view bag</span>
	</a>
</div>
