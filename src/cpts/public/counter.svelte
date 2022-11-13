<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount, tick } from "svelte";


 export let idx:number
 export let total:number


 
</script>

<div class="text-xs sm:text-lg text-orange-500 flex items-center">
    <!-- <button class="mx-1">
        <svg class="h-2 w-2 sm:h-4 sm:w-4" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M719.165296 999.424L800.450704 918.124169 383.495211 501.183099 800.450704 84.242028 719.165296 2.95662 223.549296 501.183099z" fill="#2196F3"></path></svg>
    </button> -->
    {idx} of {total}
    <!-- <button class="mx-1">
        <svg class="h-2 w-2 sm:h-4 sm:w-4" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="200" height="200"><path d="M304.834704 11.812056L223.549296 93.097465l416.955493 416.955493L223.549296 926.965183l81.285408 81.299831L800.450704 510.038535z" fill="#2196F3"></path></svg>
    </button> -->
</div>