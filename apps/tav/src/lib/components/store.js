import { writable } from "svelte/store"
import { localStore } from "./localstore.js"

export let cartID = localStore("cartID", "")
export let cartQuantity = localStore("cartQuantity", 0)
export let selected = writable([])
export let mobileMenuOpen = writable(0)