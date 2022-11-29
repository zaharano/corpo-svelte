<script>
  import {onMount} from 'svelte';

  export let content = 'This is the default text content for the TypingOut component.';
  export let typeSpeed = 50;
	
  let cArr = content.split("");
	let container;
  let timer = null;

  function seq() {
    let count = 0;

    timer = setInterval(() => {
      let prev = document.querySelector('.burn');
      if (prev) {
        prev.classList.remove('burn');
      }
      if (count < cArr.length) {
        key(cArr[count])
        count++;
      }
      else {
        clearInterval(timer);
      }
    }, typeSpeed);
  }
  // TODO: make interval slightly random?

  function key(c) {
    const child = document.createElement('span');

    child.textContent = c;
    child.classList.add('burn');
    container.appendChild(child);
  }

	onMount(() => {
    seq();
	});

</script>

<div class='typeOut-container' bind:this={container}/>

<style>
  div {
    text-align: left;
    line-height: 1.1;
    font-family: 'Source Code Pro';
    /* font-weight: 800; */
    font-size: 2.3vmin;
    color: hsl(177, 62%, 63%);
    text-shadow: 0px 0px 9.12281px rgba(73, 193, 188, 0.8),
      0px 0px 54.7368px #49c1bc;
    filter: blur(0.03em);
  }

  :global(.typeOut-container > *) {
    animation: burn 400ms linear 1 forwards;
  }
  
  @keyframes burn {
    0% {
      color: hsl(177, 64%, 95%);
      text-shadow: 0px 0px 9.12281px white, 0px 0px 54.7368px white;
    }
    to {
      color: hsl(177, 62%, 63%);
      text-shadow: 0px 0px 9.12281px rgba(73, 193, 188, 0.8),
        0px 0px 54.7368px #49c1bc;
    }
  }
</style>