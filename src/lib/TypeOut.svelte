<script>
  import { onMount } from 'svelte'
  import { textLoaded, effects, text } from './help/stores'

	$: $text, newText();
  
	let container;

  // couldn't find out other way set up the reactive func only active after mount
  let newText = () => { };

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
    child.classList.add('burning');
    container.appendChild(child);
  }

  function revealCharacter(count) {
    const selected = document.querySelector(`#c${count}`)
    selected.classList.remove('hidden')
    selected.classList.remove('burning')
  }

	onMount(() => {
    newText = () => {
      clear()
      let content = $text;
      let cArr = content.split("")
      let timer = null

      let added = 0;
      let revealed = 0;
      
      for (let i = 0; i < cArr.length; i++) {
        addCharacter(cArr[added], added)
        added++;
      }

      timer = setInterval(() => {
        if (revealed < cArr.length) {
          revealCharacter(revealed)
          revealed++;
        }
        else {
          setTimeout(() => {
            textLoaded.set(true)
          }, 500);
          clearInterval(timer);
        }
      }, $effects.typeSpeed);
    }
    newText();
	});

</script>

<div class='typeOut-container' bind:this={container} />

<style>
  .typeOut-container {
    transition: color 1s, text-shadow 1s;
    /* filter: drop-shadow(0 0 55px white) */
  }

  .typeOut-container :global(span) {
    transition: color 1.2s, text-shadow 1.2s;
  }

  .typeOut-container :global(.burning) {
    color: hsl(177, 64%, 95%);
    text-shadow: 0px 0px 9.12281px hsl(0, 0%, 100%), 0px 0px 54.7368px hsl(0, 0%, 100%);
    /* filter: drop-shadow(0 0 55px hsl(178, 49%, 52%)); */
  }

  :global(.hidden) {
    opacity: 0;
  }
</style>