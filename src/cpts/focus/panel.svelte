<script type="ts">
  import { createRandomArray } from "../../funcs/common";
  import { focusData } from "../../stores/focusStore";
  import {
    readRecords,
    validateAndPersistanceRecords,
  } from "../../funcs/common";
  import ArrayOpts from "./arrayOpts.svelte";
  import { sound } from "../../pages/focus.svelte";
  import PaTimer from "../public/timer/paTimer.svelte";

  const showTxt = {
    idle: "Start",
    running: "Stop",
    pending: "Resume",
    success: "done",
  };
  const btnAction = async () => {
    switch ($focusData.status) {
      case "idle":
        $focusData.arr = createRandomArray(
          $focusData.dimension * $focusData.dimension
        );
        sound.play("start");
        setTimeout(() => ($focusData.status = "running"), 1000);
        // console.log($focusData.arr);
        break;
      case "running":
        $focusData.status = "idle";
        break;
      case "pending":
        $focusData.status = "running";
        break;
    }
  };
  const onSuccess = (e: any) => {
    sound.play("success");
    const newRecord = {
      elapseTime: ($focusData.roundTime - e.detail.currentTime / 1000).toFixed(
        2
      ),
      user: localStorage.getItem("user"),
      createdAt: new Date().toLocaleString(),
      dimension: $focusData.dimension,
    };
    const existRecords = readRecords($focusData.dimension);
    const updateRecords = validateAndPersistanceRecords(
      existRecords,
      newRecord
    );
    var str = localStorage.getItem("focus-records");
    let obj: any = str ? JSON.parse(str) : {};
    localStorage.removeItem("focus-records");
    obj[`level${$focusData.dimension}`] = [...updateRecords];
    localStorage.setItem("focus-records", JSON.stringify(obj));
    $focusData.records = readRecords($focusData.dimension);
    setTimeout(() => ($focusData.status = "idle"), 1000);
  };
</script>

<div class="h-10 sm:h-12">
  <PaTimer
    operation={$focusData.status}
    interval={100}
    duration={$focusData.roundTime}
    on:reset={onSuccess}
    on:timeup={() => setTimeout(() => ($focusData.status = "idle"), 1000)}
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
