import getRandom from './utils';
import EVENTS from './events';

const EVENT_KEYS = Object.keys(EVENTS);
const ONLY_RANDOM_EVENT_KEYS = EVENT_KEYS.filter((e) => !isEventDirectOnly(e));
const ALLFLAGS = allFlags(EVENTS);

// debug only
function isEventValid(event) {
  // check all nexts exist as screens
  // all effects are valid
  // all screens are reachable
  // all screens have at least one opt that will be available in any given circumstance
}

// do we want to assume these keys will exist because of editor output
function isEventRepeatable(event) {
  if (Object.hasOwn(EVENTS[event].meta, 'repeatable')) {
    return EVENTS[event].meta.repeatable;
  } else return false;
}
function isEventDirectOnly(event) {
  if (Object.hasOwn(EVENTS[event].meta, 'requires')) {
    if (Object.hasOwn(EVENTS[event].meta.requires, 'direct')) {
      return EVENTS[event].meta.requires.direct;
    }
  } else return false;
}

function serveScreen(event, screen) {
  try {
    return EVENTS[event][screen];
  } catch (e) {
    console.error(`Event: ${event} Screen: ${screen} does not exist`);
  }
}

// returns a random event key that has been fully qualifed by given info
function getRandomQualifiedEventKey(playerLevel, playerFlags, completed) {
  const qualified = ONLY_RANDOM_EVENT_KEYS.filter((event) => {
    if (Object.hasOwn(EVENTS[event].meta, 'requires')) {
      return checkRequirements(
        EVENTS[event].meta.requires,
        playerLevel,
        playerFlags
      );
    } else return true;
  });
  // TODO: implement completed array
  // getRandom item from filtered array of keys
  return getRandom(qualified);
}

function checkRequirements(requires, playerLevel, playerFlags) {
  if (typeof requires.level === 'number') {
    if (requires.level > playerLevel) return false;
  }
  if (Object.hasOwn(requires, 'flags')) {
    if (!checkFlags(playerFlags, requires.flags)) return false;
  }
  return true;
}

// right now this returns true if the player doesn't have a flag that's required false
// Might want to change this up - thinking maybe I populate player flags with ALL possible flags, with default values
function checkFlags(playerFlags, flagsToCheck) {
  return Object.entries(flagsToCheck).every(([flag, value]) => {
    if (Object.hasOwn(playerFlags, flag)) {
      return playerFlags[flag] === value;
    }
    if (value === false) {
      return true;
    }
    return false;
  });
}

function allFlags(EVENTS) {
  // a function that returns an array of all possible flags
  // in each event, in each screen, in each option, effects, if addFlags
}

export {
  getRandomQualifiedEventKey,
  checkRequirements,
  isEventRepeatable,
  serveScreen,
};
