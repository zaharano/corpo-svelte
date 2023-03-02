import { get, writable } from 'svelte/store';
import generateDepartment from './department';
import generateEnemy from './enemies';
import titles from './titles';

// object: job tracks data about progress in current game
export const job = createJob({
  level: 0,
  years: 0,
  department: 'Mail Room',
  title: 'Mail Jockey',
  performance: 40,
  enemies: [],
});

// object: flags tracks decisions that have occurred in current game
export const flags = createFlags({ test: true });

// object: effects tracks certain visual effects in current game
export const effects = createEffects({
  typeSpeed: 0.0001,
  flicker: false,
  corruption: false,
  ghost: false,
});

// array (objects): list of currently available events
export const eventDeck = createEventDeck([
  { title: 'beADick', lvlreq: 0 },
  { title: 'aThirdEvent', lvlreq: 0 },
]);

// array (strings): list of forced event keys (handled as queue)
export const forcedEvents = writable([]);

export const prohibitedEvents = writable([]);

// USED BY GAME.JS TO PULL CONTENT
// string: current event title
export const currentEventTitle = writable('');
// string: current screen title
export const currentScreen = writable('');

// USED BY COMPONENTS TO DISPLAY GAME
// string: current text
export const displayText = writable('');
// array (objects): current list of options (as in answers to screen)
export const displayOptions = writable([]);
// string: current alert text
export const displayAlert = writable('');

// USED BY COMPONENTS TO CONTROL DISPLAY AND INPUT
// bool: whether currently listening for input
export const listening = writable(false);
// bool: whether text has finished loading
export const textLoaded = writable(false);
// bool: whether the game is currently running
export const inGame = createToggle(false);

// this is deprecated
export const popupOpen = createToggle(false);

// generates generic toggle with limited control
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

// generates job object with custom controls
function createJob(INIT) {
  const { subscribe, set, update } = writable(INIT);

  const MAXLEVEL = titles.length;
  const MINLEVEL = 1;
  const MAXYEARS = 146;

  // title index is -1, pre-update level is appropriate for pulling new title
  // TODO: handle max level
  const promotion = (message) => {
    if (message !== false) {
      update((j) => {
        return {
          ...j,
          level: j.level + 1,
          performance: 50,
          title: titles[j.level],
        };
      });
    }
  };

  // TODO: handle min level
  const demotion = (message) => {
    if (message !== false) {
      update((j) => {
        return {
          ...j,
          level: j.level - 1,
          performance: 50,
          title: titles[j.level],
        };
      });
    }
  };

  // if newDepartment or newEnemy called 'auto' or w/o string they generate
  const newDepartment = (name) => {
    if (typeof name !== 'string' || name === 'auto') {
      name = generateDepartment();
    }
    update((j) => {
      return {
        ...j,
        department: name,
      };
    });
  };

  const newEnemy = (name) => {
    if (typeof name !== 'string' || name === 'auto') {
      name = generateEnemy();
    }
    update((j) => {
      return {
        ...j,
        enemies: [...j.enemies, name],
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
    promotion,
    demotion,
    newDepartment,
    newEnemy,
    performanceChange,
    timePassed,
    MAXLEVEL,
    MAXYEARS,
    init: () => set(INIT),
  };
}

// generates eventDeck array with custom controls
function createEventDeck(INIT) {
  const { subscribe, set, update } = writable(INIT);

  const select = () => {
    let selected;
    update((deck) => {
      let qualifiedEvents = deck.filter((ev) => ev.lvlreq <= get(job).level);
      if (qualifiedEvents.length < 1) {
        selected = 'hitAWall';
        return deck;
      } else {
        selected =
          qualifiedEvents[Math.floor(Math.random() * qualifiedEvents.length)]
            .title;
        return deck.filter((ev) => ev.title !== selected);
      }
    });
    return selected;
  };

  return {
    subscribe,
    select,
    add: (newEvents) => update((original) => original.concat(newEvents)),
    init: () => set(INIT),
  };
}

// generates flags object with custom controls
function createFlags(INIT) {
  const { subscribe, set, update } = writable(INIT);

  const add = (flag, value) => {
    update((flags) => {
      return {
        ...flags,
        [flag]: value,
      };
    });
  };

  return {
    subscribe,
    add,
    init: () => set(INIT),
  };
}

// generates flags object with custom controls
function createEffects(INIT) {
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
