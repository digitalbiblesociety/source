<script>
import { Datatable } from "@dbs/svelte-datatables"
import { t } from "$lib/Translations"

import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte"
import IconArrowRight from "~icons/heroicons-outline/arrow-right"

/** @type {import('./$types').PageData} */
export let data;
$: ({ library } = data);

let rows
</script>

<svelte:head>
	<title>{library.title} | {$t("common.org_title")}</title>
</svelte:head>


	<div
		class="border-t-1 relative -mx-9 -mt-1 flex flex-col justify-between rounded-t-xl border-2 border-b-0
				border-stone-400 bg-cover bg-center bg-no-repeat text-center"
		style="background-image: url('https://images.bible.cloud/treasures/banners/{library.id}.jpg');">
		<h4 class="text-shadow-xl pt-8 text-2xl text-stone-200">
			{library.title_vernacular}
		</h4>
		<h2
			class="text-shadow-xl pb-8 text-3xl font-extrabold text-stone-300 sm:text-4xl">
			{library.title}
		</h2>
	</div>

	<div class="">
		<Breadcrumbs
			breadcrumbs="{[
				{ link: `/libraries/`, title: $t('common.Libraries') },
				{ link: `/libraries/treasures`, title: $t('common.Treasures') },
				{ link: '#', title: library.title },
			]}" />
	</div>

	
		<div class="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="relative mx-auto max-w-4xl">
				<div class="py-12 sm:flex">
					<div
						class="mt-3 pr-8 text-xl text-stone-800 dark:text-stone-300 sm:mt-4">
						<a
							class="button mb-8 p-4"
							href="http://downloads.dbs.org.s3.amazonaws.com/treasures/{library.iso.toUpperCase()}/index.html">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="inline-block h-6 w-6"
								viewBox="0 0 62 61"
								fill="currentColor">
								<path d="M32.1 0h17l-4.8 17.3z"></path>
								<path d="M15.5 17.1 11.5 0h16.1z"></path>
								<path d="m9.5.9 4.2 17.8H.1z"></path>
								<path d="m46.3 18.7 4.6-16.5 8.8 16.5z"></path>
								<path d="m43.9 20.7-14 39-13.9-39z"></path>
								<path d="M13.9 20.7 26.1 55 0 20.7z"></path>
								<path d="M45.9 20.7h13.8l-26 34.2z"></path>
								<path d="M17.3 18.7 29.9.9l12.6 17.8z"></path>
							</svg>
							{$t("common.Demo")}
							{library.title}
						</a>

						<a
							class="button-dark mb-8 p-4"
							href="https://dbs-web.s3.us-west-2.amazonaws.com/downloads/treasureslibraries/{library.iso.toUpperCase()}.zip">
							<IconArrowRight class="inline-flex h-5 w-5" />
							{$t("common.Download")}
							{library.title}
						</a>
						{@html library.description}
					</div>
					<div class="mb-4 shrink-0 sm:mb-0 sm:mr-4">
						<img
							alt="{library.title}"
							src="https://images.bible.cloud/treasures/box/{library.id}.jpg" />
					</div>
				</div>
			</div>
		</div>

		<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
			<div class="mx-auto max-w-4xl">
				<dl
					class="rounded-lg bg-white shadow-lg dark:bg-stone-800 sm:grid sm:grid-cols-3">
					<div
						class="flex flex-col border-b border-stone-100 p-6 text-center dark:border-stone-900 sm:border-0 sm:border-r">
						<dt
							class="order-2 mt-2 text-lg leading-6 text-stone-500">
							{$t("common.Resources")}
						</dt>
						<dd class="order-1 text-5xl font-extrabold text-blue-600">
							{library.resources.length}
						</dd>
					</div>
					<div
						class="flex flex-col border-t border-b border-stone-100 p-6 text-center dark:border-stone-900 sm:border-0 sm:border-l sm:border-r">
						<dt
							class="order-2 mt-2 text-lg leading-6 text-stone-500">
							{$t("common.Audio Lessons")}
						</dt>
						<dd class="order-1 text-5xl font-extrabold text-blue-600">
							{library.resources.filter(function (element) {
								return element.type === "audio"
							}).length}
						</dd>
					</div>
					<div
						class="flex flex-col border-t border-stone-100 p-6 text-center dark:border-stone-900 sm:border-0 sm:border-l">
						<dt
							class="order-2 mt-2 text-lg leading-6 text-stone-500">
							{$t("common.Scripture Films")}
						</dt>
						<dd class="order-1 text-5xl font-extrabold text-blue-600">
							{library.resources.filter(function (element) {
								return element.type === "video"
							}).length}
						</dd>
					</div>
				</dl>
			</div>
		</div>