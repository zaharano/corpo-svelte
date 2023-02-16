<script>
  import Runner from './lib/screens/Runner.svelte';
  import Megacorp from './lib/screens/Megacorp.svelte';
  import ScreenHousing from './lib/ScreenHousing.svelte';
  import Display from './lib/screens/Display.svelte';
  import Debug from './lib/Debug.svelte';
  import ScreenEffects from './lib/ScreenEffects.svelte';
  
  import { onMount } from 'svelte';

  import { inGame } from './lib/help/stores';

  let loadingInterval;
  let loaded = false;

  onMount(() => {
    loadingInterval = setTimeout(() => {
      loaded = true;
    }, 200)
  })
</script>

<Debug />
<main>
  <div class="app-container">
    <div class='screen-container'>
      <ScreenHousing />
      <ScreenEffects>
        {#if !$inGame}
          {#if !loaded}
            <Runner />
          {:else}
            <Megacorp slot='content'/>
          {/if}
        {:else}
          <Display slot='content' />
        {/if}
      </ScreenEffects>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
  }
  
  .app-container {
    background-color: #282c34;
    min-height: 97.8vh;
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
