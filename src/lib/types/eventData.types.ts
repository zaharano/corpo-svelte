export interface Events {
  [index: string]: Event;
}

export interface Event {
  meta: Meta;
  start: Screen;
  [index: string]: Screen | Meta;
}

export interface Screen {
  title: string;
  text: string;
  options: Option[];
}

export interface Meta {
  id: string;
  slug: string;
  title: string;
  repeatable: boolean;
  requires?: Requirements;
  onStart?: Effects;
  onEnd?: Effects;
}

export interface Requirements {
  level?: number;
  flags?: Flag[];
  direct?: boolean;
}

export interface Flag {
  [index: string]: boolean;
}

export interface Option {
  text: string;
  next: string;
  effects?: Effects;
  requires?: Requirements;
}

export interface Effects {
  job?: {
    performanceChange?: number;
    timePassed?: number;
    promotion?: boolean | string;
    demotion?: boolean | string;
    newDept?: string;
    newEnemey?: string;
  };
  editFlags?: Flag[];
  editEvents?: EventChanges;
  editVFX?: VFX;
}

export interface EventChanges {
  schedule?: string[];
  lock?: string[];
}

export interface VFX {
  typeSpeed?: number;
  tracker?: boolean;
  enhancedTracker?: boolean;
  flicker?: boolean;
  corruption?: boolean;
  ghost?: boolean;
}
