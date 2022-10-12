<script>
	import { t } from "$lib/Translations"
	/* lib/Translations must be uppercase for some reason? */
	import News from "$lib/components/Partials/News.svelte"
	import MailingList from "$lib/components/Partials/MailingList.svelte"
    import ProjectGrid from "$lib/components/Partials/ProjectGrid.svelte"
</script>
	
	<svelte:head>
		<title>{$t("common.org_title")} | {$t("common.Home")}</title>
		<meta name="description" content="{$t('common.index_intro_text')}" />
	</svelte:head>
	
	<div class="mt-2 mb-32 flex flex-col items-center sm:flex-row">
		<div class="mx-auto w-2/5 sm:w-1/3 md:hidden">
			<img src="/img/logo/dbs_logo_title.svg" class="w-48 h-32 mx-auto max-w-xs" alt="Digital Bible Society" />
		</div>
	
		<div class="relative w-full pt-6">
			<div class="relative mx-auto max-w-4xl px-4 pt-4 pb-8 sm:px-6 lg:px-8">
				<h1 class="text-center text-2xl font-bold text-gray-800 md:text-3xl  ">
					<span class="dark:text-gray-200">{$t("common.Making Scripture")}</span>
					<span class="bg-clip-text pb-3 text-blue-600 dark:text-white sm:pb-5">
						{$t("common.Accessible")}
					</span>
				</h1>
				<p class="my-4 text-sm text-gray-700 dark:text-gray-300 sm:px-2 md:text-center md:md:leading-5 lg:tracking-tight">
					<span class="text-bold text-blue-600 dark:text-white">
						{$t("common.org_title")}
					</span>
					{$t("common.index_caption")}
				</p>
			</div>
		</div>
	</div>

	<ProjectGrid />

	<!--
	<div class="lg:overflow-hidden lg:pb-14">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="lg:grid lg:grid-cols-2 lg:gap-8">
				<div
					class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
					<div class="lg:py-24">
						<h1
							class="mt-4 text-center text-4xl font-extrabold text-gray-800 dark:text-gray-100 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
							<div>{$t("common.Making Scripture")}</div>
							<div class="pb-3 text-blue-500 dark:text-blue-400 sm:pb-5">
								{$t("common.Accessible")}
							</div>
						</h1>
	
						<p
							class="text-gray-500 dark:text-gray-200 sm:text-xl lg:text-lg xl:text-xl">
							{$t("common.index_intro_text")}
						</p>
	
						<div class="mt-10 mb-8 flex flex-row justify-around sm:mt-12">
							<a class="button mx-4 w-1/2 pt-3 text-center" href="/bibles">
								{$t("common.Bibles")}
							</a>
							<a
								class="button-dark mx-4 w-1/2 text-center"
								href="/about/work">
								{$t("common.Projects")}
							</a>
						</div>
					</div>
				</div>
				<div class="mt-12 -mb-16 hidden lg:relative lg:m-0 lg:block">
					<div
						class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
						<img
							class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
							src="/img/characters/reading.svg"
							alt="Reading" />
					</div>
				</div>
			</div>
		</div>
	</div>
	-->
	<div class="max-w-4xl px-8 md:px-12 mx-auto mb-12">
		<News />
	</div>
	
	
	<div class="max-w-4xl px-8 md:px-12 mx-auto">
		<MailingList />
	</div>