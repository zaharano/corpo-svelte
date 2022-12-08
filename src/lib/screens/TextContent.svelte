<div class='screen-type-container'>
  <slot name='text'>No defined text</slot>
  <slot name='options'>No defined options</slot>
  <slot name='tracker'>No tracker info</slot>
</div>

<style>
  .screen-type-container {
    position: absolute;
    top: 18%;
    left: 17.5%;
    width: 65%;
    height: 60%;
  }

  div {
    text-align: left;
    line-height: 1.1;
    font-family: var(--primary-font);
    /* font-weight: 800; */
    font-size: 2.3vmin;
    color: var(--text);
    text-shadow: var(--text-glow);
    filter: blur(0.03em);
  }
</style>