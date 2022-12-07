<script>
  import TypeOut from './lib/TypeOut.svelte';
  import Runner from './lib/screens/Runner.svelte';
  import Megacorp from './lib/screens/Megacorp.svelte';
  import ScreenHousing from './lib/ScreenHousing.svelte';
  import ScreenFx from './lib/screens/ScreenFx.svelte';
  import TextContent from './lib/screens/TextContent.svelte';
</script>

<main>
  <div class="app-container">
    <div class='screen-container'>
      <ScreenHousing />
      <ScreenFx>
        <TextContent slot='content' >
          <TypeOut slot='text'  />
        </TextContent>
      </ScreenFx>
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
