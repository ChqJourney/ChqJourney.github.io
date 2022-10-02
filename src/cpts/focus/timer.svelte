<script lang="ts">
import { readRecords, validateAndPersistanceRecords } from "../../funcs/common";

  import { afterUpdate, onDestroy, createEventDispatcher, beforeUpdate } from "svelte";
  import { focusData } from "../../stores/focusStore";

  export let duration: number;
  export let operation: string = "idle";
  const updateLocalStorage=()=>{
    const newRecord={elapseTime:(duration-sec/1000).toFixed(2),user:localStorage.getItem('user'),createdAt:new Date().toLocaleString(),dimension:$focusData.dimension}
    const existRecords=readRecords($focusData.dimension)
    const updateRecords=validateAndPersistanceRecords(existRecords,newRecord)
    var str=localStorage.getItem('focus-records');
        let obj:any=str?JSON.parse(str):{}
    localStorage.removeItem('focus-records')
    obj[`level${$focusData.dimension}`]=[...updateRecords]
    localStorage.setItem('focus-records',JSON.stringify(obj))
    $focusData.records=readRecords($focusData.dimension)
  }
  $: dur = duration * 1000;
  $: oper = operation;
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
    
    
    setTimeout(() => {sec = duration * 1000;$focusData.status='idle';}, 1000);
  };
  afterUpdate(() => {
    switch (oper) {
      case "running":
        if (sec === dur) {
          startAction();
        }
        if (sec === 0) {
          stopAction();
          dispatch("timeout");
        }
        break;
      case "idle":
      if (interval) {
      clearInterval(interval);
    }
    
    setTimeout(() => {sec = duration * 1000;}, 1000);
        break;
      case "pending":
        if (interval) {
          clearInterval(interval);
        }
        dur = sec;
        dispatch("pending");
        break;
      case "success":
        stopAction()
        $focusData.leftTime = sec;
        
        updateLocalStorage();

        // $focusData.arr=new Array($focusData.dimension*$focusData.dimension)
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
  class={`${
    reminder ? "animate-pulse border-red-500" : "border-sky-400"
  } text-sm sm:text-xl border text-center rounded-md px-1 mx-1 justify-center text-lime-700 flex items-center font-sans`}
>
  {timeFormat(sec)}
</div>

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
