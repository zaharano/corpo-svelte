import { writable } from 'svelte/store';
import generateDepartment from './department';

// string: current event title
export const currentEventTitle = writable('prologue');
// object: current event object
export const currentEvent = writable({
  start: {
    title: 'Welcome to Megacorp!',
    text: "It's your first day in the mail room at Megacorp! Thanks to your shady Uncle Harrison, Director of South American Regional Logistics, you've been given your shot at the corporate world. The mail room isn't the best shot, seeing as it's the year 2085 and nobody sends mail any more, but it's the one you've been given so damnit you're gonna give it your all! Your manager Merle has been at Megacorp for 30 years, and is eager to show you the ropes.",
    opts: [
      {
        text: 'Get to work!',
        next: 'toWork',
        effects: () => {
          job.performanceChange(10);
          job.timeChange(1);
        },
      },
      {
        text: 'Actually, this is just a temporary job to pay the bills while I pursue my true passion, game development.',
        next: 'gameDev',
        effects: () => {
          job.performanceChange(-25);
          job.timeChange(2);
        },
      },
    ],
  },
  toWork: {
    title: 'Getting to work',
    text: 'Once you apply yourself a bit, you quickly get promoted twice in a year and become second-in-command in the mail room. But it would seem your progress is stalled: the natural promotion from here is your boss Merle\'s position. In the cafeteria people tell you "Merle is the true heart of Megacorp" which makes you pretty sure he\'s useless and just in your way.',
    opts: [
      {
        text: 'Take some time to ingratiate yourself to Merle',
        next: 'merleApproves',
        effects: () => {
          job.performanceChange(10);
          job.timeChange(1);
        },
      },
      {
        text: "Spread vicious lies about Merle's work ethic.",
        next: 'busted',
        effects: () => {
          job.performanceChange(-10);
        },
      },
    ],
  },
  busted: {
    title: 'Busted',
    text: "While 30 years at a company doesn't necessarily buy you corporate advancement, turns out it does buy you a friend or two. Once people figure out what you're up to, you're quickly demoted to a mail room associate position from which you're very unlikely to ever emerge.",
    opts: [
      {
        disabled: 'gameDev',
        text: 'Plenty of time to focus now on your true passion, game development.',
        next: 'gameDev',
        effects: () => {
          job.timeChange(2);
        },
      },
    ],
  },
  merleApproves: {
    title: 'Merle likes you',
    text: 'Merle comes up for a promotion out of the mail room after all these years, but he decides to recommend you get promoted over him instead. He likes you and sees great things ahead for you. What a sucker.',
    opts: [
      {
        text: 'Onward and upward...',
        next: 'NEWTHING>>>',
        effects: {
          perf: 10,
        },
      },
    ],
  },
  gameDev: {
    title: 'TitleText',
    text: 'You spend the next two years coasting in the mail room, while working nose the grindstone every night and weekend at home on your passion project - an open-world, grim-dark remake of that game with Cool Spot. First, you learn how to code and use a modern game engine, then take a few skillshare courses to pick up some basic skills in digital art. You toil away and eventually get together something resembling the game you envisioned, with... reasonable compromises, here and there.',
    opts: [
      {
        text: 'Release this sucker and start raking in the accolades!',
        next: 'gameSucks',
        effects: {
          perf: 10,
        },
      },
      {
        text: 'Compromises? No. This is my magnum opus, my gift to humankind. It will be perfect or it will be nothing.',
        next: 'gamePerfect',
        effects: {
          years: 5,
        },
      },
    ],
  },
  gameSucks: {
    title: "Your game isn't good",
    text: 'You sell 124 copies of your game but most of those sales are probably down to the excellent cover artwork you commissioned from an art student for one-hundred XposureTokens. You\'ve wasted two years of your life. At least you\'ve become good friends with your manager in the mail room, Merle. He even played your game start to finish, and thought it was "pretty ok."',
    opts: [
      {
        text: "Decide it's time to take this Megacorp job seriously.",
        next: 'toWork',
        effects: {
          perf: 10,
        },
      },
      {
        text: 'Stick to your guns! Work on your next idea, a space shooter with a real time trading economy and complicated romance trees with aliens.',
        next: 'yaFired',
        effects: {
          perf: 10,
        },
      },
    ],
  },
  gamePerfect: {
    title: 'Your game is a masterpiece',
    text: "After a half-decade of refinement you release what you can confidently state is the best possible version of your game. It's really quite good, but since it's now using a five year old game engine, it's decidedly niche. You sell 459 copies.",
    opts: [
      {
        text: 'OptionOne',
        next: 'LeadsTo',
        effects: {
          perf: 10,
        },
      },
      {
        text: 'OptionTwe',
        next: 'LeadsTo',
        effects: {
          perf: 10,
        },
      },
    ],
  },
  yaFired: {
    title: 'You are fired',
    text: "Merle loves your new idea when you tell him all about it, but he still has to fire you because you never get anything done at your very simple job in the mail room. But he can't wait to play the new game. With all the time on your hands to work on it, it'll probably be great. Right?",
    opts: [
      {
        text: 'Start over',
        effects: [
          {
            restart: true,
          },
        ],
      },
    ],
  },
});
// string: current screen title
export const currentScreen = writable('start');
// string: current text
export const text = writable('');
// array: current list of options objects
export const options = writable([]);
// bool: whether currently listening for input
export const listening = writable(false);
// bool: whether text has finished loading
export const textLoaded = writable(false);
export const popupOpen = createToggle(false);
export const inGame = createToggle(false);
export const job = createJob();
// array: list of currently available events
export const eventDeck = createEventDeck();
export const flags = createFlags();
export const effects = createEffects();

function createAlert() {}

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

function createJob() {
  const INIT = {
    currentLevel: 0,
    years: 0,
    department: 'Mail Room',
    performance: 10,
  };

  const { subscribe, set, update } = writable(INIT);

  const promote = () => {
    update((j) => {
      return {
        ...j,
        currentLevel: j.currentLevel + 1,
        performance: 50,
      };
    });
  };

  const demote = () => {
    update((j) => {
      return {
        ...j,
        currentLevel: j.currentLevel - 1,
        performance: 50,
      };
    });
  };

  const newDepartment = () => {
    update((j) => {
      return {
        ...j,
        department: generateDepartment(),
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

  const timeChange = (d) => {
    update((j) => {
      return {
        ...j,
        years: j.years + d,
      };
    });
  };

  return {
    subscribe,
    promote,
    demote,
    newDepartment,
    performanceChange,
    timeChange,
    init: () => set(INIT),
  };
}

function createEventDeck() {
  const INIT = ['test1', 'test2'];

  const { subscribe, set, update } = writable(INIT);

  const select = () => {
    // pick an event at random
  };

  return {
    subscribe,
    select,
    add: (newEvents) => update((original) => original.concat(newEvents)),
    init: () => set(INIT),
  };
}

function createFlags() {
  const INIT = { test: true };

  const { subscribe, set, update } = writable(INIT);

  const add = (flag) => {
    update((flags) => {
      return {
        ...flags,
        [flag]: true,
      };
    });
  };

  return {
    subscribe,
    add,
    init: () => set(INIT),
  };
}

function createEffects() {
  const INIT = {
    typeSpeed: 20,
    flicker: false,
    corruption: false,
    ghost: false,
  };

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
