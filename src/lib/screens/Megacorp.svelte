<script>
  import Button from "../Button.svelte";
  import { initGame } from "../help/game.js"

</script>

<div class='container'>
  <pre>
███╗   ███╗███████╗ ██████╗  █████╗  ██████╗ ██████╗ ██████╗ ██████╗ 
████╗ ████║██╔════╝██╔════╝ ██╔══██╗██╔════╝██╔═══██╗██╔══██╗██╔══██╗
██╔████╔██║█████╗  ██║  ███╗███████║██║     ██║   ██║██████╔╝██████╔╝
██║╚██╔╝██║██╔══╝  ██║   ██║██╔══██║██║     ██║   ██║██╔══██╗██╔═══╝ 
██║ ╚═╝ ██║███████╗╚██████╔╝██║  ██║╚██████╗╚██████╔╝██║  ██║██║     
╚═╝     ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     
                                                             
  </pre>
  <nav class="menu">
    <Button clickHandler={initGame} text={'PUNCH IN'}/>
    <!-- <Button clickHandler={initGame} text={'LOAD'}/> -->
  </nav>
</div>


<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 108%;
    transform: scale(1.2);
  }

  pre {
    font-size: calc(3px + 1vmin);
  } 

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>