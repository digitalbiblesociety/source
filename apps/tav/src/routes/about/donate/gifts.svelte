<script>
import { t } from "$lib/translations/index.js"
import Endorsements from "./endorsements.svelte"

import Banner from "$lib/components/Banner.svelte"

import IconLibrary from "~icons/heroicons-outline/library"
import IconMail from "~icons/heroicons-outline/mail"
import IconChartLine from "~icons/heroicons-outline/presentation-chart-line"
</script>

<Banner 
	title={$t("about.donate_options")}
	subtitle=""
	caption={$t("about.donate_options_1")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: `/about/donate`, title: $t('common.Donate') },
		{ link: '#', title: $t('common.Gifts') },
	]}
	subnav={[
		{title:$t("common.Donate") + ' ' + $t("common.Online"),url:'/about/donate/'},
		{title:$t("about.donate_other"),url:'/about/donate/gifts',selected:true},
		{title:$t("common.Volunteer"),url:'/about/donate/volunteer'},
		{title:$t("common.Contact"),url:'/about/contact'}
	]} />

<div class="lg:overflow-hidden max-w-3xl mx-auto">

		<div id="other" class="xs:grid  mt-8 gap-4 sm:grid-cols-2 lg:gap-6">
			<div
				class="relative rounded-lg border bg-gray-50 p-4 mb-6 leading-tight drop-shadow dark:border-gray-400 dark:bg-black lg:p-6">
				<h2 class="mb-6 text-xl font-bold">{$t("about.donate_wire_1")}:</h2>
				<div class="absolute right-2 -top-2 text-gray-50 bg-primary-400 dark:bg-primary-700 rounded-md p-1.5 border border-gray-400 ">
					<IconLibrary class="h-8 w-8" />
				</div>
				<p>
					{$t("about.donate_wire_2")}
					<a
						class="font-semibold text-primary-500 hover:underline"
						href="mailto:donate@dbs.org"
						aria-label="send an email to donate@dbs.org">
						donate@dbs.org
					</a>
					{$t("about.donate_details")}
				</p>
			</div>

			<div
				class="relative rounded-lg border bg-gray-50 p-4 mb-6 leading-tight drop-shadow dark:border-gray-400 dark:bg-black lg:p-6">
				<h2 class="mb-6 text-xl font-bold">{$t("about.donate_mail")}:</h2>
				<div class="absolute right-2 -top-2 text-gray-50 bg-primary-400 dark:bg-primary-700 rounded-md p-1.5 border border-gray-400 ">
					<IconMail class="h-8 w-8" />
				</div>
				<p>{$t("about.donate_mail_1")}</p>
				<div class="m-4">
					<p class="font-semibold text-primary-500">Digital Bible Society</p>
					<p>PO Box 2881</p>
					<p>Conroe, Texas 77303 USA</p>
				</div>
				<p>{$t("about.donate_mail_2")}</p>
			</div>

			<div
				class="relative rounded-lg border bg-gray-50 p-4 mb-6 leading-tight drop-shadow dark:border-gray-400 dark:bg-gray-800 lg:p-6">
				<h2 class="mb-6 text-xl font-bold">{$t("about.donate_stock")}:</h2>
				<div class="absolute right-2 -top-2 text-gray-50 bg-primary-400 dark:bg-primary-700 rounded-md p-1.5 border border-gray-400 ">
					<IconChartLine class="h-8 w-8" />
				</div>

				<p>
					{$t("about.donate_stock_1")}
					<a
						class="font-semibold text-primary-500 hover:underline"
						href="mailto:donate@dbs.org"
						aria-label="send an email to donate@dbs.org">
						donate@dbs.org
					</a>
					{$t("about.donate_details")}
				</p>
			</div>

			<div
				class="relative rounded-lg border bg-gray-50 p-4 mb-4 leading-tight drop-shadow dark:border-gray-400 dark:bg-black lg:p-6">
				<h2 class="mb-6 text-xl font-bold">{$t("about.donate_crypto")}:</h2>

				<div class="absolute right-2 -top-2 text-gray-50 bg-primary-400 dark:bg-primary-700 rounded-md p-1.5 border border-gray-400 ">
					<svg
						class="h-8 w-8"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 60 60"
						fill="currentColor">
						<path
							d="M30 0a30 30 0 1 0 0 60 30 30 0 0 0 0-60Zm0 55a25 25 0 1 1 0-50 25 25 0 0 1 0 50Zm11.3-25.8c1-1.4 1.5-3 1.5-5 0-4.3-3.3-8-7.4-8h-1.2v-6.1c0-.4-.3-.7-.6-.7h-2.1c-.4 0-.7.3-.7.7v6.2h-3.4V10c0-.4-.3-.7-.7-.7h-2c-.4 0-.7.3-.7.7v6.2h-7.1c-.4 0-.6.2-.6.6V19c0 .3.2.6.5.6 2.5.2 3.7 1.8 3.7 3.8v13.3c0 1.8-.9 3.2-2.9 3.4-.3 0-.5.2-.6.5l-.4 2.2c0 .4.2.7.6.7H24V50c0 .3.3.6.6.6h2.1c.4 0 .7-.3.7-.6v-6.3h3.4V50c0 .3.3.6.7.6h2c.4 0 .7-.3.7-.6v-6.3h3c4 0 7.3-3.5 7.3-7.9a8 8 0 0 0-3.2-6.5Zm-14-7.8h5.3a3.5 3.5 0 1 1 0 7h-5.2v-7Zm7 17.3h-7v-7h7a3.5 3.5 0 1 1 0 7Z">
						</path>
					</svg>
				</div>

				<p>
					{$t("about.donate_crypto_1")}
					<a
						class="font-semibold text-primary-500 hover:underline"
						href="mailto:donate@dbs.org"
						aria-label="send an email to donate@dbs.org">
						donate@dbs.org
					</a>
					{$t("about.donate_details")}
				</p>
			</div>
		</div>
</div>

<Endorsements />
