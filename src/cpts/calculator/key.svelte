<script lang="ts">
    // export let txt:any
    export let keydown:()=>void=null
</script>
<button on:click={keydown} class="border outline-0 rounded-md w-full h-12 flex items-center justify-center">
    <slot>

        <!-- {txt} -->
    </slot>
</button>