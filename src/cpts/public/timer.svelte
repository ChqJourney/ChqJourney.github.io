<script lang="ts">
  import { afterUpdate, createEventDispatcher } from "svelte";

  export let duration: number;
  export let operation: string = "idle";
  export let noBoard = false;
  $: dur = duration * 1000;
  let interval = null;
  $: reminder = false;
  $: sec = duration * 1000;
  const dispatch = createEventDispatcher();
  const startAction = () => {
    if (sec !== 0) {
      interval = setInterval(() => (sec = sec - 100), 100);
    }
  };
  const stopAction = () => {
    if (interval) {
      clearInterval(interval);
    }

    setTimeout(() => {
      sec = duration * 1000;
      operation = "idle";
    }, 1000);
  };
  afterUpdate(() => {
    switch (operation) {
      case "running":
        
        if (interval === null) {
          startAction();
          dispatch("start");
        }
        if (sec === 0) {
          stopAction();
          dispatch("timeout");
        }
        break;
      case "idle":
        if (interval) {
          clearInterval(interval);
          interval = null;
        }

        setTimeout(() => {
          sec = duration * 1000;
        }, 1000);
        break;
      
      case "pending":
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
        dur = sec;
        dispatch("pending");
        break;
      case "success":
        stopAction();
        dispatch("success", { leftTime: sec / 1000 });
        break;
    }
  });
  const timeFormat = (t: number = 0) => {
    let initNum = Math.ceil(t / 1000) % 3600;
    const sec = initNum % 60;
    const min = Math.floor(t / 60000);
    const secStr = sec < 10 ? `0${sec}` : sec;
    const minStr = min < 10 ? `0${min}` : min;
    return `${minStr}:${secStr}`;
  };
</script>

{#if operation==='running'}
<div
  class={`${
    reminder ? "animate-pulse border-red-500" : "border-sky-400"
  } text-sm sm:text-xl {${
    noBoard ? "" : "border"
  }} text-center rounded-md px-1 mx-1 justify-center text-lime-700 flex items-center font-sans`}
>
  {timeFormat(sec)}
</div>
  {:else}
  <div class="text-sm sm:text-xl px-1 mx-1 text-center font-sans justify-center text-lime-700 flex items-center ">00:00</div>
  {/if}

<style>
  .container {
    display: flex;
    border: 1px solid skyblue;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  .container:hover {
    border: 1px solid lightcoral;
  }
</style>
