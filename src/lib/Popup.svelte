<script>
import { popupOpen } from "./help/stores";

  const clickHandler = () => {
    popupOpen.set(false);
  }
</script>

<div class="popup-container">
  <div class="popup" class:closed='{$popupOpen === false}'>
    this is some conceptual popup text. testing to see where this goes and I think it's a propblem
    <button on:click={clickHandler}>OK</button>
  </div>
</div>

<style>
  .popup-container {
    position: absolute;
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10%;
    pointer-events: none;
  }
  .popup:global(.closing) {
    pointer-events: none;
    opacity: 0;
  }
  .popup:global(.closed) {
    pointer-events: none;
    display: none;
  }
  .popup {
    background-color: black;
    border: 3px solid var(--text);
    box-shadow: var(--text-glow), var(--text-glow) inset;
    margin: auto;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    pointer-events: all;
  }
  button {
    display: block;
    box-shadow: var(--line-glow), var(--line-glow) inset;
    background-color: rgba(0,0,0,0);
    color: var(--text);
    border: 3px solid var(--text);
    padding: 3px 10px;
    font-size: inherit;
    font-family: inherit;
    margin-top: 1em;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--text);
    box-shadow: var(--box-glow);
    color: var(--inversion);
  }
</style>