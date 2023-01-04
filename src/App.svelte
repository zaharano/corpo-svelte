<script>
  import Runner from './lib/screens/Runner.svelte';
  import Megacorp from './lib/screens/Megacorp.svelte';
  import ScreenHousing from './lib/ScreenHousing.svelte';
  import Display from './lib/screens/Display.svelte';
  import ScreenContent from './lib/screens/ScreenContent.svelte';
  
  import { onMount } from 'svelte';

  let loading = 3;
  let loadingInterval;

  onMount(() => {
    loadingInterval = setInterval(() => {
      console.log(loading)
      loading += 1;
      if (loading > 3) {clearInterval(loadingInterval)}
    }, 3000)
  })
</script>

<main>
  <div class="app-container">
    <div class='screen-container'>
      <ScreenHousing />
      <ScreenContent>
        {#if loading <= 1}
          <Runner />
        {:else if loading == 2}
          <Megacorp slot='content'/>
        {:else}
          <Display slot='content' />
        {/if}
      </ScreenContent>
      
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
  }
  .app-container {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .screen-container {
    width: 100vmin;
    position: absolute;
  }

</style>
