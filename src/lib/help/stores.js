import { writable } from 'svelte/store';
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

// object: flags track decisions that have occurred in current game
export const flags = createFlags({});

// object: effects tracks certain visual effects in current game
export const effects = createEffects({
  typeSpeed: 0.0001,
  flicker: false,
  corruption: false,
  ghost: false,
});

// array (objs): list of forced events (handled as queue)
// as { event:string, turns:num}
export const scheduledEvents = createEventSchedule([]);
// array (string): list of locked event keys (will prevent selection)
export const lockedEvents = writable([]);

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

// generates effects object with custom controls
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

function createEventSchedule(INIT) {
  const { subscribe, set, update } = writable(INIT);

  // schedule an event to a specfic number of turns
  // if the requested turn count is taken already, add 1 until fits
  const add = (event, turns) => {
    update((schedule) => {
      let timeThatWorks = letsFindATimeThatWorks(schedule, turns);
      return schedule.concat([
        {
          event,
          turns: timeThatWorks,
        },
      ]);
    });
  };

  // Tries turn counts until one isn't taken
  function letsFindATimeThatWorks(list, turn) {
    if (list.some((item) => item.turns === turn)) {
      return letsFindATimeThatWorks(list, turn + 1);
    } else {
      return turn;
    }
  }

  const advance = () => {
    let nextEvent;
    update((schedule) => {
      let newSchedule = schedule.map((item) => {
        return {
          ...item,
          turns: item.turns - 1,
        };
      });
      return newSchedule.filter((item) => {
        if (item.turns < 1) {
          nextEvent = item.event;
          return false;
        } else return true;
      });
    });
    return nextEvent;
  };

  return {
    subscribe,
    add,
    advance,
    set,
    init: () => set(INIT),
  };
}
