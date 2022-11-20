<script lang="ts">
    import { onMount } from "svelte";
    import PaTimer from "../cpts/public/timer/paTimer.svelte";


    $:operation=''
    
    
</script>

<div>
    <button class="btnPrimary" on:click={()=>operation='running'}>Start</button>
    <button class="btnPrimary" on:click={()=>operation='pending'}>pending</button>
    <button class="btnPrimary" on:click={()=>operation='idle'}>reset</button>
    <PaTimer duration={10} interval={100} operation={operation} countDownSeconds={5}/>
</div>
<style>

</style>