<script lang="ts">
  import Header from "../cpts/public/header.svelte";
  import RankList from "../cpts/public/rankList.svelte";
  import GameContainer from "../cpts/focus/gameContainer.svelte";
  import { focusData, setRecords } from "../stores/focusStore";
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";
  import { readRecords, validateAndPersistanceRecords } from "../funcs/common";
  import kelly from "../assets/kelly.png";
  import molly from "../assets/logo192.png";
  let records, user;
  const sub = () =>
    focusData.subscribe((val) => {
      records = val.records;
      user = val.user;
    });
  onMount(() => {
    sub();
    setRecords(readRecords(3));
  });
  onDestroy(sub);
</script>

<svelte:head>
  <title>Focus</title>
</svelte:head>
<div
  class="w-full flex flex-col justify-between justify-items-start overflow-hidden h-full lg:w-[600px] md:mx-auto"
>
  <Header imgLeftPath={kelly} imgRightPath={molly} userName={user} />
  <GameContainer />
  <RankList records={records} />
</div>
