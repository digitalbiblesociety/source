import { waitLocale } from 'svelte-i18n'

export async function preload() {
	return waitLocale()
}