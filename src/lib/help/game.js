import {
  job,
  flags,
  eventDeck,
  currentEvent,
  currentEventTitle,
  currentScreen,
  text,
  options,
  textLoaded,
  listening,
  inGame,
  alert,
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
  currentEventTitle.set(eventName);
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
    // if there's no next, error
    currentScreen.set(next);
    const event = get(currentEvent);
    cycleDisplay(event[next].text, event[next].opts);
  }
}

function cycleDisplay(newText, newOptions) {
  text.set(fillVars(newText));
  // switch options to fill text vars if they ever use vars
  options.set(newOptions);
}

function fillVars(text) {
  const currentJob = get(job);
  if (typeof text === 'string') {
    return text.replace(/%ENEMY|%DEPT|%TITLE/g, (v) => {
      switch (v) {
        case '%ENEMY':
          if (currentJob.enemies.length) return currentJob.enemies[0];
          else return 'Gary Oak';
        case '%DEPT':
          return currentJob.department;
        case '%TITLE':
          return currentJob.title;
      }
    });
  } else {
    console.warn('attempting to replace vars in a non-string.');
    return text;
  }
}

function resolveEffects(effects) {
  // For reference, all possible keys in effects block
  // effects: {
  //   job: {
  //     performanceChange: int,
  //     timePassed: int,
  //     promotion: bool,
  //     demotion: bool,
  //     newDept: 'auto' or other string
  //     newEnemy: 'auto' or other string
  //   },
  //   flags: {newFlag: true},
  //   events: [{ title: string, lvlreq: int }],
  //   alert: string,
  //   eventComplete: bool,
  //   gameOver: bool,
  // }
  // All job keys are methods of job store
  if (effects) {
    if (effects.gameOver === true) return 0;
    if (effects.job) {
      for (let [func, value] of Object.entries(effects.job)) {
        // promotions and demotions can carry alerts with vars
        if (func === 'promotion' || func === 'demotion') {
          if (typeof value === 'string') value = fillVars(value);
        }
        job[func](value);
      }
    }
    if (effects.flags) {
      for (const [flag, value] of Object.entries(effects.flags)) {
        flags.add(flag, value);
      }
    }
    if (effects.events && effects.events.length) {
      eventDeck.add(effects.events);
    }
    if (effects.alert && effects.alert.length) {
      alert.set(effects.alert);
    }
    if (effects.eventComplete === true) return 1;
  }
}

function loadPrevious() {
  // placeholder
}

export const game = {
  eventInit,
  initialize,
  loadPrevious,
  eventAdvance,
  cycleDisplay,
};
