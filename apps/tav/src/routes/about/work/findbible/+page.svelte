<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"

let link_counts = [
	{
		title: "Total Links",
		count: 38897,
		count_old: 36932,
		upshade: "green-600",
		downshade: "red-600",
	},
	{
		title: "Broken Links",
		count: 5150,
		count_old: 1000,
		upshade: "red-600",
		downshade: "green-600",
	},
	{
		title: "Bibles",
		count: 4983,
		count_old: 4900,
		upshade: "green-600",
		downshade: "red-600",
	},
	{
		title: "Bibles without Links",
		count: 663,
		count_old: 721,
		upshade: "red-600",
		downshade: "green-600",
	},
]

function percentage(count, count_old) {
	return Number(((count - count_old) / count_old) * 100).toPrecision(4)
}

// function
</script>

<Banner 
	title="State of the FAB"
	subtitle="March 2022"
	caption={percentage(link_counts[1].count, link_counts[0].count) * -1}%
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: `/about/work/`, title: $t('common.Our Work') },
		{ link: '#', title: $t('common.Bibles') },
	]} />

<div>
	<dl
		class="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-2 md:divide-y-0 md:divide-x">
		{#each link_counts as link_count}
			<div class="px-4 py-5 sm:p-6">
				<dt class="font-normal text-gray-900">{link_count.title}</dt>
				<dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
					<div
						class="text-stone-400 flex items-baseline text-2xl font-semibold">
						{Number(link_count.count).toLocaleString()}
						<span class="ml-2 text-sm text-gray-500">
							from {link_count.count_old}
						</span>
					</div>

					<div
						class="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm md:mt-2 lg:mt-0 {percentage(
							link_count.count,
							link_count.count_old
						) > 0
							? 'text-' + link_count.upshade
							: 'text-' + link_count.downshade}">

						<span class="sr-only">Increased by</span>
						{percentage(link_count.count, link_count.count_old)}%
					</div>
				</dd>
			</div>
		{/each}
	</dl>
</div>
