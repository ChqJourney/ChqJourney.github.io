<script type="ts">
  import {
    createTis,
    focusData,
    setRecords,
    setStatus,
    setTimer,
    showModal,
  } from "../../stores/focusStore";
  import {
    readRecords,
    validateAndPersistanceRecords,
  } from "../../funcs/common";
  import ArrayOpts from "./arrayOpts.svelte";
  import { sound } from "../../App.svelte";
  import PaTimer from "../public/timer/paTimer.svelte";
  import { beforeUpdate, onMount, tick } from "svelte";


  let store;
  beforeUpdate(() =>
    focusData.subscribe((val) => {
      store=val
    })
  );
  const showTxt = {
    idle: "Start",
    running: "Stop",
    success: "done",
  };
  const btnAction = () => {
    showModal()
    // switch (store.status) {
    //   case "idle":
    //     createTis();
    //     sound.play("start");
    //     setTimeout(() => {
    //       setStatus("running");
    //       setTimer("running");
    //     }, 1000);

    //     break;
    //   case "running":
       
    //     setTimer("pending");
    //     let confirm=window.confirm('if stop game?')
    //   if(confirm){

    //     setTimer('reset')
    //     setStatus("idle");
    //   }else{
    //     setTimer('running')
    //   }
    //     break;
    //   case "pending":
    //     setStatus("running");
    //     break;
    // }
  };
  
  const onStop = (e: any) => {
    if (store.status !== "success") return;
      sound.play("success");
      const newRecord = {
        elapseTime: (
          store.roundTime -
          e.detail.currentTime / 1000
        ).toFixed(2),
        user: localStorage.getItem("user"),
        createdAt: new Date().toLocaleString(),
        dimension: store.dimension,
      };
      const existRecords = readRecords(store.dimension);
      const updateRecords = validateAndPersistanceRecords(
        existRecords,
        newRecord
      );
      var str = localStorage.getItem("focus-records");
      let obj: any = str ? JSON.parse(str) : {};
      localStorage.removeItem("focus-records");
      obj[`level${store.dimension}`] = [...updateRecords];
      localStorage.setItem("focus-records", JSON.stringify(obj));
      const records = readRecords(store.dimension);
      setRecords(records);
      setTimeout(() => {setTimer('reset');setStatus("idle");}, 1000);
    
  };
</script>

<div class="h-10 sm:h-12 w-full">
  <PaTimer
    operation={store.timerStatus}
    interval={100}
    duration={store.roundTime}
    on:stop={onStop}
    on:timeup={() => {sound.play('timeout');setTimeout(() => {setStatus("idle");setTimer('reset')}, 1000);}}
  />
  <ArrayOpts />
  <button
    class="btnPrimary mx-1 w-16 text-sm sm:text-md sm:w-24 sm:h-8"
    on:click={btnAction}>{showTxt[store.status]}</button
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
