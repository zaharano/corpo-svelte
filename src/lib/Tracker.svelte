<script>
  import { onMount } from 'svelte';

  import Timer from '../help/timer.js'
  import department from '../help/department.js';

  let workTimer = new Timer('work');
  let inactiveTimer = new Timer('inactive');
  let workTimeDisplay;
  let idleTimeDisplay;
  let idleTracker;

  let timeDisplayInterval;
  let idleDisplayInterval;

  let dept;

  function clockIn() {
    timeDisplayInterval = setInterval(() => {
      const timeInSeconds = Math.round(inactiveTimer.time() / 1000);
      workTimeDisplay = timeInSeconds;
    }, 100)
    idleDisplayInterval = setInterval(() => {
      const timeInSeconds = Math.round(workTimer.time() / 1000);
      idleTimeDisplay = timeInSeconds;
    }, 100)

    workTimer.start();
    resetIdle();
  }

  function resetIdle() {
    if (inactiveTimer.isRunning) {
      inactiveTimer.stop();
    }
    clearTimeout(idleTracker);
    idleTracker = setTimeout(inactive, 2000);
  }

  function inactive() {
    inactiveTimer.start();
  }

  function genDepartment() {
    dept = department();
  }

  onMount(() => {
    clockIn();
	});

</script>

<svelte:window 
  on:keydown={resetIdle} 
  on:mousemove={resetIdle} 
  on:click={resetIdle}
/>

<span on:click={genDepartment}>{workTimeDisplay} {idleTimeDisplay} {dept}</span>

<style>
  span {
    text-align: center;
    width: 100%;
    line-height: 1.1;
    font-family: 'Digital-7';
    color: hsla(0, 100%, 50%, 1);
    text-shadow: 0px 0px 9.12281px hsla(0, 100%, 50%, .8),
      0px 0px 54.7368px hsla(0, 100%, 50%, 1);
    filter: blur(0.03em);
    position: absolute;
    bottom: 0;
  }
</style>