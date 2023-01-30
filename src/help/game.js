import {
  job,
  flags,
  eventDeck,
  currentEvent,
  currentScreen,
  text,
  options,
} from './stores.js';

// reset various state variables
function gameInit() {
  job.init();
  flags.init();
  eventDeck.init();
}

function checkMetrics() {
  // if jobPerformance > x, promotion
  // if jobperf < x, demotion
  // if yearsPassed > x, load die at your keyboard slide
  // if currentTitle = x, load forced out from the top slide
  // if idletimer last minute > x, perperf down
  //
}

function resolveSets() {}

function eventInit(eventName) {
  // load event data from JSON into an Object
  // put object into a store though?
  currentScreen.set('start');
}

// takes the event object and new screen and loads data
function eventAdvance(event, screen) {
  text.set(event[screen].text);
  options.set(event[screen].opts);
}
