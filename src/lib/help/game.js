import {
  job,
  flags,
  eventDeck,
  currentEventTitle,
  currentScreen,
  displayText,
  displayOptions,
  displayAlert,
  textLoaded,
  listening,
  inGame,
} from './stores.js';

import { screenServer } from './events';

import { get } from 'svelte/store';

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
  currentEventTitle.set(eventName);
  currentScreen.set('start');
  displayScreen(screenServer(eventName, 'start'));
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
    const event = get(currentEventTitle);
    displayScreen(screenServer(event, next));
  }
}

// this all needs a refactor -
// I want to make eventadvance work like screenserver and storecycle are called once at bottom
// meaning scoped variables there that can be filled within the if/then
// this conflicts with using eventInit in the game start...
function displayScreen(screen) {
  const { text, options } = screen;
  displayText.set(fillVars(text));
  // switch options to fill text vars if they ever use vars
  displayOptions.set(options);
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
  let alertText = '';
  if (effects) {
    if (effects.gameOver === true) return 0;
    if (effects.job) {
      applyJobEffects(effects.job);
    }
    if (effects.flags) {
      for (const [flag, value] of Object.entries(effects.flags)) {
        flags.add(flag, value);
      }
    }
    if (effects.events && effects.events.length) {
      eventDeck.add(effects.events);
    }
    // if a forced alert is set, it will take over priority from above alert
    // is that the wrong order?
    // if (effects.alert && effects.alert.length) {
    //   alertText = fillVars(effects.alert);
    // }
    if (alertText !== '') {
      alert.set(fillVars(alertText));
    }
    if (effects.eventComplete === true) return 1;
  }

  // I didn't actually want this scoped thing, revisit this!
  function applyJobEffects(jobEffects) {
    for (let [func, value] of Object.entries(jobEffects)) {
      // pro/dems can carry alerts with vars applicable post-effect
      job[func](value);
      if (func === 'promotion' || func === 'demotion') {
        if (typeof value === 'string') {
          alertText = value;
        }
      }
    }
  }
}

function loadPrevious() {
  // placeholder
}

export { eventAdvance, loadPrevious, initialize };

export const game = {
  eventInit,
  initialize,
  loadPrevious,
  eventAdvance,
};
