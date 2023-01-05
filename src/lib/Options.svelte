<script>
  import Option from "./Option.svelte"

  import { fly, fade } from 'svelte/transition'
  import { textLoaded } from "../help/stores"

  export let options = [
    {
      text: "Release this sucker and start raking in the accolades!",
    },
    {
      text: "Compromises? No. This is my magnum opus, my gift to humankind. It will be perfect or it will be nothing.",
    }
  ]
</script>

<div class="options">
  {#if $textLoaded }
    {#each options as option, idx}
      <div in:fly={{ y: 50, duration: 1000, delay: idx * 700 + 500 }}>
        <Option num={idx} {...option}/> 
      </div>
    {/each}
  {/if}
</div>


<style>
  .options {
   margin: .5em 0;
  }
</style>