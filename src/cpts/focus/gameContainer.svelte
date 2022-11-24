
<script lang="ts">
import {beforeUpdate, onDestroy, onMount} from 'svelte'
import { focusData } from "../../stores/focusStore";
import Blocks from "./blocks.svelte";
import Panel from "./panel.svelte";

let arr
let unSubscribe
beforeUpdate(()=>{
   unSubscribe= focusData.subscribe(val=>arr=val.arr)
})
// onDestroy(unSubscribe)
</script>


<div>
    <Panel/>
    <Blocks blocks={arr}/>
</div>
