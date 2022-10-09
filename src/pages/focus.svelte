<script context="module">
  import { Howl, Howler } from "howler";
  export const sound = new Howl({
    src: ["effects.mp3"],
    sprite: {
      success: [316, 2100],
      wrong: [2824, 1700],
      correct: [6334, 1200],
      timeout: [7686, 2100],
      start: [10106, 2050],
    },
  });
</script>

<script lang="ts">
  import Header from "../cpts/public/header.svelte";
  import RankList from "../cpts/public/rankList.svelte";
  import GameContainer from "../cpts/focus/gameContainer.svelte";
  import { focusData } from "../stores/focusStore";
  import { onMount } from "svelte";
  import { readRecords } from "../funcs/common";
  import kelly from "../assets/kelly.png";
  import molly from "../assets/logo192.png";

  onMount(() => {
    $focusData.records = readRecords($focusData.dimension);
    // console.log($focusData.records)
  });
</script>

<svelte:head>
  <title>Focus</title>
</svelte:head>
<div
  class="w-full flex flex-col justify-between justify-items-start overflow-hidden h-full lg:w-[600px] md:mx-auto"
>
  <Header imgLeftPath={kelly} imgRightPath={molly} userName={$focusData.user} />
  <GameContainer />
  <RankList records={$focusData.records} />
</div>

<style>
</style>
