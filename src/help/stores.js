import { writable } from 'svelte/store';

export const state = writable({
  currentLevel: 0,
  years: 0,
  department: undefined,
  title: undefined,
  jobPerformance: undefined,
  flags: {},
  currentEvent: undefined,
  eventDeck: [],
  specialFX: {
    typeSpeed: 1,
    flicker: false,
    corruption: false,
    ghost: false,
  },
});
