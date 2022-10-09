<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount, tick } from "svelte";
  import { createRandomRememberArray } from "../../funcs/common";
  import { rememberData } from "../../stores/rememberStore";
  import ArrayOpts from "../focus/arrayOpts.svelte";
  import Counter from "../public/counter.svelte";
  import Timer from "../public/timer.svelte";
  import Blocks from "./blocks.svelte";

  $: start='idle'
  const startAction = () => {
    $rememberData.status = "running";

    for (let index = 0; index < $rememberData.dimension; index++) {
        const ar = createRandomRememberArray(3, 9);
        $rememberData.arr[index] = { blocks: ar };
    }
    $rememberData.arr[$rememberData.current].blocks
    $rememberData.showIdx = [1,2,3];
    setTimeout(() => {
      $rememberData.showIdx = [];
      start='running'
    }, 1000);

  };
  const triggerCounter=async()=>{
    // start='idle'
    $rememberData.arr[$rememberData.current].verdict=false
    $rememberData.current++
    // await tick()
    start='idle'
    $rememberData.showIdx=[1,2,3]
    setTimeout(() => {
      $rememberData.showIdx = [];
      start='running'
    }, 1000);
  }
</script>

<div class="text-xs sm:text-lg">
  <div class="flex justify-between items-center my-1 px-2">
    <div class="text-xs sm:text-lg">
      <span class="">Level:</span>
      <select class=" rounded-md px-1" title="level">
        <option>简单</option>
        <option>普通</option>
        <option>困难</option>
      </select>
    
    </div>
    <button class="btnPrimary" on:click={startAction}>Start</button>
  </div>
  <div class="flex justify-between items-center my-1 px-2">
    <div>
      <span>Error:</span>
      <span>1</span>
    </div>
    <Counter total={$rememberData.arr.length} idx={$rememberData.current}/>
    <Timer duration={5} operation={start} on:timeout={triggerCounter}/>
  </div>
  <Blocks
    tis={$rememberData.arr[$rememberData.current]}
    status={$rememberData.status}
  />
</div>
