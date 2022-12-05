<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let isShow: boolean = false;
    export let isBlurToClose:boolean=false;
    export let height="h-1/6"
	const dispatch = createEventDispatcher();
    $:show=isShow
    console.log(show)

</script>

<div on:click={()=>{}}
    class={`fixed ${
        show ? "block" : "hidden"
    } insert-0 bg-gray-600 z-50 bg-opacity-70 overflow-y-auto h-full w-full`}
>
    <div tabindex="0" on:blur={()=>{
        if(isBlurToClose){
            show=false;dispatch('onClosed',false);
        }}
    } class={`${height} border focus:bg-gray-600 bg-gray-500 rounded-md md:min-h-fit md:w-fit w-[80%]  relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center`}>
       <button class="absolute z-50 top-0 right-1 hover:bg-gray-400 rounded-sm" on:click={()=>{show=false;dispatch('onClosed',false)}}>
        <svg class="h-6 w-6 fill-orange-300" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z"></path></svg>
    </button>
        <slot>nothing in modal</slot>
    </div>
</div>
 