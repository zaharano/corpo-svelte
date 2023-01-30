<script>
  import { job, flags, eventDeck, currentEvent } from '../help/stores.js'

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
</script>

Level: {$job.currentLevel}
Years: {$job.years}
Department: {$job.department}
Job Performance: {$job.performance}

Event Deck:
Current Event:

<button on:click={job.promote}>Promote</button>
<button on:click={job.demote}>Demote</button>
<button on:click={() => job.performanceChange(-5)}>Down 5 Performance</button>
<button on:click={() => job.timeChange(2)}>Add 2 years</button>
<button on:click={job.newDepartment}>New Department</button>
<button on:click={execute}>Test sequence</button>