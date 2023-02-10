import { writable } from 'svelte/store';
import generateDepartment from './department';
import titles from './titles';

// object: job tracks data about progress in current game
export const job = createJob();

// object: flags tracks decisions that have occurred in current game
export const flags = createFlags();

// object: effects tracks certain visual effects in current game
export const effects = createEffects();

// array: list of currently available events
export const eventDeck = createEventDeck();

// object: current event object
export const currentEvent = writable({});

// string: current event title
export const currentEventTitle = writable('');

// string: current screen title
export const currentScreen = writable('');

// string: current text
export const text = writable('');

// array (objects): current list of options
export const options = writable([]);

// bool: whether currently listening for input
export const listening = writable(false);

// bool: whether text has finished loading
export const textLoaded = writable(false);

export const popupOpen = createToggle(false);
export const inGame = createToggle(false);

function createAlert() {}

function createToggle(initialValue) {
  const { subscribe, set, update } = writable(initialValue);

  const toggle = () => {
    update((current) => {
      return !current;
    });
  };

  const init = () => {
    set(initialValue);
  };

  return {
    subscribe,
    toggle,
    init,
  };
}

function createJob() {
  const INIT = {
    currentLevel: 0,
    years: 0,
    department: 'Mail Room',
    performance: 10,
  };

  const { subscribe, set, update } = writable(INIT);

  const promotion = () => {
    update((j) => {
      return {
        ...j,
        currentLevel: j.currentLevel + 1,
        performance: 50,
      };
    });
  };

  const demotion = () => {
    update((j) => {
      return {
        ...j,
        currentLevel: j.currentLevel - 1,
        performance: 50,
      };
    });
  };

  const newDepartment = () => {
    update((j) => {
      return {
        ...j,
        department: generateDepartment(),
      };
    });
  };

  const performanceChange = (d) => {
    update((j) => {
      return {
        ...j,
        performance: j.performance + d,
      };
    });
  };

  const timePassed = (d) => {
    update((j) => {
      return {
        ...j,
        years: j.years + d,
      };
    });
  };

  return {
    subscribe,
    promotion: promotion,
    demotion: demotion,
    newDepartment,
    performanceChange,
    timeChange: timePassed,
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
    select,
    add: (newEvents) => update((original) => original.concat(newEvents)),
    init: () => set(INIT),
  };
}

function createFlags() {
  const INIT = { test: true };

  const { subscribe, set, update } = writable(INIT);

  const add = (flag) => {
    update((flags) => {
      return {
        ...flags,
        [flag]: true,
      };
    });
  };

  return {
    subscribe,
    add,
    init: () => set(INIT),
  };
}

function createEffects() {
  const INIT = {
    typeSpeed: 20,
    flicker: false,
    corruption: false,
    ghost: false,
  };

  const { subscribe, set, update } = writable(INIT);

  const toggle = (effect) => {
    update((effects) => {
      const newEffects = {
        ...effects,
      };
      newEffects[effect] = !effects[effect];
      return newEffects;
    });
  };

  const newSpeed = (num) => {
    update((effects) => {
      return {
        ...effects,
        typeSpeed: num,
      };
    });
  };

  return {
    subscribe,
    toggle,
    newSpeed,
    init: () => set(INIT),
  };
}
