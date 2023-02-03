<div class="popup-container">
  <div class="popup">
    this is some conceptual popup text. testing to see where this goes and I think it's a propblem
    <button>OK</button>
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
  }
  .popup {
    background-color: black;
    border: 3px solid var(--text);
    box-shadow: var(--text-glow), var(--text-glow) inset;
    margin: auto;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
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
  }
</style>