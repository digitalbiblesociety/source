import { writable } from "svelte/store"
import { localStore } from "./localstore.js"

export const currentLocale = localStore("locale", 'en')
export const cartID = localStore("cartID", "")
export const selected = writable([])
export const cartQuantity = localStore("cartQuantity", 0)
export const mobileMenuOpen = writable(0)
