<script lang="ts">
  import LevelOpt from './LevelOpt.svelte';
  import {
    hideTi,
    initArr,
    recordTiResult,
    rememberData,
    setRoundStatus,
    switchGame,
    startShowTi,
    triggerNextAction,
  } from "../../stores/rememberStore";
  import Counter from "../public/counter.svelte";
  import Timer from "../public/timer.svelte";
  import Blocks from "./blocks.svelte";
    import ErrorIndicator from "./ErrorIndicator.svelte";
    import { sleep } from '../../funcs/common';
    $:opt='简单'
    
    const showTxt = { idle: "Start", running: "Stop", pending: "Resume",success:"done" };
  const startAction = async () => {
    if($rememberData.status==='idle'){
      switchGame();
      initArr();
      startShowTi();
      await sleep(1000);
      hideTi();
      setRoundStatus("running");
    }else{
      $rememberData.status='idle'
      initArr()
    }
  };
  const timeoutFuc = async () => {
    setRoundStatus("fail");
    recordTiResult(false);
    startShowTi();
    await sleep(1000);
    hideTi();
    await sleep(2000);
    triggerNextAction();
    startShowTi();
    await sleep(1000);
    hideTi();
    setRoundStatus("running");
  };
  const successFuc = async () => {
    setRoundStatus("idle");
    await sleep(1000)
    recordTiResult(true);
    hideTi()
    await sleep(1000);
    setRoundStatus("running");
    triggerNextAction();
    startShowTi();
    await sleep(1000);
    hideTi();
  };
</script>

<div class="text-xs sm:text-lg">
  <div class="flex justify-between items-center my-1 px-2">
    <LevelOpt ></LevelOpt>
    <button class="btnPrimary" on:click={startAction}>{showTxt[$rememberData.status]}</button>
  </div>
  <div class="flex justify-between items-center my-1 px-2">
   <ErrorIndicator />
    <Counter total={$rememberData.total} idx={$rememberData.current} />
    
    <Timer
      duration={5}
      operation={$rememberData.roundStatus}
      on:success={successFuc}
      on:timeout={timeoutFuc}
    />
    
  </div>
  <Blocks
    tis={$rememberData.arr[$rememberData.current - 1]}
   
  />
</div>
