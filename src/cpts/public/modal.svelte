<script lang="ts">
    export let isShow: boolean = false;
    $:show=isShow
</script>

<div
    class={`fixed ${
        show ? "block" : "hidden"
    } insert-0 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full`}
>
    <div class="border rounded-md min-h-[30%] max-w-[50%] absolute relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
       <button class="absolute top-0 right-1 hover:border rounded-sm" on:click={()=>show=false}>x</button>
        <slot>nothing in modal</slot>
    </div>
</div>
