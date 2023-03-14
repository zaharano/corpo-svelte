<script>
  import { job, effects, currentEventTitle } from './help/stores'
  import { game } from './help/game.js'

  let hidden = true;

  document.addEventListener("keydown", (e) => {
    if (e.key === '`') hidden = !hidden
  })
</script>

<div class="debug-console" class:hidden='{hidden === true}'>
  Level: {$job.level}
  Years: {$job.years}
  Department: {$job.department}
  Job Performance: {$job.performance}
  Enemies: {$job.enemies}


  <br>
  <button on:click={job.promotion}>Promote</button>
  <button on:click={job.demotion}>Demote</button>
  <button on:click={() => job.performanceChange(-5)}>Down 5 Performance</button>
  <button on:click={() => job.timePassed(2)}>Add 2 years</button>
  <button on:click={() => job.newDepartment()}>New Department</button>
  <button on:click={() => job.newEnemy()}>New Enemy</button>
  <br>
  
  Current Event: {$currentEventTitle}
  <br>
  <button on:click={() => {
    game.eventAdvance(null, 'merleApproves')
  }}>Test event advance</button>
  <br>
  Effects: <br>
  {#each Object.entries($effects) as [effect, value]}
    &nbsp{effect}: {value}  ---  
  {/each}
  <!-- {@debug $effects} -->
  <button on:click={() => effects.toggle('flicker')}>Toggle flicker</button>
  <button on:click={() => effects.toggle('ghost')}>Toggle ghost</button>
  <button on:click={() => effects.toggle('corruption')}>Toggle corruption</button>
  <button on:click={() => effects.newSpeed(500)}>Switch typespeed</button>
  <br>

  <!-- <button on:click={() => game.loadScreen($currentEvent, $currentScreen)}>Load text</button> -->
  <!-- <button on:click={() => game.eventAdvance($currentEvent, $currentScreen, 1)}>Select option 1</button> -->

</div>

<style>
  .hidden {
    display: none;
  }
</style>