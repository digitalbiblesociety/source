<script>
	import { onMount } from "svelte"
	import { t } from "$lib/translations/index.js"
	
	//	import { Tabs, Tab, TabList, TabPanel } from '$lib/Tabs'
	
	export let data;
	$: ({ bible } = data);
	
	onMount(async () => {
		bible.links.inscript = await fetch(
			`https://inscript.bible.cloud/content/texts/${bible.id}/info.json`,
			{ method: "HEAD" }
		).then(function (response) {
			return response.ok
		})
	
		bible.links.pdf = await fetch(
			`https://dbs-web.s3.us-west-2.amazonaws.com/downloads/pdf/${bible.id}/${bible.id}_us_letter.pdf`,
			{ method: "HEAD" }
		).then(function (response) {
			return response.ok
		})
	
		bible.links.html_zip = await fetch(
			`https://dbs-web.s3.us-west-2.amazonaws.com/downloads/html_zips/${bible.id}.zip`,
			{ method: "HEAD" }
		).then(function (response) {
			return response.ok
		})
	
		bible.links.epub = await fetch(
			`https://dbs-web.s3.us-west-2.amazonaws.com/downloads/epub/${bible.id}.epub`,
			{ method: "HEAD" }
		).then(function (response) {
			return response.ok
		})
	
		bible.links.mobi = await fetch(
			`https://dbs-web.s3.us-west-2.amazonaws.com/downloads/mobi/${bible.id}.mobi`,
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
	
	<div
		class="py-12 flex w-full flex-col rounded-t pt-10 text-center text-stone-500 dark:bg-stone-600 dark:text-stone-300">
		{#if bible.title_vernacular}
			<h2 class="title-font tracking-widest dark:text-stone-200">{bible.title_vernacular}</h2>
		{/if}
		<h1
			class="title-font mb-8 text-3xl font-medium text-stone-900 dark:text-stone-200">
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
			<div class="flex flex-row">
				<div class="hidden sm:block">
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
	
				<div class="flex-grow">
					<!-- TODO: Add Sophia -->
					<!-- TODO: Add Audio Bible Players -->
	
					<div class="grid grid-cols-4 gap-4">
					{#if bible.links.pdf}
					{#if bible.links.inscript}	
					<a
						class="button"
						target="_blank"
						rel="noopener noreferrer"
						href="https://inscript.org/?w1=bible&t1=local%3A{bible.id}&v1=JN1_1">
						inscript
					</a>
					{/if}
						
						<a
							class="button"
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
							pdf
						</a>
					{/if}
					{#if bible.links.html_zip}
						<a
							class="button"
							href="https://dbs-web.s3.us-west-2.amazonaws.com/downloads/html_zips/{bible.id}.zip">
							html
						</a>
					{/if}
					{#if bible.links.epub}
						<a
							class="button"
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
							epub
						</a>
					{/if}
				</div>
				</div>
			</div>
		</div>
	</section>
	