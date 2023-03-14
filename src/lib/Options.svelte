<script>
  import Option from "./Option.svelte"

  import { fly } from 'svelte/transition'
  import { textLoaded } from "./help/stores"
  
  export let displayOptions;
</script>

<div class="options">
  {#if $textLoaded }
    {#each $displayOptions as option, idx}
      <div in:fly={{ y: 50, duration: 1000, delay: idx * 700 + 500 }}>
        <Option {idx} {...option}/> 
      </div>
    {/each}
  {/if}
</div>


<style>
  .options {
    margin: .5em 0;
  }
</style>