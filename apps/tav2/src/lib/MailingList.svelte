<script>
import { _ as t } from 'svelte-i18n'
</script>

<div class="relative rounded-xl border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-[url('/img/bg-linen.png')]">

	<div class="dark:text-invert absolute top-3 right-4 flex -translate-y-1/2 transform">
		<span class="rounded-lg border border-gray-500 bg-gray-600 p-1.5 dark:bg-gray-800 sm:p-2.5 md:rounded-xl">

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 text-white sm:h-6 sm:w-6">
				<path d="M10 2a.75.75 0 01.75.75v5.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0L6.2 7.26a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z" />
				<path d="M5.273 4.5a1.25 1.25 0 00-1.205.918l-1.523 5.52c-.006.02-.01.041-.015.062H6a1 1 0 01.894.553l.448.894a1 1 0 00.894.553h3.438a1 1 0 00.86-.49l.606-1.02A1 1 0 0114 11h3.47a1.318 1.318 0 00-.015-.062l-1.523-5.52a1.25 1.25 0 00-1.205-.918h-.977a.75.75 0 010-1.5h.977a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h.977a.75.75 0 010 1.5h-.977z" />
			  </svg>
			  
		</span>
	</div>

	<div class="px-4 py-5 sm:p-6">

	  <div class="mt-2 max-w-xl text-sm text-gray-500">

		<h2 class="text-base font-semibold uppercase tracking-wider text-blue-600 dark:text-gray-200">
		{$t("common.contact_subtitle")}
	</h2>
	<h2
		class="text-3xl sm:text-2xl font-extrabold text-gray-900 dark:text-gray-200">
		{$t("common.contact_title")}
	</h2>
	<p
		class="mt-3 max-w-3xl text-base text-gray-500 dark:text-gray-300">
		{$t("common.contact_description")}
	</p>

	  </div>
	  <form class="mt-5 sm:flex sm:items-center" action="https://formspree.io/f/xleoznoq" method="POST">
		<div class="w-full sm:max-w-xs">
		  <label for="email" class="sr-only">Email</label>
		  <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="{$t('common.contact_placeholder')}">
		</div>
		<button type="submit" class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{$t("common.contact_submit")}</button>
	  </form>

	  <p class="mt-3 text-sm text-gray-500 dark:text-gray-300">
		{$t("common.contact_privacy_policy_call")}
		<a href="/about/privacy" class="font-medium underline">
			{$t("common.privacy_title")}
		</a>
		</p>

	</div>
  </div>
