<script>

	// Suggestion (check code before using, and possibly convert to data.X access later):
	// /** @type {import('./$types').PageData} */
	// export let data;
	// $: ({ bible } = data);

import { onMount } from "svelte"
import { t } from "$lib/Translations/index.js"
import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte"

//	import { Tabs, Tab, TabList, TabPanel } from '$lib/Tabs'

export let data;
$: ({ bible } = data);

let bible_links = {}

/*
	let printable = {
		page_count: 300,
		trim: 'US Letter',
		binding: '',
		paper_finish: '60# White - Uncoated',
		cover_finish: 'Glossy',
	}

	let audio_players = [
		{ id: 'envoy-2-elite', title: 'Envoy 2 Elite', description: '' },
		{ id: 'envoy-2-s', title: 'Envoy 2 S', description: '' },
		{ id: 'envoy-2-duel', title: 'Envoy 2 Duel', description: '' },
		{ id: 'wildlife', title: 'Wildlife Storyteller', description: '' },
	]
*/

onMount(async () => {
	bible_links.inscript = await fetch(
		`https://inscript.bible.cloud/content/texts/${bible.id}/info.json`,
		{ method: "HEAD" }
	).then(function (response) {
		return response.ok
	})

	bible_links.pdf = await fetch(
		`https://dbs-web.s3.us-west-2.amazonaws.com/downloads/pdf/${bible.id}/${bible.id}_us_letter.pdf`,
		{ method: "HEAD" }
	).then(function (response) {
		return response.ok
	})

	bible_links.html_zip = await fetch(
		`https://dbs-web.s3.us-west-2.amazonaws.com/downloads/html_zips/${bible.id}.zip`,
		{ method: "HEAD" }
	).then(function (response) {
		return response.ok
	})

	bible_links.epub = await fetch(
		`https://dbs-web.s3.us-west-2.amazonaws.com/downloads/epub/${bible.id}.epub`,
		{ method: "HEAD" }
	).then(function (response) {
		return response.ok
	})
})
</script>

<!-- <Tabs> -->
<svelte:head>
	<title>{bible.title} | Digital Bible Society</title>
</svelte:head>

<div class="flex-left">
	<Breadcrumbs
		breadcrumbs="{[
			{ link: `/bibles`, title: $t('common.Bibles') },
			{ link: '#', title: bible.title },
		]}" />
</div>

<div
	class="mb-4 flex w-full flex-col rounded-t pt-10 text-center text-stone-500 dark:bg-stone-600 dark:text-stone-300">
	{#if bible.title_vernacular}
		<h2 class="title-font tracking-widest">{bible.title_vernacular}</h2>
	{/if}
	<h1
		class="title-font mb-8 text-3xl text-stone-900 dark:text-stone-200">
		{bible.title}
		<span class="block text-sm sm:hidden">
			{bible.date} |
			<a class="font-bold text-blue-600" href="/languages/{bible.iso}">
				{bible.language.name}
			</a>
		</span>
	</h1>
	<!--
        <TabList>
        	<Tab>{ $t('Downloads') }</Tab>
            {#if bible.pod.print_ready}
                <Tab>{ $t('Print on Demand') }</Tab>
            {/if}
			{#if bible.audio }
				<Tab>{ $t('Audio Player') }</Tab>
			{/if}
        </TabList>
        -->
</div>

<!--	<TabPanel> -->
<section class="overflow-hidden text-stone-600">
	<div class="container mx-auto px-5 py-4">
		<div class="grid gap-3 sm:grid-cols-1 md:grid-cols-3">
			<div class="mx-auto hidden rounded p-4 dark:bg-stone-800 sm:block">
				<img
					class="mx-auto mb-4"
					src="https://images.bible.cloud/covers/220x340/{bible.id}.jpg"
					alt="Cover for {bible.title}" />
				{#if bible.alphabet}
					<div class="flex justify-between">
						<span class="">{$t("common.Alphabet")}</span>
						<a class="font-bold text-blue-600" href="/alphabets/{bible.script}">
							{bible.alphabet.name}
						</a>
					</div>
				{/if}

				{#if bible.date}
					<div class="flex justify-between">
						<span class="">Date</span>
						<span class="font-bold text-stone-700 dark:text-stone-300">
							{bible.date}
						</span>
					</div>
				{/if}

				{#if bible.iso}
					<div class="flex justify-between">
						<span class="">Iso</span>
						<a class="font-bold text-blue-600" href="/languages/{bible.iso}">
							{bible.iso}
						</a>
					</div>
				{/if}

				{#if bible.language}
					<div class="flex justify-between">
						<span class="">Language</span>
						<a class="font-bold text-blue-600" href="/languages/{bible.iso}">
							{bible.language.name}
						</a>
					</div>
				{/if}

				{#if bible.country}
					<div class="flex justify-between">
						<span class="">Country</span>
						<a
							class="font-bold text-blue-600"
							href="/countries/{bible.country_id}">
							{bible.country.name}
						</a>
					</div>
				{/if}

				{#if bible.description_short}
					<div class="pt-4 text-center text-sm">
						{bible.description_short}
					</div>
				{/if}

				{#if bible.copyright}
					<div class="mt-4 text-center text-sm text-stone-500">
						{bible.copyright}
					</div>
				{/if}
			</div>

			<div class="col-span-2">
				<!-- TODO: Add Sophia -->
				<!-- TODO: Add Audio Bible Players -->

				{#if bible_links.inscript}
					<div class="mb-6 border-b pb-4 dark:border-stone-400">
						<h3 class="uppercase text-stone-600 dark:text-stone-300">
							Read Online:
						</h3>
						<h4 class="text-sm text-stone-400">
							For online use, comparision and study.
						</h4>
					</div>

					<a
						class="button-bible"
						target="_blank"
						rel="noopener noreferrer"
						href="https://inscript.org/?w1=bible&t1=local%3A{bible.id}&v1=JN1_1">
						{$t("bible.bible_type_inscript")}
					</a>
				{/if}

				{#if bible_links.pdf}
					<div class="mt-10 mb-6 border-b pb-4 dark:border-stone-400">
						<h3 class="uppercase text-stone-600 dark:text-stone-300">
							Downloads:
						</h3>
						<h4 class="text-sm text-stone-400">
							For offline use, printing and sharing.
						</h4>
					</div>

					<a
						class="button-bible"
						target="_blank"
						href="https://dbs-web.s3.us-west-2.amazonaws.com/downloads/pdf/{bible.id}/{bible.id}_us_letter.pdf">
						<svg
							class="mr-4 inline-block h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 10 10">
							<path
								fill="currentColor"
								d="M.2 9.8c-.55-.57.04-1.35 1.65-2.18l1.02-.52.4-.9c.2-.49.53-1.29.71-1.78l.33-.89-.23-.66a4.86 4.86 0 0 1-.2-2.46c.24-.6 1.01-.53 1.32.1a4.15 4.15 0 0 1-.07 2.53l-.23.93.2.36a12.54 12.54 0 0 0 .74 1.05l.54.7.68-.1c2.16-.28 2.9.21 2.9.92 0 .9-1.7.97-3.12-.06a4.37 4.37 0 0 1-.54-.46s-.89.18-1.33.3c-.45.13-.68.21-1.34.44l-.38.6a6.44 6.44 0 0 1-1.7 2.02A1.12 1.12 0 0 1 .2 9.8Zm.86-.32a6.66 6.66 0 0 0 1.36-1.67l.18-.29-.8.42C.57 8.58.01 9.18.3 9.54c.17.21.36.2.76-.06Zm7.98-2.32a.49.49 0 0 0-.08-.84 2.17 2.17 0 0 0-1.17-.16c-.42.03-1.1.12-1.22.15l.54.37a7.04 7.04 0 0 0 1.15.5c.39.12.61.1.78-.02Zm-3.2-1.39a8.12 8.12 0 0 1-.7-.92 5.16 5.16 0 0 1-.38-.6s-.19.63-.34 1.01L3.93 6.5l-.14.28s.75-.25 1.12-.35c.4-.11 1.21-.28 1.21-.28ZM4.8 1.47a1.87 1.87 0 0 0-.06-1c-.35-.4-.77-.07-.7.86a6.6 6.6 0 0 0 .2 1.2l.19.6.13-.46c.07-.25.18-.79.24-1.2Z">
							</path>
						</svg>
						{$t("bible.bible_type_pdf")}
					</a>
				{/if}
				{#if bible_links.html_zip}
					<a
						class="button-bible"
						href="https://dbs-web.s3.us-west-2.amazonaws.com/downloads/html_zips/{bible.id}.zip">
						{$t("bible.bible_type_html")}
					</a>
				{/if}
				{#if bible_links.epub}
					<a
						class="button-bible"
						href="https://dbs-web.s3.us-west-2.amazonaws.com/downloads/epub/{bible.id}.epub">
						<svg
							class="mr-4 inline-block h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16">
							<path
								fill="currentColor"
								d="M8 12.7 3.3 8 8 3.3l1.6 1.6L6.4 8 8 9.6l4.7-4.7-4-4.1a.9.9 0 0 0-1.3 0L.8 7.4c-.4.3-.4.9 0 1.2l6.6 6.6c.3.4.9.4 1.2 0l6.6-6.6c.4-.3.4-.9 0-1.2l-1-1L8 12.7z">
							</path>
						</svg>
						{$t("bible.bible_type_epub")}
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>
<!--
	</TabPanel>

	{#if bible.pod.print_ready}
		<TabPanel>
			<section class="text-stone-600 body-font overflow-hidden">
				<div class="container px-5 py-24 mx-auto">
					<div class="lg:w-4/6 mx-auto flex flex-wrap">
						<img
							alt="ecommerce"
							class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
							src="/img/bibles/{bible.id}.png" />
						<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<h2 class="text-sm title-font text-stone-500 tracking-widest">
								{bible.title_vernacular}
							</h2>
							<h1 class="text-stone-900 text-3xl title-font mb-1">
								{bible.title}
							</h1>
							<p class="leading-relaxed">
								We take no royalties on any of our print on demand Bibles,
								providing the service only through the generosity of donors.
							</p>
							<div
								class="flex mt-6 items-center pb-5 border-b-2 border-stone-100 mb-5">
								{#if printable.page_count < 48}
									<label class="w-1/5">
										<img
											class="w-10 border-2 border-stone-500 mx-auto rounded-full"
											src="/img/binding_saddle.jpeg"
											alt="Saddle Stitch" />
										Softcover Saddle Stitch
										<input
											class="invisible"
											type="radio"
											bind:group="{printable.binding}"
											value="binding_saddle" />
									</label>
									<label class="opacity-60 w-1/5">
										<img
											class="w-10 border-2 border-stone-500 mx-auto rounded-full"
											src="/img/binding_coil.jpeg"
											alt="Coil Binding" />
										Coil Bound
										<input
											class="invisible"
											type="radio"
											bind:group="{printable.binding}"
											value="binding_coil" />
									</label>
								{/if}
								<label class="{printable.page_count < 48 ? 'w-1/5' : 'w-1/3'}">
									<img
										class="{printable.binding === 'binding_perfect'
											? 'border-blue-600'
											: 'border-stone-500 opacity-50'} w-10 border-2 mx-auto rounded-full"
										src="/img/binding_perfect.jpeg"
										alt="Perfect Binding" />
									Perfect Binding
									<input
										class="invisible"
										type="radio"
										bind:group="{printable.binding}"
										value="binding_perfect" />
								</label>
								<label class="{printable.page_count < 48 ? 'w-1/5' : 'w-1/3'}">
									<img
										class="{printable.binding === 'binding_casewrap'
											? 'border-blue-600'
											: 'border-stone-500 opacity-50'} w-10 border-2 border-stone-500 mx-auto rounded-full"
										src="/img/binding_casewrap.jpeg"
										alt="Casewrap Binding" />
									Casewrap
									<input
										class="invisible"
										type="radio"
										bind:group="{printable.binding}"
										value="binding_casewrap" />
								</label>
								<label class="{printable.page_count < 48 ? 'w-1/5' : 'w-1/3'}">
									<img
										class="{printable.binding === 'binding_linen'
											? 'border-blue-600'
											: 'border-stone-500 opacity-50'} w-10 border-2 border-stone-500 mx-auto rounded-full"
										src="/img/binding_linen.jpeg"
										alt="Linen Binding" />
									Linen
									<input
										class="invisible"
										type="radio"
										bind:group="{printable.binding}"
										value="binding_linen" />
								</label>
							</div>

							<div class="text-sm text-stone-500">
								<div><b>Interior Color</b>: Black & White Standard</div>
								<div><b>Trim Size</b>: {printable.trim}</div>
								<div><b>Binding Type</b>: {printable.binding}</div>
								<div><b>Paper Type</b>: {printable.paper_finish}</div>
								<div><b>Cover Finish</b>: {printable.cover_finish}</div>
								<div><b>Pages:</b> {printable.page_count}</div>
							</div>

							<label class="flex border-stone-100 border-2 p-2 mb-4">
								<span class="text-stone-800 px-4">Quantity</span>
								<input
									id="quantity"
									class="block w-full rounded-md border-transparent focus:border-stone-500"
									type="text"
									name="quantity"
									value="1" />
							</label>

							<div class="flex">
								<span class="title-font text-2xl text-stone-900"
									>$14.20</span>
								<button
									class="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
									Button
								</button>
								<button
									class="rounded-full w-10 h-10 bg-stone-200 p-0 border-0 inline-flex items-center justify-center text-stone-500 ml-4">
									<svg
										fill="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-5 h-5"
										viewBox="0 0 24 24">
										<path
											d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
										></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</TabPanel>
	{/if}
	{#if bible.audio }
	<TabPanel>
		<div
			class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">

			<div class="lg:max-w-lg lg:self-end">
				<div class="mt-4">
					<h1
						class="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-300 sm:text-4xl">
						MEGAVOICE Envoy Equip
					</h1>
				</div>

				<section aria-labelledby="information-heading" class="mt-4">
					<h2 id="information-heading" class="sr-only">Product information</h2>

					<div class="flex items-center">
						<p class="text-lg text-stone-900 dark:text-stone-300 sm:text-xl">
							$47
						</p>

						<div
							class="ml-4 pl-4 border-l border-stone-300 dark:border-stone-900">
							<h2 class="sr-only">Reviews</h2>
							<div class="flex items-center">
								<div>
									<div class="flex items-center">
										<svg
											class="text-yellow-400 h-5 w-5 shrink-0"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											></path>
										</svg>


										<svg
											class="text-yellow-400 h-5 w-5 shrink-0"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											></path>
										</svg>


										<svg
											class="text-yellow-400 h-5 w-5 shrink-0"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											></path>
										</svg>

	
										<svg
											class="text-yellow-400 h-5 w-5 shrink-0"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											></path>
										</svg>


										<svg
											class="text-stone-300 h-5 w-5 shrink-0"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											></path>
										</svg>
									</div>
									<p class="sr-only">4 out of 5 stars</p>
								</div>
								<p class="ml-2 text-sm text-stone-500"></p>
							</div>
						</div>
					</div>

					<div class="mt-4 space-y-6">
						<p class="text-stone-500 dark:text-stone-400"></p>
					</div>

					<div class="mt-6 flex items-center">

						<svg
							class="shrink-0 w-5 h-5 text-green-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"></path>
						</svg>
						<p class="ml-2 text-sm text-stone-500 dark:text-stone-400">
							In stock and ready to ship
						</p>
					</div>
				</section>
			</div>


			<div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
				<div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
					<img
						src="https://megavoice.com/uploads/MV-Website-Product-Images-Envoy-2-Elite-Audio-Bible.png"
						alt="Model wearing light green backpack with black canvas straps and front zipper pouch."
						class="w-full h-full object-center object-cover" />
				</div>
			</div>

			<div
				class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
				<section aria-labelledby="options-heading">
					<h2 id="options-heading" class="sr-only">Product options</h2>

					<form>
						<div class="sm:flex sm:justify-between">

							<fieldset>
								<legend
									class="block text-sm text-stone-700 dark:text-stone-300">
									Size
								</legend>
								<div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
									{#each audio_players as audio_player}
										<label
											class="relative block border border-stone-300 rounded-lg p-4 cursor-pointer focus:outline-none">
											<input
												type="radio"
												name="size-choice"
												value="{audio_player.id}"
												class="sr-only"
												aria-labelledby="size-choice-0-label"
												aria-describedby="size-choice-0-description" />
											<p
												id="size-choice-0-label"
												class="text-stone-900 dark:text-stone-300">
												{audio_player.title}
											</p>
											<p
												id="size-choice-0-description"
												class="mt-1 text-sm text-stone-500 dark:text-stone-400">
												{audio_player.description}
											</p>

											<div
												class="absolute -inset-px rounded-lg border-2 pointer-events-none"
												aria-hidden="true">
											</div>
										</label>
									{/each}
								</div>
							</fieldset>
						</div>
						<div class="mt-4">
							<a
								href="/about/devices/audio"
								class="group inline-flex text-sm text-stone-500 hover:text-stone-700">
								<span>What player should I buy?</span>

								<svg
									class="shrink-0 ml-2 h-5 w-5 text-stone-400 group-hover:text-stone-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
										clip-rule="evenodd"></path>
								</svg>
							</a>
						</div>
						<div class="mt-10">
							<button type="submit" class="button w-full">Add to bag</button>
						</div>
						<div class="mt-6 text-center">
							<a href="#" class="group inline-flex font-medium">

								<svg
									class="shrink-0 mr-2 h-6 w-6 text-stone-400 group-hover:text-stone-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									></path>
								</svg>
								<span class="text-stone-500 hover:text-stone-700"
									>Lifetime Guarantee</span>
							</a>
						</div>
					</form>
				</section>
			</div>
		</div>
	</TabPanel>
	{/if}

</Tabs>
-->
