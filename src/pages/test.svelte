<script lang="ts">
    import { onMount } from "svelte";
    import PaTimer from "../cpts/public/timer/paTimer.svelte";


    $:operation=''
    
    
</script>

<div>
    <button class="btnPrimary" on:click={()=>operation='start'}>Start</button>
    <button class="btnPrimary" on:click={()=>operation='stop'}>Reset</button>
    <PaTimer duration={10} interval={100} operation={operation}/>
</div>
<style>

</style>