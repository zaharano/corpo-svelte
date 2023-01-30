<script>
  import TypeOut from "../TypeOut.svelte"
  import Options from "../Options.svelte"
  import Header from "./Header.svelte"
  import Footer from "./Footer.svelte"

  export let content = "You're the Vice President of Nanotechnology at Megacorp! You're a VP. After years of fastidious boot-licking, you're in upper management. The vacation package alone makes it all worth while. After one year in the role, you're forced out because they're 'taking the company in another direction.'"
  export let typeSpeed = 20
</script>

<div>
  <Header />
  <main>
    <TypeOut {content} {typeSpeed} />
    <Options />
  </main>
  <Footer />
</div>

<style>
  div {
    text-align: left;
    line-height: 1.2;
    font-family: var(--primary-font);
    /* font-weight: 800; */
    font-size: 2.3vmin;
    color: var(--text);
    text-shadow: var(--text-glow);
    filter: blur(0.03em);
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  main {
    overflow: scroll;
    scroll-behavior: smooth;
    padding-top: .5em;
    flex-grow: 2;
  }
</style>