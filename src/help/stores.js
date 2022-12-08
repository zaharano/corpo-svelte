import { writable } from 'svelte/store';

export const state = writable({
  currentLevel: 0,
  years: 0,
  department: undefined,
  title: undefined,
  jobPerformance: undefined,
  flags: {},
  eventDeck: [],
});
