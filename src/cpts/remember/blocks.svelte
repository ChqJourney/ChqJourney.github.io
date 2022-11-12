<script lang="ts">
  import Block from "./block.svelte";
  import { rememberData, type RememberTi } from "../../stores/rememberStore";
  export let tis: RememberTi;

  export let status;

  console.log($rememberData.arr);
</script>

<div class={`contain rounded-md level${$rememberData.dimension}`}>
  {#each tis.blocks as ar,i}
    <Block num={parseInt(ar)} idx={i}/>
  {/each}
</div>
 
<style>
  .contain {
    padding: 0.5rem;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.3rem;
    width: 98%;
    height: 100%;
  }
  .level3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .level4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .level5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
</style>
