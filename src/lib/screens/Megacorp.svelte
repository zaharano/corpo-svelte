<div class='container'>
  <pre>
███╗   ███╗███████╗ ██████╗  █████╗  ██████╗ ██████╗ ██████╗ ██████╗ 
████╗ ████║██╔════╝██╔════╝ ██╔══██╗██╔════╝██╔═══██╗██╔══██╗██╔══██╗
██╔████╔██║█████╗  ██║  ███╗███████║██║     ██║   ██║██████╔╝██████╔╝
██║╚██╔╝██║██╔══╝  ██║   ██║██╔══██║██║     ██║   ██║██╔══██╗██╔═══╝ 
██║ ╚═╝ ██║███████╗╚██████╔╝██║  ██║╚██████╗╚██████╔╝██║  ██║██║     
╚═╝     ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     
                                                             
  </pre>
  <ul class='menu'>
    <li>PUNCH IN</li>
    <li>OPTIONS</li>
  </ul>
</div>


<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 108%;
    transform: scale(1.2);
    color: hsl(177, 62%, 63%);
  }

  pre {
    font-size: calc(3px + 1vmin);
    color: hsl(177, 62%, 63%);
    text-shadow: 0px 0px .5em hsla(178, 49%, 52%, 0.8),
      0px 0px 5em hsla(178, 49%, 52%, 0.6);
    filter: blur(0.1em);
    opacity: .9;
  } 

  ul {
    list-style-type: none;
    margin: 0;
  }

  li {
    padding: .5em;
    color: var(--text);
  }

  li:hover {
    background-color: var(--text);
    color: var(--inversion);
  }

</style>