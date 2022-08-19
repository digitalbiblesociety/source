<script>
import { Datatable } from "@dbs/svelte-datatables"
import Breadcrumbs from "$lib/Breadcrumbs.svelte"
import { t } from "$lib/translations"
import IconExternalLink from "~icons/heroicons-outline/arrow-right"

/** @type {import('./$types').PageData} */
export let data;
$: ({ organization } = data);

let rows
</script>

<svelte:head>
	<title>{organization.name} | {$t("common.org_title")}</title>
</svelte:head>

<Breadcrumbs
	breadcrumbs="{[
		{ link: '/${locale}/wiki/organizations', title: $t('common.Wiki') },
		{ link: '/${locale}/wiki/organizations', title: $t('common.Organizations') },
		{ link: '#', title: organization.name },
	]}" />

<div class="grid grid-cols-4">
	<div class="col-span-4 pt-20 lg:col-span-1">
		<div class="mx-auto max-w-3xl">
			<div class="mx-auto w-3/4 pb-8">{@html organization.logo}</div>
			<div class="border-t border-gray-200 px-4 py-5 sm:p-0">
				<dl class="sm:divide-y sm:divide-gray-200">
					<div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Address</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{organization.address}
						</dd>
					</div>
					<div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Phone</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{organization.phone}
						</dd>
					</div>
					<div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Email address</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{organization.email}
						</dd>
					</div>
					<div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">
							links
							<IconExternalLink />
						</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							<div class="-my-5 divide-y divide-gray-200">
								{#if organization.url_website}
									<a
										class="block py-2 pl-4 hover:bg-slate-200"
										href="{organization.url_website}">
										Site
									</a>
								{/if}
								{#if organization.url_donate}
									<a
										class="block py-2 pl-4 hover:bg-slate-200"
										href="{organization.url_donate}">
										Donate
									</a>
								{/if}
								{#if organization.url_facebook}
									<a
										class="block py-2 pl-4 hover:bg-slate-200"
										href="{organization.url_facebook}">
										Facebook
									</a>
								{/if}
								{#if organization.url_twitter}
									<a
										class="block py-2 pl-4 hover:bg-slate-200"
										href="{organization.url_twitter}">
										Twitter
									</a>
								{/if}
							</div>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>

	<div class="col-span-4 lg:col-span-3">
		{#if organization.bibles}
			<Datatable
				classList="relative"
				data="{organization.bibles}"
				bind:dataRows="{rows}">
				<thead>
					<th data-name="id" data-key="id" class="hidden">id</th>
					<th data-name="file_set" data-key="fs" class="hidden">file_set</th>
					<th
						data-name="language"
						data-key="(row) => row.language.name + ' ' + row.iso"
						class="sortable">
						{$t("common.Language")}
					</th>
					<th
						data-name="title"
						data-key="(row) => row.tt + ' ' + row.tv"
						class="sortable">
						title
					</th>
					<th
						data-name="date"
						data-key="dt"
						class="sortable hidden md:table-cell">
						date
					</th>
				</thead>
				<tbody>
					{#if rows}
						{#each $rows as row}
							<tr>
								<td class="hidden whitespace-nowrap px-6 py-4 text-gray-900">
									{row.id}
								</td>
								<td class="whitespace-nowrap px-6 py-4 text-gray-900">
									<a href="/languages/{row.id}">
										<div class="text-sm text-gray-900 dark:text-gray-300">
											{row.language ? row.language.name : ""}
										</div>
										<div class="text-xs italic text-gray-500">{row.iso}</div>
									</a>
								</td>
								<td class="px-6 py-4">
									<a href="/bibles/{row.id}">
										<div
											class="max-w-sm overflow-hidden text-ellipsis text-sm text-gray-900 dark:text-gray-300">
											{row.title}
										</div>
										<div
											class="max-w-sm overflow-hidden text-ellipsis text-sm text-gray-500">
											{row.title_vernacular ?? ""}
										</div>
									</a>
								</td>
								<td
									class="hidden whitespace-nowrap px-6 py-4 text-gray-900 md:table-cell">
									{row.date}
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</Datatable>
		{/if}
	</div>
</div>
