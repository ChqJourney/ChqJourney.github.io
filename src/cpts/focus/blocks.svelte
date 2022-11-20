
<script lang="ts">
    import Block from "./block.svelte";
    import {focusData} from '../../stores/focusStore'
    import {beforeUpdate, onMount} from 'svelte'
    export let blocks:number[]
    let dimension
    beforeUpdate(()=>{
      focusData.subscribe(val=>dimension=val.dimension)
    })
  </script>
  
  <div class={`contain rounded-md level${dimension}`}>
    {#each blocks as ar}
      <Block num={ar}/>
    {/each}
  </div>
  
  <style>
    .contain {
      padding: 0.5rem;
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.3rem;
      width: 98%;
      height: 100%;
    }
    .level3{
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .level4{
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .level5{
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  </style>
  