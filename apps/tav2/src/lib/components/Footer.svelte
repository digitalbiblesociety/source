<script xmlns="http://www.w3.org/1999/html">
import { _ as t } from 'svelte-i18n'
import Logo from "$lib/components/Partials/Logo.svelte"

$: link_groups = [
	{
		type: "project",
		name: $t("common.Projects"),
		links: [
			{
				title: $t("common.Downloads"),
				href: `/bibles`,
				type: `_self`,
				rel: `none`,
			},
			{
				title: $t("common.Libraries"),
				href: `/libraries`,
			},
			{
				title: $t("common.Audio Bibles"),
				href: `/about/work/audio-bibles`,
			},
			{
				title: $t("common.Print Bibles"),
				href: `/about/work/print`,
			},
		],
	},
	{
		type: "about",
		name: $t("common.About"),
		links: [
			{
				title: $t("common.Ministry"),
				href: `/about/overview`,
			},
			{
				title: $t("common.Projects"),
				href: `/about/projects`,
			},
			{
				title: $t("common.Stories"),
				href: `/about/projects/stories`,
			},
			{
				title: $t("common.Contact"),
				href: `/about/contact`,
			},
		],
	},
	{
		type: "links",
		name: $t("common.Links"),
		links: [
			{
				title: "find.bible",
				external: true,
				href: "https://find.bible",
			},
			{
				title: "inscript.org",
				external: true,
				href: "https://inscript.org",
			},
			{
				title: "archive.org",
				external: true,
				href: "https://archive.org/details/@dbs",
			},
			{
				title: "github.org",
				external: true,
				href: "https://github.com",
			},
		],
	},
]
</script>

<footer class="">
	<div
		class="border-t-none mx-auto max-w-7xl border border-gray-300 bg-gray-50
			pt-5 pb-3 dark:border-gray-500 dark:bg-gray-800 xl:rounded-b-2xl">
		<section class="block justify-around sm:flex">
			<div class="flex-col items-center justify-around px-8 sm:w-6/12">

				<!-- Logo -->
				<div class="relative z-10 flex px-2 lg:px-0 mx-auto">
					<div class="flex flex-shrink-0 w-full items-center">
						<a href="/"  class="inline-flex shrink-0 justify-center items-center mx-auto py-3 text-gray-700 dark:text-gray-200 lg:px-3">
							<img width="65.75px" height="32px" src="/img/logo/logo.svg" alt="DBS Logo" />
							<span class="bold hidden md:block whitespace-nowrap pl-1.5 text-center text-sm uppercase sm:pl-3 lg:text-xl">
							{$t("common.org_title")}
			</span>
						</a>
					</div>
				</div>


				<div
					class=" mt-2 flex justify-center text-gray-700 dark:text-gray-200 dark:hover:text-gray-300">
					<a
						href="https://vimeo.com/digitalbiblesociety"
						class="hover:text-blue-500"
						aria-label="Vimeo"
						target="_blank"
						rel="noopener noreferrer">
						<svg
							class="mr-2 h-7 w-7"
							viewBox="0 0 434 434"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M416 52.3c-10.5-11.4-25.7-17.4-45.2-18-55-1.7-93.9 27.5-115.6 87a8.8 8.8 0 0 0 10.6 11.6 69.6 69.6 0 0 1 18.4-2.6c8 0 18.7 1.5 24 8.5 4.1 5.4 4.7 13.5 1.7 24-2.5 9-15.5 32.8-31.5 58-19.6 30.7-30.4 44.4-33.5 44.4-10.3 0-47.5-165.2-48.6-168.8-10.7-37.8-16-56.8-50.8-56.8-26.5 0-85.5 48.3-134 90.5L4 136.5c-4.6 4-5.4 11-1.6 15.8l9 11.7c3.9 4.9 10.8 6 15.9 2.3l.5-.3c15.7-11.2 30.5-21.7 41.7-22.3 12.1-.6 22.7 18.4 35.3 63.6 24 87.8 60.3 192.4 97.7 192.4 39 0 85.6-33 145.8-111.4 54.5-70.9 83.6-127.1 85.5-168 1.4-31-4.6-53.8-17.8-68z">
							</path>
						</svg>
					</a>
					<a
						href="https://www.facebook.com/digitalbiblesociety/"
						class="mx-0.5 hover:text-blue-600"
						aria-label="Facebook"
						target="_blank"
						rel="noopener noreferrer">
						<svg
							class="mr-2 h-7 w-7"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 310 310"
							fill="currentColor">
							<path
								d="M81.7 165.1h34V305a5 5 0 0 0 5 5h57.6a5 5 0 0 0 5-5V165.8h39a5 5 0 0 0 5-4.5l6-51.5a5 5 0 0 0-5-5.5h-45V72c0-9.8 5.2-14.7 15.6-14.7h29.4a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5h-42.4c-7 0-31.5 1.4-50.8 19.2a53.3 53.3 0 0 0-17.7 47.3v37.8H81.7a5 5 0 0 0-5 5V160a5 5 0 0 0 5 5z">
							</path>
						</svg>
					</a>
					<a
						href="https://twitter.com/dbsorg/"
						class="mx-0.5 hover:text-blue-600"
						aria-label="Twitter"
						target="_blank"
						rel="noopener noreferrer">
						<svg
							class="mr-2 h-7 w-7"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 410.2 410.2"
							fill="currentColor">
							<path
								d="M403.6 74.2c-9 4-18.5 7.2-28.2 9.5a88.2 88.2 0 0 0 23.2-37c1.3-4.1-3-7.6-6.7-5.4a160.8 160.8 0 0 1-46 18.2c-2.7 0-5.4-1-7.5-3a88.4 88.4 0 0 0-86.6-17.7 85.7 85.7 0 0 0-57.7 61.7 94.3 94.3 0 0 0-2.1 32.6 3.3 3.3 0 0 1-3.5 3.6A231.9 231.9 0 0 1 29 51.5c-2-2.5-6-2.2-7.6.6A88.4 88.4 0 0 0 36 159.6c-7-1.7-13.8-4.3-20.2-7.8-3-1.7-6.8.5-6.8 4a88.5 88.5 0 0 0 51.6 81.6 79.2 79.2 0 0 1-16.8-1.4 4.6 4.6 0 0 0-5.3 6 88.6 88.6 0 0 0 70 60.2 163.2 163.2 0 0 1-91.3 27.7H6.8c-3.1 0-5.8 2-6.6 5.1a7 7 0 0 0 3.4 7.8c37 21.5 79.1 32.9 122 32.9a246 246 0 0 0 104.1-22.1c29-13.5 54.7-32.7 76.3-57.2a250.5 250.5 0 0 0 62.6-163.8v-1.3c0-4.6 2-8.8 5.6-11.7 13.6-11 25.4-24 35.2-38.6 2.5-3.9-1.5-8.7-5.8-6.8z">
							</path>
						</svg>
					</a>
					<a
						href="https://github.com/digitalbiblesociety"
						class="mx-0.5 hover:text-blue-600"
						aria-label="Github"
						target="_blank"
						rel="noopener noreferrer">
						<svg
							class="mr-2 h-7 w-7"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor">
							<path
								d="M12 .5A12 12 0 0 0 0 12.3c0 5.2 3.4 9.6 8.2 11.2.6 0 .8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6a3.6 3.6 0 0 0-1.4-1.7c-1-.7.1-.7.1-.7C5 16.9 5.6 18 5.6 18c1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.8 0-1.3.5-2.4 1.3-3.2-.2-.3-.6-1.5 0-3.1 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.1a4 4 0 0 1 1.3 3.2c0 4.5-2.8 5.5-5.5 5.8.5.3.9 1 .9 2.2v3.2c0 .3.1.7.8.6 4.8-1.6 8.2-6 8.2-11.2A12 12 0 0 0 12 .5z">
							</path>
						</svg>
					</a>
				</div>

				<div
					class="my-3 flex justify-center space-x-6 text-2xl text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-300">
					<a
						href="/about/donate#endorsement"
						class="opacity-80 hover:underline hover:opacity-100">
						<img
							src="/img/logo/end-ecfa.svg"
							class="filter dark:invert dark:grayscale"
							width="56px"
							height="56px"
							alt="ECFA Financial Accountability" />
					</a>

					<a
						href="/about/donate#endorsement"
						class="opacity-80 hover:underline hover:opacity-100">
						<img
							src="/img/logo/end-guidestar.svg"
							class="filter dark:grayscale"
							width="56px"
							height="56px"
							alt="Guidestar Platinum" />
					</a>

					<a
						href="/about/donate#endorsement"
						class="opacity-80 dark:opacity-100 hover:underline hover:opacity-100">
						<img
							src="/img/logo/end-charity-navigator.svg"
							class="filter dark:invert dark:grayscale"
							width="56px"
							height="56px"
							alt="Charity Navigator" />
					</a>
				</div>
			</div>

			<div
				class="mt-10 flex items-center justify-around px-6 text-xs sm:mt-0 sm:w-6/12 xl:text-sm">
				{#each link_groups as link_group}
					<div class="pb-2">
						<h3
							class="mb-2 text-center font-semibold uppercase tracking-wider
								text-gray-600 underline dark:text-gray-200">
							{link_group.name}
						</h3>
						<ul class="mt-2">
							{#each link_group.links as link}
								<li
									class="mb-1 text-gray-600 hover:text-primary-600 dark:text-gray-200 dark:hover:text-gray-200">
									<a
										href="{link.href}"
										target="{link.external ? '_blank' : ''}"
										rel="{link.external ? 'noopener noreferrer' : ''}"
										class="block hover:underline hover:opacity-100">
										{#if link.external}
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="float-left mt-1 mr-1 h-3 w-3 opacity-70">
												<path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
												<path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
											</svg>
										{:else}
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="float-left mt-1 mr-1 h-3 w-3 opacity-60">
												<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
											</svg>
										{/if}
										{link.title}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>
	</div>

	<div
		class="mx-auto flex w-10/12  max-w-7xl p-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
		<span class="m-auto w-full text-center md:w-7/12 md:text-right">
			<a
				href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
				target="_blank"
				rel="noopener noreferrer"
				class="ml-16 inline-flex items-center text-right  hover:text-primary-600  hover:underline hover:dark:text-gray-100">
				{$t("common.org_title")}
				<img
					class="mx-2 h-5 w-5"
					alt="Creative Commons"
					src="/img/icons/creative-commons.svg" />
				{new Date().getFullYear()}
			</a>
		</span>
		<span class="mr-2 hidden text-right md:block md:w-5/12 ">
			<a
				href="/about/overview/privacy"
				class="ml-4 hover:text-primary-500 hover:underline hover:dark:text-gray-100">
				{$t("common.Privacy")}
			</a>
		</span>
	</div>
</footer>
