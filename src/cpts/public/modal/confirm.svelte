<script type="ts">
    import { createEventDispatcher } from "svelte";

    export let title: string;
    export let content: string;

    const dispatch = createEventDispatcher();

    const cancelFunc = () => {
        dispatch("onNegative", false);
    };
    const confirmFunc = () => {
        dispatch("onPositive", true);
    };
</script>

<div
    class="absolute w-full border-b hover:font-medium hover:text-orange-400 border-gray-400 top-1 text-center text-sm font-bold mx-10"
>
    {title}
</div>

<div class="text-center px-8 text-xs overflow-auto">{content}</div>

<button
    class="absolute w-[50%] left-0 rounded-bl-md bottom-0 h-6 border-t border-r text-xs border-white hover:bg-slate-400 hover:text-black"
    on:click={cancelFunc}>Cancel</button
>
<button
    on:click={confirmFunc}
    class="absolute w-[50%] rounded-br-md right-0 bottom-0 h-6 border-t border-l text-xs border-white hover:bg-slate-500 hover:text-black"
    >Confirm</button
>
