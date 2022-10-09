<script lang="ts">
  import type { Ti } from "../../models/calculator";
import ErrorUnit from "./errorUnit.svelte";
    export let arr:Ti[]=[]
</script>
<div class="absolute bottom-1 sm:bottom-2 left-1 sm:left-4 flex items-center space-x-1 sm:space-x-4">
    {#if arr.some(e=>e.verdict===false)}
    <span class="text-xs text-orange-500 sm:text-lg">Errors:</span>
    {/if}
    {#each arr as ar,i}
        {#if ar.verdict===false}
        <ErrorUnit idx={i}/>
        
        {/if}
    {/each}
    
</div>