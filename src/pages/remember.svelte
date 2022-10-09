<script lang="ts">
  import RankList from "../cpts/public/rankList.svelte";
  import Header from "../cpts/public/header.svelte";
  import kelly from "../assets/kelly.png";
  import molly from "../assets/logo192.png";
  import { rememberData } from "../stores/rememberStore";
  import RememberContainer from "../cpts/remember/rememberContainer.svelte";
</script>

<div
  class="w-full flex flex-col justify-between justify-items-start overflow-hidden h-full lg:w-[600px] md:mx-auto"
>
  <Header
    imgLeftPath={kelly}
    imgRightPath={molly}
    userName={$rememberData.user}
  />
  <RememberContainer />
  <RankList records={$rememberData.records} />
</div>
