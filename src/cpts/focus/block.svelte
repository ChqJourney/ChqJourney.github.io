<script lang="ts">
  import { focusData, setNum, setStatus, setTimer } from "../../stores/focusStore";
  import MagIcon from "../../assets/icons/magIcon.svelte";
  import HeartIcon from "../../assets/icons/heartIcon.svelte";
  import BianbianIcon from "../../assets/icons/bianbianIcon.svelte";
  import { findMinElement } from "../../funcs/common";
  import {sound} from "../../pages/focus.svelte"
  import {tap} from 'svelte-gestures'
    import { onMount } from "svelte";
  export let num: number = 0;
  let status;
  let arr;
  onMount(()=>focusData.subscribe(val=>{status=val.status;arr=val.arr}))
  $: blockSta = "idle";
  const clickFunc = async() => {
    if (status !== "running") return;
    const target = findMinElement($focusData.arr);
    if (num === target.num) {
        sound.play('correct')
      setNum(0,target.idx)
      blockSta = "correct";
      if (arr.every((n:number) => n === 0)) {
        setStatus('success')
        setTimer('idle')
      }
    } else {
        sound.play('wrong')
      setTimeout(() => {
        blockSta = "idle";
      }, 600);
      blockSta = "wrong";
    }
  };
</script>
{#if status === "idle"}
  <button>
    <div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <MagIcon />
    </div>
</button>
{:else if status === "running" && num === 0}
  <button>
    <div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
    <HeartIcon />
</div>
</button>
{:else if status === "running" && blockSta === "wrong"}
  <button class="shake">
    <div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
    <BianbianIcon />
    </div>

</button>
{:else}
  <button class="text-sm sm:text-2xl" use:tap on:tap={clickFunc}>
    <div class="absolute">
        {#if num===0}
        <div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <HeartIcon />
        </div>
        {:else}
        {num}  
        {/if}
    </div>
</button>
{/if}

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
    padding:33%;
  }
  button::after{
    content: '';
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
