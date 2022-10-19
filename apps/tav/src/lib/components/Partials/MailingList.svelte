<script>
import { onMount } from "svelte"
import { t } from "$lib/Translations"
import Inbox from "~icons/heroicons-outline/inbox-in"

let listMailing = true;
let listPrayer;
</script>

<div class="relative rounded-xl border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 max-w-5xl mx-auto">

	<div class="dark:text-invert absolute top-3 right-4 flex -translate-y-1/2 transform">
		<span class="rounded-lg border border-gray-500 bg-gray-600 p-1.5 dark:bg-gray-800 sm:p-2.5 md:rounded-xl">
			<Inbox class="inline-block h-4 w-4 text-white sm:h-6 sm:w-6" />
		</span>
	</div>

	<div class="px-auto py-5 sm:p-6">

	  <div class="mt-2 max-w-xl mx-auto text-sm text-gray-500">

		<h2 class="font-semibold uppercase text-center tracking-wider text-blue-600 dark:text-gray-200">
		{$t("common.contact_subtitle")}
	</h2>
	<h2
		class="text-3xl sm:text-2xl text-center font-extrabold text-gray-900 dark:text-gray-200">
		{$t("common.contact_title")}
	</h2>
	<p
		class="mt-3 max-w-3xl text-gray-500 dark:text-gray-300">
		{$t("common.contact_description")}
	</p>

	  </div>
	  <form class="mt-5 flex items-center justify-center" action="https://formspree.io/f/xleoznoq" method="POST">
		<div class="w-full max-w-xs">
		  <label for="email" class="sr-only">Email</label>
		  <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="{$t('common.contact_placeholder')}">
		</div>
		<input type="hidden" name="community_news" value={listMailing} />
		<input type="hidden" name="prayer_request" value={listPrayer} />
		<button type="submit" class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{$t("common.contact_submit")}</button>
	  </form>

	  <div class="flex flex-row items-center justify-center sm:justify-left mx-auto">

		<div class="flex pt-4 mx-4 items-center">
			<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
			<button type="button" 
			on:click={() => listMailing = !listMailing}
			class:bg-indigo-600={listMailing}
			class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="annual-billing-label">
			  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
			  <span aria-hidden="true" 
			  class:translate-x-5={listMailing}
			  class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
			</button>
			<span class="ml-3" id="annual-billing-label">
			  <span class="text-sm font-medium text-gray-900">Quarterly Newsletter</span>
			  <span class="text-sm text-gray-500"></span>
			</span>
		  </div>

		<div class="flex pt-4 mx-4 items-center">
			<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
			<button type="button" 
			class:bg-indigo-600={listPrayer}
			on:click={() => listPrayer = !listPrayer}
			class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="true" aria-labelledby="annual-billing-label">
			  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
			  <span aria-hidden="true" 
			  class:translate-x-5={listPrayer}
			  class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
			</button>
			<span class="ml-3" id="annual-billing-label">
			  <span class="text-sm font-medium text-gray-900">Weekly Prayer Alerts</span>
			  <span class="text-sm text-gray-500"></span>
			</span>
		  </div>

	  </div>

	<p class="mt-3 text-center text-sm text-gray-500 dark:text-gray-300">
		{$t("common.contact_privacy_policy_call")}
		<a href="/about/privacy" class="underline">{$t("common.privacy_title")}</a>
	</p>

	</div>
  </div>
