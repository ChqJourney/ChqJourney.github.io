<script lang="ts">
  import { afterUpdate, createEventDispatcher } from "svelte";

  export let duration: number;
  export let operation: string = "idle";
  export let noBoard = false;
  
  const boardCss=`${
    noBoard ? "" : "border"
  }`
  let interval = null;
  $: reminder = false;
  $: sec = duration * 1000;
  const basicCss=`${
    reminder ? "animate-pulse border-red-500" : "border-sky-400"
  } text-sm sm:text-xl  text-center rounded-md px-1 mx-1 justify-center text-lime-700 flex items-center font-sans`
  console.log(`${basicCss.concat(" ").concat(boardCss)}`)
  const dispatch = createEventDispatcher();
  const startAction = () => {
    if (sec > 0) {
      interval = setInterval(() => (sec = sec - 100), 100);
    }
  };
  const stopAction = () => {
    if (interval) {
      clearInterval(interval);
    }
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
        if(sec!==duration*1000){
          dispatch("stopped",{elapsed:sec})
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
        dispatch("pending",{elapsed:sec});
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

<div
  class={`${basicCss.concat(" ").concat(boardCss)}`}
>
  {timeFormat(sec)}
</div>
