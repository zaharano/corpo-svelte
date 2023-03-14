import getRandom from './utils';

// variables to be filled at time of display are
//    %ENEMY: The first enemy from the enemy stack
//    %DEPT: The player's department
//    %TITLE: The player's title

const EVENTS = Object.freeze({
  prologue: {
    details: {
      forcedOnly: true,
    },
    start: {
      title: 'Welcome to Megacorp!',
      text: "It's your first day in the mail room at Megacorp! Thanks to your shady Uncle Harrison, Under-Director of South American Regional Logistics, you've been given your shot at the corporate world. The mail room isn't the best shot, seeing as it's the year 2085 and nobody sends mail any more, but it's the one you've been given so damnit you're gonna give it your all! Your manager Merle has been at Megacorp for 30 years, and is eager to show you the ropes.",
      options: [
        {
          text: 'Get to work!',
          next: 'toWork',
          effects: {
            job: {
              performanceChange: 10,
              timePassed: 1,
            },
          },
        },
        {
          text: 'Actually, this is just a temporary job to pay the bills while I pursue my true passion, game development.',
          next: 'gameDev',
          effects: {
            job: {
              performanceChange: -25,
              timePassed: 2,
            },
            flags: {
              gameDeveloper: true,
            },
          },
        },
      ],
    },
    toWork: {
      title: 'Getting to work',
      text: 'Once you apply yourself a bit, you quickly get promoted twice in a year and become second-in-command in the mail room. But it would seem your progress is stalled: the natural promotion from here is your boss Merle\'s position. In the cafeteria people tell you "Merle is the true heart of Megacorp" which makes you pretty sure he\'s useless and just in your way.',
      options: [
        {
          text: 'Take some time to ingratiate yourself to Merle',
          next: 'merleApproves',
          effects: {
            job: {
              performanceChange: 20,
              timePassed: 1,
            },
            flags: {
              merleLikesYou: true,
            },
          },
        },
        {
          text: "Spread vicious lies about Merle's work ethic.",
          next: 'busted',
          effects: {
            job: {
              performanceChange: -25,
              timePassed: 1,
              newEnemy: 'Merle',
            },
            flags: {
              meanToMerle: true,
            },
          },
        },
      ],
    },
    busted: {
      title: 'Busted',
      text: "While 30 years at a company doesn't necessarily buy you corporate advancement, turns out it does buy you a friend or two. Once people figure out what you're up to, you're quickly demoted to a mail room associate position from which you're very unlikely to ever emerge.",
      options: [
        {
          disabled: 'gameDeveloper',
          text: 'Plenty of time to focus now on your true passion, game development.',
          next: 'gameDev',
          effects: {
            job: {
              timePassed: 2,
            },
          },
        },
        {
          text: "Well darn... guess it's time to start over.",
          next: 'gameEnd',
          effects: {},
        },
      ],
    },
    merleApproves: {
      title: 'Merle likes you',
      text: 'Merle comes up for a promotion out of the mail room after all these years, but he decides to recommend you get promoted over him instead. He likes you and sees great things ahead for you. What a sucker.',
      options: [
        {
          text: 'Onward and upward...',
          next: 'eventEnd',
          effects: {
            job: {
              newDepartment: 'auto',
              promotion:
                'Congratulations on your promotion to %TITLE in the %DEPT department. If you are unhappy with your assigned department, please fill out a 92-3-cb and submit it to your designated HR representative: <REPRESENTATIVE NOT FOUND>',
            },
          },
        },
      ],
    },
    gameDev: {
      title: '<Working hard emoji>',
      text: 'You spend the next two years coasting in the mail room, while working nose the grindstone every night and weekend at home on your passion project - an open-world, grim-dark remake of that game with Cool Spot. First, you learn how to code and use a modern game engine, then take a few skillshare courses to pick up some basic skills in digital art. You toil away and eventually get together something resembling the game you envisioned, with... reasonable compromises, here and there.',
      options: [
        {
          text: 'Release this sucker and start raking in the accolades!',
          next: 'gameSucks',
          effects: {
            flags: {
              gameSucked: true,
            },
          },
        },
        {
          text: 'Compromises? No. This is my magnum opus, my gift to humankind. It will be perfect or it will be nothing.',
          next: 'gamePerfect',
          effects: {
            job: {
              timePassed: 3,
            },
            flags: {
              gameAmazing: true,
            },
          },
        },
      ],
    },
    gameSucks: {
      title: "Your game isn't good!",
      text: 'You sell 124 copies of your game but most of those sales are probably down to the excellent cover artwork you commissioned that features a very sexy thirst-trap Cool Spot. You\'ve wasted two years of your life. At least you\'ve become good friends with your manager in the mail room, Merle. He even played your game start to finish, and thought it was "pretty ok."',
      options: [
        {
          text: "Decide it's time to take this Megacorp job seriously.",
          next: 'toWork',
          effects: {
            job: {
              performanceChange: 3,
            },
          },
        },
        {
          text: 'Stick to your guns! Work on your next idea, a space shooter with a real time trading economy and complicated romance trees with aliens.',
          next: 'yaFired',
          effects: {},
        },
      ],
    },
    gamePerfect: {
      title: 'Your game is a masterpiece',
      text: "After a half-decade of refinement you release what you can confidently state is the best possible version of your game. It's really quite good, but since it's based entirely on your singular, iconoclastic vision, but also since it's now using a five year old game engine, it's decidedly niche. You sell 459 copies.",
      options: [
        {
          text: "Well, I guess it's time to, like, get to work, I guess...",
          next: 'toWork',
          effects: {
            job: {
              performanceChange: 5,
              timePassed: 1,
            },
          },
        },
      ],
    },
    yaFired: {
      title: 'You are fired',
      text: "Merle loves your new idea when you tell him all about it, but he still has to fire you because you never get anything done at your very simple job in the mail room. But he can't wait to play the new game. With all the time on your hands to work on it, it'll probably be great. Right?",
      options: [
        {
          text: 'Start over',
          next: 'gameEnd',
          effects: {},
        },
      ],
    },
  },

  hitAWall: {
    details: {
      levelReq: 0,
      flagReq: [],
      forcedOnly: true,
    },
    start: {
      title: 'Well this is going nowhere...',
      text: "One day you felt the wind beneath your wings, soaring up the ranks, and then... wham. You hit a cieling. People stop putting exclamation marks in ever message they send you. People stop inviting you to their unneccesarry meetings that you wouldn't have gone to anyway, but it was nice to at least be invited. You're just... here. Doing the work.",
      options: [
        {
          text: "I'll get 'em next time.",
          next: null,
          effects: {
            gameOver: true,
          },
        },
      ],
    },
  },

  beADick: {
    details: {
      levelReq: 0,
      flagReq: [],
      forcedOnly: false,
    },
    start: {
      title: 'An Opportunity Presents Itself',
      text: 'One day on your way to the mandated 11:15 standup',
      options: [
        {
          text: 'Option 1 text',
          next: 'Option 1 next',
        },
      ],
    },
  },

  aThirdEvent: {
    details: {
      levelReq: 1,
      flagReq: [],
      forcedOnly: true,
      repeatable: false,
    },
    start: {
      title: 'Start Screen Title!',
      text: 'Start Screen text!',
      options: [
        {
          text: 'Option 1 text',
          next: 'Option 1 next',
        },
      ],
    },
  },
});

const EVENT_KEYS = Object.keys(EVENTS);
const ONLY_RANDOM_EVENT_KEYS = EVENT_KEYS.filter((event) => {
  return !EVENTS[event].details.forcedOnly;
});
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
