<script>
  import screen from './assets/blue-screen-1.svg'
</script>

<main>
  <div class="app-container">
    <div class='screen-container'>
      <img src={screen} alt='screen' />
      <div class='screen-type-container'>
        <div class='screen-type-title'>ENVIRON CTR</div>
        *************************** <br />-
        &nbsp;&nbsp;###################&nbsp;&nbsp; - <br /> -
        &nbsp;&nbsp;###################&nbsp;&nbsp; - <br /> -
        &nbsp;&nbsp;###################&nbsp;&nbsp; - <br /> -
        &nbsp;&nbsp;92886599 | 95654085&nbsp;&nbsp; - <br /> -
        &nbsp;&nbsp;###################&nbsp;&nbsp; - <br /> -
        &nbsp;&nbsp;###################&nbsp;&nbsp; - <br /> -
        &nbsp;&nbsp;###################&nbsp;&nbsp; - <br /> -
        &nbsp;&nbsp;###################&nbsp;&nbsp; - <br />
        ***************************
        <div class='screen-type-title'>
          24556&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DR&nbsp;&nbsp;&nbsp; 5
        </div>
        &nbsp;
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
    top: 17%;
    left: 17.5%;
    width: 65%;
    height: 60%;
    font-family: 'Rubik Mono One', Courier, monospace;
    font-weight: 400;
    font-size: 2.5vmin;
    text-align: center;

    color: #8fe6e2;

    text-shadow: 0px 0px 9.12281px rgba(73, 193, 188, 0.8),
      0px 0px 54.7368px #49c1bc;
    filter: blur(0.07em);
  }

  .screen-type-title {
    font-family: Rubik;
    font-size: 7vmin;
    font-weight: 600;
  }
</style>
