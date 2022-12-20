<script>
  import Option from "./Option.svelte";

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
  {#each options as option, idx}
   <Option num={idx} {...option}/>
  {/each}
</div>


<style>
  .options {
   margin: .5em 0;
  }
</style>