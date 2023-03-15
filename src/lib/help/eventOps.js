import getRandom from './utils';
import EVENTS from './events';

const EVENT_KEYS = Object.keys(EVENTS);
const ONLY_RANDOM_EVENT_KEYS = EVENT_KEYS.filter((event) => {
  if (EVENTS[event].details.forcedOnly) return false;
});
console.log(ONLY_RANDOM_EVENT_KEYS);
const ALLFLAGS = allFlags(EVENTS);

// debug only
function isEventValid(event) {
  // check all nexts exist as screens
  // all effects are valid
  // all screens are reachable
  // all screens have at least one opt that will be available in any given circumstance
}

function isEventRepeatable(event) {
  return EVENTS[event].details.repeatable;
}

function serveScreen(event, screen) {
  try {
    return EVENTS[event][screen];
  } catch (e) {
    console.error(`Event: ${event} Screen: ${screen} does not exist`);
  }
}

// returns a random event that has been fully qualifed by given info
function getRandomQualifiedEventKey(level, flags, completed) {
  // random events filtered by level requirement then flag reqs
  const levelAndFlagQualified = ONLY_RANDOM_EVENT_KEYS.filter((event) => {
    EVENTS[event].details.levelReq <= level;
  }).filter((event) => {
    EVENTS[event].details.flagReq.every((flag) => flags[flag]);
  });
  // level and flag filtered events filtered by locked
  // TODO: implement completed array
  // getRandom item from filtered array of keys
  return getRandom(levelAndFlagQualified);
}

function allFlags(EVENTS) {
  // a function that returns an array of all possible flags
  // in each event, in each screen, in each option, effects, if addFlags
}

export { getRandomQualifiedEventKey, isEventRepeatable, serveScreen };
