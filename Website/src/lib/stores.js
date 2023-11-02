import { writable } from "svelte/store";

// for toggling elements depending on page
export const currentPage = writable("home");

// self explanatory
export const chapterNumber = writable(1);
