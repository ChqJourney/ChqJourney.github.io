<script>
import RankList from "../cpts/public/rankList.svelte";
import Keyboard from "../cpts/calculator/keyboard.svelte";
import Screen from "../cpts/calculator/screen.svelte";
  import Header from "../cpts/public/header.svelte";
  import kelly from "../assets/kelly.png";
  import molly from "../assets/logo192.png";
  import {calculatorData} from "../stores/calculatorStore"

</script>


<div class=" h-screen relative w-full flex md:mx-auto md:container md:w-[800px] lg:w-[1024px] flex-col justify-center">
    <Header imgLeftPath={kelly} imgRightPath={molly} userName={$calculatorData.user}/>
    <Screen/>
    <Keyboard />
    <RankList records={$calculatorData.records}/>
</div>