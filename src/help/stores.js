import { writable } from 'svelte/store';

export const jobData = writable({
  currentLevel: 0,
  years: 0,
  department: undefined,
  jobPerformance: undefined,
  currentEvent: undefined,
});

export const flags = writable({
  specialFX: {
    typeSpeed: 1,
    flicker: false,
    corruption: false,
    ghost: false,
  },
});

export const eventDeck = writable([]);

export const currentEvent = writable('');

export const textLoaded = writable(false);

export const text = writable('');

export const options = writable('');
