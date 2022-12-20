<script>
  import MainDisplay from "./MainDisplay.svelte";
  import TypeOut from "../TypeOut.svelte";
  import Options from "../Options.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte"
</script>

<div>
  <Header />
  <MainDisplay>
    <TypeOut slot='text' content="You're the Vice President of Nanotechnology at Megacorp! You're a VP. After years of fastidious boot-licking, you're in upper management. The vacation package alone makes it all worth while. After one year in the role, you're forced out because they're 'taking the company in another direction.' Seems you took a little too long to get here. But with the severance you buy an island. Enjoy retirement! This is just to write a little more and maybe make this go a bit past the bottom and we can see how it goes!" typeSpeed=1 />
    <Options slot='options' />
  </MainDisplay>
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
</style>