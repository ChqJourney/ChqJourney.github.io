
<script lang="ts">
import { focusData } from "../../stores/focusStore";
import Blocks from "./blocks.svelte";
import Panel from "./panel.svelte";

</script>


<div>
    <Panel/>
    <Blocks blocks={$focusData.arr}/>
</div>
