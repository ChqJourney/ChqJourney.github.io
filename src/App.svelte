<script context="module" type="ts">
  import { Howl, Howler } from "howler";
  export const sound = new Howl({
    src: ["effects.mp3"],
    sprite: {
      success: [316, 2100],
      wrong: [2824, 1700],
      correct: [6334, 1200],
      timeout: [7686, 2100],
      start: [10106, 2050],
    },
  });

</script>
<script lang="ts">
  import "./app.css";
  import { Router, Route } from "svelte-routing";
  import Home from "./home.svelte";
  import Focus from "./pages/focus.svelte";
  import Calculator from "./pages/calculator.svelte";
  import Remember from "./pages/remember.svelte";
  import Test from "./pages/test.svelte";
  export let url = "";
</script>

<main>
  <Router url={url}>
    <Route path="/focus" component={Focus} />
    <Route path="/calculator" component={Calculator} />
    <Route path="/remember" component={Remember} />
    <Route path="/test" component={Test} />
    <Route path="/" component={Home}/>
  </Router>
</main>

<style>
  main {
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
</style>
