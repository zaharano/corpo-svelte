<script>
  import {onMount} from 'svelte';

  export let content = 'This is the default text content for the TypingOut component.';
  export let typeSpeed = 50;
	
  let cArr = content.split("");
  let domArr = [];
	let container;
  let timer = null;
  let clear;

  function seq() {
    let added = 0;
    let revealed = 0;
    
    for (let i = 0; i < cArr.length; i++) {
      addCharacter(cArr[added], added)
      added++;
    }

    timer = setInterval(() => {
      let prev = document.querySelector('.burn');
      if (prev) {
        prev.classList.remove('burn');
      }
      if (revealed < cArr.length) {
        revealCharacter(revealed)
        revealed++;
      }
      else {
        clearInterval(timer);
      }
    }, typeSpeed);
  }
  // TODO: make interval slightly random?
  // TODO: fix for line breaks emerging as text is added
  // make append happen immediately but cache the array of characters as they are added. Then use the interval to change classes to make opaque and animate

  function addCharacter(c, count) {
    const child = document.createElement('span');
    child.id = `c${count}`
    child.textContent = c;
    child.classList.add('hidden');
    container.appendChild(child);
  }

  function revealCharacter(count) {
    const selected = document.querySelector(`#c${count}`)
    selected.classList.add('burn')
    selected.classList.remove('hidden')
  }

	onMount(() => {
    seq();
    // seq will need to fire on any change of the text.
    clear = function() {
      while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
  }
	});

</script>

<div class='typeOut-container' bind:this={container} on:click={clear()}/>

<style>
  :global(.burn) {
    color: hsl(177, 64%, 95%);
    text-shadow: 0px 0px 9.12281px white, 0px 0px 54.7368px white;
    animation: burn 600ms linear 1 forwards;
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

  :global(.hidden) {
    opacity: 0;
  }
</style>