<script type="ts">
    import { createEventDispatcher } from "svelte";

    export let title: string;
    export let content: string;

    const dispatch = createEventDispatcher();

    const confirmFunc = () => {
        dispatch("onPositive");
    };
</script>

<div class="absolute w-full top-1 text-center text-sm font-bold border-b border-gray-400">{title}</div>

    <div class="text-center text-xs mx-2">{content}</div>

    <button
        on:click={confirmFunc}
        class="absolute max-h-6 bottom-0 text-xs border-t border-white w-full h-full hover:bg-slate-500 hover:text-white text-orange-400"
        >Confirm</button
    >

