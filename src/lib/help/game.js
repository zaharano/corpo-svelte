import {
  job,
  flags,
  eventDeck,
  currentEvent,
  currentScreen,
  text,
  options,
  textLoaded,
  listening,
  inGame,
} from './stores.js';

import { get } from 'svelte/store';

import { eventServer } from './events';

// reset various state variables
function initialize() {
  job.init();
  flags.init();
  eventDeck.init();
  eventInit('prologue');
  inGame.toggle();
}

// TODO: Function to check metrics
function checkMetrics() {
  // if jobPerformance > x, promotion
  // if jobperf < x, demotion
  // if yearsPassed > x, load die at your keyboard slide
  // if currentTitle = x, load forced out from the top slide
  // if idletimer last minute > x, perperf down
  //
}

// initializes a new event, given its name
function eventInit(eventName) {
  const newEvent = eventServer(eventName);
  currentEvent.set(newEvent);
  currentScreen.set('start');
  cycleDisplay(newEvent.start.text, newEvent.start.opts);
}

function eventAdvance(effects, next) {
  listening.set(false);
  textLoaded.set(false);
  let res = resolveEffects(effects);
  if (res === 0) {
    // end the game somehow
  } else if (res === 1) {
    const nextEvent = eventDeck.select();
    eventInit(nextEvent);
  } else {
    currentScreen.set(next);
    const event = get(currentEvent);
    cycleDisplay(event[next].text, event[next].opts);
  }
}

function cycleDisplay(newText, newOptions) {
  text.set(newText);
  options.set(newOptions);
}

function resolveEffects(effects) {
  // For feference, all possible keys in effects block
  // effects: {
  //   job: {
  //     performanceChange: 0,
  //     timePassed: 0,
  //     promotion: false,
  //     demotion: false,
  //     newDept: 'generate' or '{specify}'
  //   },
  //   flags: {newFlag: true},
  //   events: ['newEvent'],
  //   eventComplete: false,
  //   alert: 'Alert message,'
  //   gameOver: false,
  // }
  // All job keys are in fact methods of job store
  if (effects.gameOver === true) return 0;
  if (effects.job) {
    for (const [func, value] of Object.entries(effects.job)) {
      job[func](value);
    }
  }
  if (effects.flags) {
    for (const [flag, value] of Object.entries(effects.flags)) {
      flags.add(flag, value);
    }
  }
  if (effects.events) {
    eventDeck.add(effects.events);
  }
  if (effects.alert) {
    // TODO: implement alert
  }
  if (effects.eventComplete === true) return 1;
}

// TODO: PROBABLY TRASH GIVEN ARCHITECTURE EVOLUTION
// takes the event object and new screen and loads data
// function loadScreen(event, screen) {
//   textLoaded.toggle();
//   text.set(event[screen].text);
//   options.set(event[screen].opts);
// }

function loadPrevious() {
  // placeholder
}

export const game = {
  eventInit,
  initialize,
  loadPrevious,
  eventAdvance,
};
