<script lang="ts">
  import "./app.css";
  import { Router, Link, Route } from "svelte-routing";
import Home from "./home.svelte";
import Focus from "./pages/focus.svelte";
import Calculator from "./pages/calculator.svelte";
  export let url = "";
</script>

<main>

  <Router url="{url}">
    <Route path="focus" component={Focus} />
    <Route path="calculator" component={Calculator}/>
    <Route path="/"><Home /></Route>
  </Router>
</main>

<style>
  main{
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
</style>