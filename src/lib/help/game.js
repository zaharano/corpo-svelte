import {
  job,
  flags,
  lockedEvents,
  scheduledEvents,
  currentEventTitle,
  currentScreen,
  displayText,
  displayOptions,
  displayAlert,
  textLoaded,
  listening,
  inGame,
} from './stores.js';

import {
  serveScreen,
  isEventRepeatable,
  getRandomQualifiedEventKey,
} from './eventOps';

import { get } from 'svelte/store';

// reset various state variables
function initGame() {
  job.init();
  flags.init();
  scheduledEvents.init();
  lockedEvents.set([]);
  eventInit('prologue');
  inGame.toggle();
}

function endGame() {
  inGame.toggle();
  // clock out
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

function checkRequirements(requires) {
  const { playerLevel, playerFlags } = get(job);
  if (typeof requires.level === 'number') {
    if (requires.level > playerLevel) return false;
  }
  if (requires.flags.length) {
    if (!requires.flags.every((flag) => playerFlags[flag])) return false;
  }
  return true;
}

// this is the choice handler given to the interface
// the state handling should probably be moved to the eventHandlers
// results in one of: eventInit(end), eventInit(new), eventAdvance(next)
function choiceHandler(effects, next) {
  listening.set(false);
  textLoaded.set(false);
  if (next === 'gameEnd') {
    endGame();
  } else {
    resolveEffects(effects);
    if (next === 'eventEnd') {
      let nextEvent = getRandomQualifiedEventKey();
      eventInit(nextEvent);
    } else {
      eventAdvance(next);
    }
  }
}

// initializes an event given its name
// if the event isn't repeatable, it will be locked
// and pulls in display
function eventInit(eventKey) {
  currentEventTitle.set(eventKey);
  currentScreen.set('start');
  // if the selected event is not repeatable, add to locked events
  if (!isEventRepeatable(eventKey)) {
    lockedEvents.update((list) => list.concat([eventKey]));
  }
  displayScreen(serveScreen(eventKey, 'start'));
}

// continues the current event, given the next screen key
function eventAdvance(nextKey) {
  if (!nextKey) {
    console.error('No valid "next" for selected option');
  }
  currentScreen.set(nextKey);
  displayScreen(serveScreen(get(currentEventTitle), nextKey));
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

// remove the hard code of the these vars and allow an object argument
// that lists out the vars and their replacement strategy
// export
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

// if game is over, returns 0
// if event is over, returns 1
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
  //   events: { force: [string], lock: [string] },
  //   alert: string,
  // }
  // All job keys are methods of job store
  let alertText = '';
  if (effects) {
    // all possible job object keys are methods of the job store
    if (effects.job) {
      applyJobEffects(effects.job);
    }
    if (effects.flags) {
      for (const [flag, value] of Object.entries(effects.flags)) {
        flags.add(flag, value);
      }
    }
    if (effects.events) {
      // TODO: handle forcing or locking events
    }
    // if a forced alert is set, it will take over priority from above alert
    // is that the wrong order?
    // if (effects.alert && effects.alert.length) {
    //   alertText = fillVars(effects.alert);
    // }
    if (alertText !== '') {
      displayAlert.set(fillVars(alertText));
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

export { choiceHandler, loadPrevious, initGame };
