<script>
  import Option from "./Option.svelte"

  import { fly } from 'svelte/transition'
  import { textLoaded } from "./help/stores"
  
  export let displayOptions;
</script>

<div class="options">
  {#if $textLoaded }
    {#each $displayOptions as option, idx}
      <div in:fly={{ delay: idx * 700 + 500 }}>
        <Option {idx} {...option}/> 
      </div>
    {/each}
  {/if}
</div>


<style>
  .options {
    margin: .5em 0;
  }
  div {
    will-change: opacity, color;
  }
</style>