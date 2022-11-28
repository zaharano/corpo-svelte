<script>
  import {onMount} from 'svelte';

  export let content = 'This is the default text content for the TypingOut component.';
	
  let cArr = content.split("");

	let container;

  let timer = null;
  function seq(){
    let count = 0;

    timer = setInterval(function(){
      let prev = document.querySelector('.burn');
      if (prev) {
        prev.classList.remove('burn');
      }
      if (count < cArr.length) {
        type(cArr[count])
        count++;
      }
      else {
        clearInterval(timer);
      }
    }, 50);
  }
  // make interval slightly random

  function type(c) {
    const child = document.createElement('span');
    child.textContent = c;
    child.classList.add('burn');
    container.appendChild(child);
  }

	onMount(() => {
    seq();
	});

</script>

<div class='typeOut' bind:this={container}/>

<style>
  div {
    position: absolute;
    text-align: left;
    top: 17%;
    left: 17.5%;
    width: 65%;
    height: 60%;
    font-family: 'Rubik Mono One', Courier, monospace;
    font-weight: 400;
    font-size: 2.5vmin;
    color: #8fe6e2;
    text-shadow: 0px 0px 9.12281px rgba(73, 193, 188, 0.8),
      0px 0px 54.7368px #49c1bc;
    filter: blur(0.04em);
  }

  :global(.typeOut > *) {
    animation: burn 300ms linear 1 forwards;
  }
</style>