import { test, expect } from 'vitest';

import { get } from 'svelte/store';

import {
  job,
  flags,
  lockedEvents,
  currentEventTitle,
  currentScreen,
  scheduledEvents,
} from './stores';

import { initGame } from './game';

test('Game initialize resets state', () => {
  initGame();
  let initJob = get(job);
  let initflags = get(flags);
  let initLockedEvents = get(lockedEvents);
  let initCurrentEventTitle = get(currentEventTitle);
  let initCurrentScreen = get(currentScreen);
  let initScheduledEvents = get(scheduledEvents);
  expect(initCurrentEventTitle).toEqual('prologue');
  expect(initCurrentScreen).toEqual('start');
  expect(initScheduledEvents).toEqual([]);
});

// test a few effects blocks

// test a few fill vars with promotion in between
