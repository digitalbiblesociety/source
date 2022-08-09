<script context="module">
///	import FallbackFetch from "$lib/fallback-fetch.js";
///	export async function load({ fetch }) {
///		return FallbackFetch(fetch, 'languages')
///	}
</script>

<script>
import Select from "svelte-select"
import { t, locale } from "$lib/i18n"
import Item from "./partials/LanguageItem.svelte"

//export let languages

const groupBy = (item) => item.group
const optionIdentifier = "id"
const getOptionLabel = (option) => option.name
const getSelectionLabel = (option) => option.name
</script>

<form
	class="space-y-8 divide-y divide-gray-200 px-4"
	method="POST"
	action="https://formspree.io/f/mzbojjeb">
	<div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
		<div>
			<div>
				<h3 class="text-lg font-medium leading-6 text-gray-900">
					Suggest a Missing Bible
				</h3>
				<p class="mt-1 max-w-2xl text-sm text-gray-500">
					If you have a large number of bibles or resources to suggest please
					share them with us via this <a
						href="https://images.bible.cloud/fab/docs/FAB_Suggest_Bibles.zip">
						spreadsheet
					</a>
					which you can email to
					<em>info@dbs.org</em>
					. This information will be displayed publicly, so please don't include
					potentially sensitive information.
				</p>
			</div>

			<div class="grid grid-cols-4 gap-4">
				<div class="col-span-4 md:col-span-2">
					<label
						for="title_vernacular"
						class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
						Vernacular Title
					</label>
					<input
						type="text"
						name="title_vernacular"
						id="title_vernacular"
						class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
					<p class="mt-2 text-xs text-gray-500">
						The title in the language of the resource
					</p>
				</div>
				<div class="col-span-4 md:col-span-2">
					<label
						for="title"
						class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
						Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
					<p class="mt-2 text-xs text-gray-500">
						The title of the resource in english
					</p>
				</div>

				<div class="col-span-4">
					<label
						for="about"
						class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
						Description
					</label>
					<div class="mt-1 sm:col-span-2 sm:mt-0">
						<textarea
							id="about"
							name="about"
							rows="3"
							class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
						</textarea>
						<p class="mt-2 text-xs text-gray-500"></p>
					</div>
				</div>

				<div class="col-span-4 sm:col-span-2">
					<label
						for="iso"
						class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
						Language
					</label>
					<!-- <Select {languages} {optionIdentifier} {getSelectionLabel} {getOptionLabel} {Item} placeholder="Search for language"></Select> -->
					<input
						type="text"
						name="iso"
						id="iso"
						class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
				</div>

				<div class="col-span-4 sm:col-span-2">
					<label
						for="first-name"
						class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
						Script
					</label>
					<input
						type="text"
						name="script"
						class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
					<p class="mt-2 text-xs text-gray-500">
						The script used to write the Bible or Resource
					</p>
				</div>

				<div class="col-span-4 sm:col-span-2">
					<label
						for="first-name"
						class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
						Date
					</label>
					<input
						type="text"
						name="script"
						class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
					<p class="mt-2 text-xs text-gray-500">
						The year the Bible resource was published
					</p>
				</div>

				<div class="col-span-4 sm:col-span-2">
					<label
						for="first-name"
						class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
						Organization
					</label>
					<input
						type="text"
						name="script"
						class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
					<p class="mt-2 text-xs text-gray-500">
						If you know the Organization that holds copyrights to this resource
					</p>
				</div>
			</div>
		</div>

		<div class="py-5">
			<div class="flex justify-end">
				<button
					type="submit"
					class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
					Submit
				</button>
			</div>
		</div>
	</div>
</form>
