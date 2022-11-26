<script lang="ts">
    export let isShow: boolean = false;
    $:show=isShow
</script>

<div
    class={`fixed ${
        show ? "block" : "hidden"
    } insert-0 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full`}
>
    <div class="h-10 flex items-end"><button on:click={()=>show=false}>x</button></div>
    <slot>nothing in modal</slot>
</div>
