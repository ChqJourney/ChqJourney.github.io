<script lang="ts">
  import MagIcon from "../../assets/icons/magIcon.svelte";
  import HeartIcon from "../../assets/icons/heartIcon.svelte";
  import BianbianIcon from "../../assets/icons/bianbianIcon.svelte";
  import { sleep, sound } from "../../pages/focus.svelte";
  import { fade } from 'svelte/transition';
  import { hideTi, recordTiResult, rememberData, setRoundStatus, startShowTi, triggerNextAction } from "../../stores/rememberStore";
  import { findMinElement } from "../../funcs/common";
  export let num: number = 0;
  export let idx:number
  //  export let status='idle'
   let show=false
  const clickFunc = async () => {
    if(num===0)return;
    if($rememberData.showIdx.includes(num))return;
    let correctKey=1
    for (let index = 0; index < $rememberData.total; index++) {
      if(!$rememberData.showIdx.includes(index+1)){
        correctKey=index+1;
        break;
      }     
    }
    console.log(correctKey)
    if(num===correctKey){
      $rememberData.showIdx=[...$rememberData.showIdx,correctKey]
      if($rememberData.showIdx.length===$rememberData.quantity){
        setRoundStatus('success')
      }
      if($rememberData.arr.every((v,i)=>v.verdict)){
        
      }
    }else{
      show=true
      await sleep(1000)
      show=false
    }
  };
 
</script>


<button 
  class="text-sm sm:text-2xl block"
  on:click={()=>clickFunc()}
>
  {#if $rememberData.showIdx.includes(num)}
    <div transition:fade class=“absolute”>
      {num}
    </div>
    {:else if show}
    <div transition:fade class="absolute">
      <HeartIcon/>
    </div>
  {/if}
</button>
<style>
  button {
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid skyblue;
    border-radius: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 33%;
  }
  .block {
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 33%;
    background-color: gray;
  }
  .block:focus {
    outline: none;
  }
  button::after {
    content: "";
    display: block;
    padding-top: 100%;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    background-color: rgb(128, 171, 215);
    border: 2px solid slateblue;
  }
</style>
