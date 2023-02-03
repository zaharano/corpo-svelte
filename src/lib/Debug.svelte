<script>
  import { job, flags, eventDeck, currentEvent, currentScreen, effects, text, options} from './help/stores'
  import { game } from './help/game.js'

  let hidden = true;

  let at = [
    job.promote,
    job.promote,
    job.newDepartment
  ]

  function execute() {
    for (let i = 0; i < at.length; i++) {
      at[i]()
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === '`') hidden = !hidden
  })
</script>

<div class="debug-console" class:hidden='{hidden === true}'>
  Level: {$job.currentLevel}
  Years: {$job.years}
  Department: {$job.department}
  Job Performance: {$job.performance}


  <br>
  <button on:click={job.promote}>Promote</button>
  <button on:click={job.demote}>Demote</button>
  <button on:click={() => job.performanceChange(-5)}>Down 5 Performance</button>
  <button on:click={() => job.timeChange(2)}>Add 2 years</button>
  <button on:click={job.newDepartment}>New Department</button>
  <button on:click={execute}>Test sequence</button>
  <br>
  Event Deck: {$eventDeck}
  Current Event: {$currentEvent}
  <br>
  <button on:click={() => eventDeck.add(['new event'])}>Add new event</button>
  <br>
  Effects: <br>
  {#each Object.entries($effects) as [effect, value]}
    {effect}: {value}<br>
  {/each}
  <!-- {@debug $effects} -->
  <button on:click={() => effects.toggle('flicker')}>Toggle flicker</button>
  <button on:click={() => effects.toggle('ghost')}>Toggle ghost</button>
  <button on:click={() => effects.toggle('corruption')}>Toggle corruption</button>
  <button on:click={() => effects.newSpeed(500)}>Switch typespeed</button>
  <br>
  Text: {$text} <br>
  Options: {$options}
  <button on:click={() => text.set("butt no, this is the text. butt no, this is the text. butt no, this is the text. butt no, this is the text. butt no, this is the text. butt no, this is the text. butt no, this is the text. butt no, this is the text. ")}>New text</button>
  <button on:click={() => text.set("wait this is the text now butt no, this is the text. butt no, this is the text. butt no, this is the text. butt no, this is the text. butt no, this is the text. ")}>New text 2</button>

  <button on:click={() => game.loadScreen($currentEvent, $currentScreen)}>Load text</button>
  <button on:click={() => game.eventAdvance($currentEvent, $currentScreen, 1)}>Select option 1</button>

</div>

<style>
  .hidden {
    display: none;
  }
</style>