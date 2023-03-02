<script>
  import { eventAdvance } from './help/game'

  export let text;
  export let idx;
  export let effects;
  export let next;
</script>

<button on:click={() => eventAdvance(effects, next)} class='option'>
  <span class="option-num">{idx}.</span><span class="option-text">{text}</span>
</button>

<style>
  .option {
    padding: .4em;
    background-color: inherit;
    border: none;
    color: inherit;
    display: block;
    text-shadow: inherit;
    width: 100%;
    text-align: inherit;
    display: flex;
    flex-direction: row;
    font-family: var(--primary-font);
    font-size: inherit;
  }

  .option:hover {
    background-color: var(--text);
    box-shadow: var(--box-glow);
    color: var(--inversion);
  }

  .option-num {
    margin-right: 1em;
    font-weight: 700;
    font-size: 110%;
  }
</style>