<script>
  import Screen from './Components/Screen.svelte'
  import TypeOut from './lib/TypeOut.svelte';
  import Runner from './lib/Runner.svelte';
</script>

<main>
  <div class="app-container">
    <div class='screen-container'>
      <Screen />
      <div class='screen-type-container'>
        <!-- <TypeOut content="It's your first day in the mail room at Megacorp! Thanks to your shady Uncle Harrison, Director of South American Regional Logistics, you've been given your shot at the corporate world. The mail room isn't the best shot, seeing as it's the year 2085 and nobody sends mail any more, but it's the one you've been given so damnit you're gonna give it your all! Your manager Merle has been at Megacorp for 30 years, and is eager to show you the ropes." typeSpeed={4} /> -->
        <Runner />
      </div>
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
  .screen-type-container {
    position: absolute;
    top: 18%;
    left: 17.5%;
    width: 65%;
    height: 60%;
  }
</style>
