<script>
import RankList from "../cpts/focus/rankList.svelte";
import Keyboard from "../cpts/calculator/keyboard.svelte";
import Screen from "../cpts/calculator/screen.svelte";


</script>


<div class="container mx-auto h-full relative w-full lg:w-[500px] flex flex-col justify-between">
    <Screen/>
    <Keyboard />
    <RankList />
</div>