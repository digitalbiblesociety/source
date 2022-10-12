<script>
import { onMount } from "svelte"
import { t } from "$lib/Translations"
import Inbox from "~icons/heroicons-outline/inbox-in"
</script>

<div class="relative rounded-xl border dark:border-gray-700 bg-gray-100 dark:bg-gray-800">

	<div class="dark:text-invert absolute top-3 right-4 flex -translate-y-1/2 transform">
		<span class="rounded-lg border border-gray-500 bg-gray-600 p-1.5 dark:bg-gray-800 sm:p-2.5 md:rounded-xl">
			<Inbox class="inline-block h-4 w-4 text-white sm:h-6 sm:w-6" />
		</span>
	</div>

	<div class="px-4 py-5 sm:p-6">

	  <div class="mt-2 max-w-xl text-sm text-gray-500">

		<h2 class="font-semibold uppercase tracking-wider text-blue-600 dark:text-gray-200">
		{$t("common.contact_subtitle")}
	</h2>
	<h2
		class="text-3xl sm:text-2xl font-extrabold text-gray-900 dark:text-gray-200">
		{$t("common.contact_title")}
	</h2>
	<p
		class="mt-3 max-w-3xl text-gray-500 dark:text-gray-300">
		{$t("common.contact_description")}
	</p>

	  </div>
	  <form class="mt-5 sm:flex sm:items-center" action="https://formspree.io/f/xleoznoq" method="POST">
		<div class="w-full sm:max-w-xs">
		  <label for="email" class="sr-only">Email</label>
		  <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="{$t('common.contact_placeholder')}">
		</div>
		<button type="submit" class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{$t("common.contact_submit")}</button>
	  </form>

	  <p class="mt-3 text-sm text-gray-500 dark:text-gray-300">
		{$t("common.contact_privacy_policy_call")}
		<a href="/about/privacy" class="underline">
			{$t("common.privacy_title")}
		</a>
		</p>

	</div>
  </div>
