<script>
  import Button from "./Button.svelte";
  import { displayAlert, listening } from "./help/stores";

  let visible = false;

  $: onAlertChange($displayAlert)

  function onAlertChange(alert) {
    if (alert === '') return
    listening.set(false);
    visible = true;
  }

  function clickHandler() {
    visible = false
    listening.set(true)
  }
</script>

{#if $displayAlert}
  <div class="popup-container">
    <div class="popup" class:closed='{visible === false}'>
      {$displayAlert}
      <Button {clickHandler} text={'OK'} />
    </div>
  </div>
{/if}

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
    background-color: #282c34;
    border: 3px solid var(--text);
    box-shadow: var(--text-glow);
    margin: auto;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    pointer-events: all;
  }
</style>