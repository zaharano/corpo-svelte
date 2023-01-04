<script>
  import { jobData, flags, eventDeck, currentEvent } from './help/stores.js'
  import { onDestroy } from 'svelte';

  function mainLoop() {
    if ($currentEvent !== '') {
      const event = loadEvent($currentEvent)
      eventLoop(event)
    } else {
      // check performance metrics for impact
      // check for promotion
      // select event from deck
    }
  }

  async function eventLoop(event) {
    let eventOngoing = true;
    let screen = "start";

    do {
      // load screen text
      // load options
      // await input
      // resolve input
    } while (eventOngoing)

  }

  function loadEvent(event) {
    // grab the specifc event object from the script JSON
    // return the object
  }

  function gameInit() {

  }
</script>