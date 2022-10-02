<script lang="ts">
import ErrorUnit from "./errorUnit.svelte";
    export let arr:any[]=[]
</script>
<div class="absolute bottom-1 sm:bottom-2 left-1 sm:left-4 flex space-x-1 sm:space-x-4">
    {#each arr as ar,i}
        {#if ar.verdict===false}
        <ErrorUnit idx={i+1}/>
        {/if}
    {/each}
    
</div>