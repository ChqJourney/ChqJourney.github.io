<script>

  import { createRandomArray } from "../../funcs/common";
  import { focusData } from "../../stores/focusStore";

  import ArrayOpts from "./arrayOpts.svelte";
  import Timer from "./timer.svelte";
  import {sound} from "../../pages/focus.svelte"
  
  const showTxt = { idle: "Start", running: "Stop", pending: "Resume",success:"done" };
  const btnAction = async() => {
    switch ($focusData.status) {
      case "idle":
        $focusData.arr = createRandomArray(
          $focusData.dimension * $focusData.dimension
        );
        sound.play("start")
        setTimeout(() => ($focusData.status = "running"), 1000);
        console.log($focusData.arr);
        break;
      case "running":
        $focusData.status = "idle";
        break;
      case "pending":
        $focusData.status = "running";
        break;
    }
  };
</script>

<div class="h-10 sm:h-12">
  <Timer
    operation={$focusData.status}
    duration={$focusData.roundTime}
    on:stop={() => setTimeout(() => ($focusData.status = "idle"), 1000)}
  />
  <ArrayOpts />
  <button
    class="btnPrimary mx-1 w-16 text-sm sm:text-md sm:w-24 sm:h-8"
    on:click={btnAction}>{showTxt[$focusData.status]}</button
  >
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    width: 98%;
  }
</style>
