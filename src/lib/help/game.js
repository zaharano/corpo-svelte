import {
  job,
  flags,
  eventDeck,
  currentEvent,
  currentScreen,
  text,
  options,
  textLoaded,
  inGame,
} from './stores.js';

// reset various state variables
function initialize() {
  job.init();
  flags.init();
  eventDeck.init();
  inGame.toggle();
}

// TODO: PROBABLY TRASH GIVEN ARCHITECTURE EVOLUTION
function checkMetrics() {
  // if jobPerformance > x, promotion
  // if jobperf < x, demotion
  // if yearsPassed > x, load die at your keyboard slide
  // if currentTitle = x, load forced out from the top slide
  // if idletimer last minute > x, perperf down
  //
}

// TODO: PROBABLY TRASH GIVEN ARCHITECTURE EVOLUTION
function resolveSets() {}

// this will actually be necessary because of event conditions
function eventInit(eventName) {
  // load event data from JSON into an Object
  // put object into a store though?
  currentScreen.set('start');
}

// TODO: PROBABLY TRASH GIVEN ARCHITECTURE EVOLUTION
// takes event, screen, and user's selected option index and resolves all effects
// function eventAdvance(event, screen, optidx) {
//   const selectedOpt = event[screen].opts[optidx];
//   selectedOpt.effects();
//   currentScreen.set(selectedOpt.next);
// }

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
};
