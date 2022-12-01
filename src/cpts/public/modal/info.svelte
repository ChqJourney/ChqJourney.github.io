<script type='ts'>
    import { createEventDispatcher } from "svelte";


export let title:string
export let content:string

const dispatch=createEventDispatcher()

const confirmFunc=()=>{
    dispatch('onPositive')
}
</script>

<div class="absolute top-1 text-center text-sm font-bold">{title}</div>
<div class="h-full">
    <div class="text-center text-xs">{content}</div>
    <div class="flex gap-2 mt-2">
        <button on:click={confirmFunc} class="border rounded-md text-xs hover:bg-slate-500 hover:text-white px-1 border-gray-800 bg-slate-200 text-orange-400">Confirm</button>
    </div>
</div>