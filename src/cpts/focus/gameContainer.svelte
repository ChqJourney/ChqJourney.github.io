
<script lang="ts">
import {beforeUpdate,} from 'svelte'
import { focusData} from "../../stores/focusStore";
    import Modal from '../public/modal.svelte';
import Blocks from "./blocks.svelte";
import Panel from "./panel.svelte";

let arr
let unSubscribe
beforeUpdate(()=>{
   unSubscribe= focusData.subscribe(val=>{arr=val.arr})
})
// onDestroy(unSubscribe)
</script>


<div class="w-full">
    <Panel/>
    <Blocks blocks={arr}/>
</div>


