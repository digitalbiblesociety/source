import { writable } from "svelte/store"

export const browser = writable("UNKNOWN")
export const ip = writable("UNKNOWN")
export const os = writable("UNKNOWN")
export const js = writable(false)
