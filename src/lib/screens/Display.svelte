<script>
  import TypeOut from "../TypeOut.svelte"
  import Options from "../Options.svelte"
  import Header from "./Header.svelte"
  import Footer from "./Footer.svelte"
  import Popup from "../Popup.svelte"

  import { text, options, currentEvent, currentScreen } from '../help/stores'

  // TODO: figure out what to do with the scrollbar styling
  // TODO: the prop passing (which is useless) is causing the repaint so we need to figure out how to do without
  function cycleDisplay() {
    text.set($currentEvent[$currentScreen].text);
    options.set($currentEvent[$currentScreen].opts);
  }
</script>

<div>
  <Header />
  <main>
    <TypeOut {$text} />
    <Options {options} {cycleDisplay}/>
  </main>
  <Footer />
  <Popup />
</div>

<style>
  div {
    text-align: left;
    line-height: 1.2;
    font-family: var(--primary-font);
    font-size: 2.3vmin;
    color: var(--text);
    text-shadow: var(--text-glow);
    filter: blur(0.03em);
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
