<script>
  import Option from "./Option.svelte"

  import { fly } from 'svelte/transition'
  import { textLoaded, listening, currentScreen } from "./help/stores"

  export let options;
  export let cycleDisplay;
  
  function advance(effects, next) {
    listening.set(false);
    effects();
    currentScreen.set(next);
    cycleDisplay();
  }
</script>

<div class="options">
  {#if $textLoaded }
    {#each $options as option, idx}
      <div in:fly={{ y: 50, duration: 1000, delay: idx * 700 + 500 }}>
        <Option {idx} {...option} {advance}/> 
      </div>
    {/each}
  {/if}
</div>


<style>
  .options {
    margin: .5em 0;
  }
</style>