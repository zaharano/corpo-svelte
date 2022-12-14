<script>
  import TypeOut from './lib/TypeOut.svelte';
  import Runner from './lib/screens/Runner.svelte';
  import Megacorp from './lib/screens/Megacorp.svelte';
  import ScreenHousing from './lib/ScreenHousing.svelte';
  import ScreenFx from './lib/screens/ScreenFx.svelte';
  import Display from './lib/screens/Display.svelte';
  import Tracker from './lib/Tracker.svelte';
  import Options from './lib/Options.svelte';
  import Header from './lib/screens/Header.svelte'
  import Footer from './lib/screens/Footer.svelte'
</script>

<main>
  <div class="app-container">
    <div class='screen-container'>
      <ScreenHousing />
      <ScreenFx>
        <Display slot='content' >
          <Header slot='header'/>
          <TypeOut slot='text'  />
          <Options slot='options' />
          <Tracker slot='tracker' />
          <Footer slot='footer'/>
        </Display>
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
