<script lang="ts">
  import MagIcon from "../../assets/icons/magIcon.svelte";
  import HeartIcon from "../../assets/icons/heartIcon.svelte";
  import BianbianIcon from "../../assets/icons/bianbianIcon.svelte";
  import { sound } from "../../pages/focus.svelte";
  import { fade } from 'svelte/transition';
  import { rememberData } from "../../stores/rememberStore";
  import { findMinElement } from "../../funcs/common";
  export let num: number = 0;
  export let idx:number
   export let status='idle'
   let show=false
  const clickFunc = async () => {
    checkClick(num)
    
  };
  const checkClick=(num:number)=>{
    console.log('check')
    const st=$rememberData.arr[$rememberData.current].blocks[idx]
    const arr=Array.from(st).map(v=>parseInt(v))
    const correctKey=findCorrectKey(arr)
    console.log(correctKey)
    if(num===correctKey&&num!==0){
      $rememberData.showIdx=[...$rememberData.showIdx,correctKey]
      if($rememberData.showIdx.length===$rememberData.quantity){
        $rememberData.arr[$rememberData.current].verdict=true
        setTimeout(()=>{
          $rememberData.showIdx=[]
          setTimeout(() => {
            $rememberData.current++
            $rememberData.showIdx=[1,2,3]
            setTimeout(() => {
              $rememberData.showIdx=[]
            }, 1000);
          }, 1000);
        },1000)
      }
    }else{
      show=true
      setTimeout(() => {
        show=false
      }, 1000);
    }
  }
  const findCorrectKey=(arr:number[])=>{
    let temp=10000
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if(element!==0){
        if(element<temp){
          temp=element
        }
      }
    }
    console.log(temp)
    if(temp!==10000){
      return temp
    }
    else{
      return 0
    }
  }
</script>


<button 
  class="text-sm sm:text-2xl block"
  on:click={()=>clickFunc()}
>
  {#if $rememberData.showIdx.includes(num)}
    <div transition:fade class="absolute">
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
