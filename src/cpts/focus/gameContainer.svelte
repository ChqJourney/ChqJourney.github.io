
<script lang="ts">
import {onDestroy, onMount} from 'svelte'
import { focusData } from "../../stores/focusStore";
import Blocks from "./blocks.svelte";
import Panel from "./panel.svelte";

let arr
let unSubscribe
onMount(()=>{
   unSubscribe= focusData.subscribe(val=>arr=val.arr)
})
onDestroy(unSubscribe)
</script>


<div>
    <Panel/>
    <Blocks blocks={$focusData.arr}/>
</div>
