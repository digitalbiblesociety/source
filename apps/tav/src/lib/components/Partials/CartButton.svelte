<script>
import { t } from "$lib/translations/index.js"

import IconShoppingCart from "~icons/heroicons-outline/shopping-cart"
import { cartQuantity } from "$lib/store.js"

if ($cartQuantity < 0) {
	cartQuantity.set(0)
}
</script>

<div class="flow-root">
	<a class="relative flex items-center p-2" href="/store/cart">
		<IconShoppingCart
			class="h-6 w-6 flex-shrink-0 text-gray-100 group-hover:text-gray-500 dark:text-gray-200" aria-label="Cart"/>
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
