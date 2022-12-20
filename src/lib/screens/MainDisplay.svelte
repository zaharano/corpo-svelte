<div>
  <slot name='text'>No defined text</slot>
  <slot name='options'>No defined options</slot>
</div>

<style>
  div {
    overflow: scroll;
    scroll-behavior: smooth;
    padding-top: .5em;
    flex-grow: 2;
  }

  div::-webkit-scrollbar {
    visibility: hidden;
  }

  div::-webkit-scrollbar-thumb {
    visibility: hidden;
  }
</style>