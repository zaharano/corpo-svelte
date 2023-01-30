import { writable } from 'svelte/store';
import generateDepartment from './department';

// string: current event title
export const currentEventTitle = writable('');
// object: current event object
export const currentEvent = writable({});
// string: current screen title
export const currentScreen = writable('');
// string: current text
export const text = writable('');
// array: current list of options objects
export const options = writable([]);
// bool: whether currently listening for input
export const listening = writable(false);
// bool: whether text has finished loading
export const textLoaded = writable(false);
export const job = createJob();
// array: list of currently available events
export const eventDeck = createEventDeck();
export const flags = createFlags();

function createJob() {
  const INIT = {
    currentLevel: 0,
    years: 0,
    department: 'Mail Room',
    performance: 10,
  };

  const { subscribe, set, update } = writable(INIT);

  const promote = () => {
    job.update((j) => {
      return {
        ...j,
        currentLevel: j.currentLevel + 1,
        performance: 50,
      };
    });
  };

  const demote = () => {
    job.update((j) => {
      return {
        ...j,
        currentLevel: j.currentLevel - 1,
        performance: 50,
      };
    });
  };

  const newDepartment = () => {
    job.update((j) => {
      return {
        ...j,
        department: generateDepartment(),
      };
    });
  };

  const performanceChange = (d) => {
    job.update((j) => {
      return {
        ...j,
        performance: j.performance + d,
      };
    });
  };

  const timeChange = (d) => {
    job.update((j) => {
      return {
        ...j,
        years: j.years + d,
      };
    });
  };

  return {
    subscribe,
    set,
    update,
    promote,
    demote,
    newDepartment,
    performanceChange,
    timeChange,
    init: () => set(INIT),
  };
}

function createEventDeck() {
  const INIT = ['test1', 'test2'];

  const { subscribe, set, update } = writable(INIT);

  const select = () => {
    // pick an event at random
  };

  return {
    subscribe,
    add: (newEvents) => update((original) => original.concat(newEvents)),
  };
}

function createFlags() {
  const INIT = {
    specialFX: {
      typeSpeed: 1,
      flicker: false,
      corruption: false,
      ghost: false,
    },
  };

  const { subscribe, set, update } = writable(INIT);

  return {
    subscribe,
    set,
    update,
    init: () => set(INIT),
  };
}
