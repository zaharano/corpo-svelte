<script>
  import TypeOut from "../TypeOut.svelte"
  import Options from "../Options.svelte"
  import Header from "./Header.svelte"
  import Footer from "./Footer.svelte"
  import Popup from "../Popup.svelte"

  import { displayText, displayOptions } from '../help/stores'

  // TODO: figure out what to do with the scrollbar styling
  // TODO: the prop passing text (which is useless) is causing the repaint so we need to figure out how to do without
</script>

<div>
  <Header />
  <main>
    {#if $displayText}
      <TypeOut />
    {/if}
    {#if $displayOptions}
      <Options {displayOptions}/>
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

  @media (max-width: 480px) {
    div {
      font-size: 4.5vmin;
    }
    main {
      min-height: 80vh;
    }
  }

  main::-webkit-scrollbar {
    width: 10px;
  }

  main::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  main::-webkit-scrollbar-thumb {
    background-color: var(--text);
    -webkit-border-radius: 1px;
  }
</style>
