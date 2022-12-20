<script>
	import { page } from '$app/stores';
	import { t } from "$lib/Translations/index.js"

</script>

<div
	class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
	<div class="mx-auto max-w-max">
		<main class="sm:flex">
			<p class="text-4xl font-extrabold text-stone-50 sm:text-5xl">
				{$page.status}
			</p>
			<div class="sm:ml-6">
				<div class="sm:border-l sm:border-stone-200 sm:pl-6">
					<h1
						class="text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl">
						Something Went Wrong
					</h1>
					<p class="mt-1 text-stone-500 dark:text-stone-200">
						{$page.error.message}
					</p>
				</div>
				<div
					class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
					<a href="/" class="button p-4">Go back home</a>
					<a href="/about/contact" class="button p-4">Contact support</a>
				</div>
			</div>
		</main>
	</div>
</div>
