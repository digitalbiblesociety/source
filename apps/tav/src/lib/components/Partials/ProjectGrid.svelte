<script>
    import { t } from "$lib/Translations"
	import IconBookmark from "~icons/heroicons-outline/bookmark"
	import IconLibrary from "~icons/heroicons-outline/library"
	import IconVolumeUp from "~icons/heroicons-outline/volume-up"
	import IconBookOpen from "~icons/heroicons-outline/book-open"
	import IconSearch from "~icons/heroicons-outline/search"
	import IconHeart from "~icons/heroicons-outline/heart"
	
	$: projects = [
		{
			title: $t("common.Bibles"),
			description: $t("about.work_bibles_description"),
			action: $t("about.work_bibles_action"),
			picture: "/img/about/projects_biblecloud_thumb.webp",
			url: "/bibles",
			class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:from-sky-700 dark:to-blue-800",
			icon: IconBookmark,
		},
		{
			title: $t("common.Libraries"),
			description: $t("about.work_libraries_description"),
			action: $t("about.work_libraries_action"),
			picture: "/img/about/projects_libraries_thumb.webp",
			url: "/libraries/treasures",
			class: "bg-gradient-to-r from-teal-400 to-teal-800  dark:from-teal-700 dark:to-teal-800",
			icon: IconLibrary,
		},
		{
			title: $t("common.Audio Bibles"),
			description: $t("about.work_audio_description"),
			action: $t("about.work_audio_action"),
			picture: "/img/about/projects_players_thumb.webp",
			url: "/bibles/audio",
			class: "bg-gradient-to-r from-cyan-400 to-cyan-700 dark:from-cyan-600 dark:to-cyan-800",
			icon: IconVolumeUp,
		},
		{
			title: $t("common.Print on Demand"),
			description: $t("about.work_print_description"),
			action: $t("about.work_print_action"),
			picture: "/img/about/projects_print_thumb.webp",
			url: "/bibles/print",
			class: "bg-gradient-to-r from-blue-400 to-slate-800 dark:from-slate-500 dark:to-slate-800",
			icon: IconBookOpen,
		},
		{
			title: $t("common.Bible") + " " + $t("common.Research"),
			description: $t("about.work_research_description"),
			action: $t("about.work_research_action"),
			picture: "/img/about/projects_fab_thumb.webp",
			url: "/about/work/research",
			class: "bg-gradient-to-r from-teal-400 to-teal-700  dark:from-stone-600 dark:to-teal-800",
			icon: IconSearch,
		},
		{
			title: $t("about.work_proposals_action1"),
			description: $t("about.work_proposals_description"),
			action: $t("about.work_proposals_action"),
			picture: "/img/about/projects_proposals_thumb.webp",
			url: "/about/projects/proposals",
			class: "bg-gradient-to-r from-indigo-300 to-indigo-600  dark:from-stone-600 dark:to-indigo-800",
			icon: IconHeart,
		},
	]
	
</script>

<section
class="relative z-10 mx-auto -mt-32 max-w-6xl pb-12 sm:px-8 lg:px-12"
aria-labelledby="contact-heading">
<div
    class="grid grid-flow-row auto-rows-max grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
    {#each projects as project}
        <a href="{project.url}" class="hover:text-sky-670 text-blue-500 dark:text-stone-200 dark:hover:text-white">
            <div class="flex flex-col rounded-xl rounded-bl-xl rounded-br-xl border border-stone-400 bg-stone-300 dark:border-stone-500 dark:bg-stone-500 dark:hover:border-stone-300">
                <div class="relative flex items-center rounded-lg px-4  pt-1 pb-1 md:px-8 lg:rounded-none lg:rounded-tl-xl lg:rounded-tr-xl {project.class}">
                    <div class="dark:text-invert absolute top-3 right-4 flex -translate-y-1/2 transform rounded-lg border border-stone-500 bg-stone-600 p-1.5 dark:bg-stone-800 sm:p-2.5 md:rounded-xl">
                        <span>
                            <svelte:component this="{project.icon}" class="inline-block h-4 w-4 text-white sm:h-6 sm:w-6" />
                        </span>
                    </div>

                    <div class=" mt-1 w-1/3 md:-mt-8">
                        <img
                            src="{project.picture}"
                            alt="{project.title}"
                            class="mx-auto md:drop-shadow-lg w-[100px] h-[80px] md:w-[125px] md:h-[95px]" />
                    </div>

                    <div class="w-2/3 p-1 pl-4">
                        <h2
                            class="text-white dark:text-stone-200 md:text-lg">
                            {project.title}
                        </h2>
                        <p
                            class="mt-2 mb-1 text-xs xl:text-sm leading-tight text-white dark:text-stone-200 ">
                            {@html project.description}
                        </p>
                    </div>
                </div>

                <div>
                    <div class="hidden rounded-bl-xl rounded-br-xl bg-stone-100 p-3 text-right hover:bg-white dark:bg-stone-500 md:px-8 lg:block">
                        {project.action}
                        <span aria-hidden="true">&rarr;</span>
                    </div>
                </div>
            </div>
        </a>
    {/each}
</div>
</section>
