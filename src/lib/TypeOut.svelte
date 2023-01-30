<script>
  import { onMount } from 'svelte'
  import { textLoaded, text } from '../help/stores'

  export let content = 'This is the default text content for the TypingOut component.';
  export let typeSpeed = 50;
	
	let container;

  function newText() {
    clear()
    let cArr = content.split("")
    let timer = null

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
        setTimeout(() => {
          textLoaded.set(true)
        }, 400);
        clearInterval(timer);
      }
    }, typeSpeed);
  }

  function clear() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
  }

  function addCharacter(c, count) {
    const child = document.createElement('span');
    child.id = `c${count}`
    child.textContent = c;
    child.classList.add('hidden');
    container.appendChild(child);
  }

  function revealCharacter(count) {
    const selected = document.querySelector(`#c${count}`)
    selected.classList.remove('hidden')
    selected.classList.add('burnt')
  }

	onMount(() => {
    newText();
	});

</script>

<div class='typeOut-container' bind:this={container} />

<style>
  .typeOut-container {
    color: hsl(177, 64%, 95%);
    text-shadow: 0px 0px 9.12281px hsl(0, 0%, 100%), 0px 0px 54.7368px hsl(0, 0%, 100%);
    /* filter: drop-shadow(0 0 55px white) */
  }

  :global(.burnt) {
    color: hsl(177, 62%, 63%);
    text-shadow: 0px 0px 9.12281px hsla(178, 49%, 52%, 0.8), 0px 0px 54.7368px hsl(178, 49%, 52%);
    /* filter: drop-shadow(0 0 55px hsl(178, 49%, 52%)); */
    transition: color 1s, text-shadow 1s;
  }

  :global(.hidden) {
    opacity: 0;
  }
</style>