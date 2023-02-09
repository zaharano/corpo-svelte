<script>
  import TypeOut from "../TypeOut.svelte"
  import Options from "../Options.svelte"
  import Header from "./Header.svelte"
  import Footer from "./Footer.svelte"
  import Popup from "../Popup.svelte"
  import { onMount } from "svelte"

  import { text, options, currentEvent, currentScreen, textLoaded} from '../help/stores'

  // TODO: figure out what to do with the scrollbar styling
  // TODO: the prop passing text (which is useless) is causing the repaint so we need to figure out how to do without
  function cycleDisplay() {
    textLoaded.set(false);
    text.set($currentEvent[$currentScreen].text);
    options.set($currentEvent[$currentScreen].opts);
  }

  onMount(() => {
    cycleDisplay();
  });
</script>

<div>
  <Header />
  <main>
    {#if text}
      <TypeOut />
    {/if}
    {#if options}
      <Options {options} {cycleDisplay}/>
    {/if}
  </main>
  <Footer />
  <Popup />
</div>

<style>
  div {
    text-align: left;
    line-height: 1.2;
    font-size: 2.3vmin;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  main {
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding-top: .5em;
    flex-grow: 2;
    scrollbar-color: var(--text) rgba(0, 0, 0, 0);
  }

  main::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  main::-webkit-scrollbar-thumb {
    background-color: var(--text);
    border-radius: 0px;
  }
</style>
