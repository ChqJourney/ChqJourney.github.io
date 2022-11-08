<!-- <script lang="ts">
  import CommonTimer from "../cpts/public/commonTimer.svelte";

$:oper='idle'
let time=0
const operation=(operationType:string)=>{
    oper=operationType
}
const stopped=(e:any)=>{
    time=e.detail.elapsed/1000
}
const pending=(e:any)=>{
    time=e.detail.elapsed/1000
}
</script> -->


<!-- <div class="w-20 h-10"> -->

    
    <!-- <CommonTimer duration={10} operation={oper} noBoard={false} 
    on:stopped={stopped}
    on:pending={pending}/>
</div>

<button on:click={()=>operation('running')}>Start</button>
<button on:click={()=>operation('idle')}>Reset</button>
<button on:click={()=>operation('pending')}>Pending</button>

<div>{time}</div> -->


<button>start</button>
<button>Stop</button>
<style>
    button{
        border: 1px solid orange;
        width: 6rem;
        height: 2rem;
        border-radius: 0.5rem;
        font-size: 1rem;
    }
</style>