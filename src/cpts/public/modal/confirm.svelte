<script type='ts'>
    import { createEventDispatcher } from "svelte";


export let title:string
export let content:string

const dispatch=createEventDispatcher()

const cancelFunc=()=>{
    dispatch('onNegative',false)
}
const confirmFunc=()=>{
    dispatch('onPositive',true)
}
</script>

<div class="absolute top-0 text-center text-sm font-bold">{title}</div>
<div>
    <div class="text-center text-xs">{content}</div>
    <div class="flex gap-2 mt-2">
        <button class="border rounded-md text-xs px-1 border-orange-300 hover:bg-slate-400 hover:text-black" on:click={cancelFunc}>Cancel</button>
        <button on:click={confirmFunc} class="border rounded-md text-xs hover:bg-slate-500 hover:text-white px-1 border-gray-800 bg-slate-200 text-orange-400">Confirm</button>
    </div>
</div>