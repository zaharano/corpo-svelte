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
    }, 5000)
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
    <span class="info">
      Just the prologue for now while I write the rest!
      <a href="https://github.com/zaharano/corpo-svelte" target="_blank" rel="noopener noreferrer">Check out the repo</a>
    </span>
  </div>
</main>

<style>
  main {
    text-align: center;
  }
  
  .app-container {
    background-color: #282c34;
    /* background: rgb(4,13,12);
    background: linear-gradient(180deg, rgba(4,13,12,1) 0%, rgba(2,51,40,1) 78%, rgba(0,36,29,1) 80%, rgba(3,92,80,1) 100%);     */
    min-height: 98vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .info {
    font-size: .5em;
    position: absolute;
    bottom: 0;
    margin-bottom: 2em;
  }

  .info a {
    color: white;
  }

  .info a:hover {
    color: #8fe6e2;
  }

  .screen-container {
    width: 100vmin;
    position: absolute;
  }

  @media (max-width: 480px) {
    .app-container {
      min-height: 98vh;
      justify-content: inherit;
      font-size: calc(16px + 2vmin);
    }
    .screen-container {
      width: 100%;
      height: 100%;
      position: static;
    }
  }

</style>
