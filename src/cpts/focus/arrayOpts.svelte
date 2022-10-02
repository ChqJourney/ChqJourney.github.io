
<script lang="ts">
import { readRecords } from '../../funcs/common';

    import {focusData} from '../../stores/focusStore'
    // console.log($focusData)
const onSelection=(e)=>{

    console.log($focusData)
    $focusData.dimension=parseInt(e.target.value)
    
    $focusData.records=readRecords(e.target.value)
    $focusData.arr=new Array($focusData.dimension*$focusData.dimension)
}
</script>

<select title="dimension" on:change={onSelection} class="w-16 text-sm sm:text-xl sm:h-8 sm:w-24 rounded-md mx-1">
<option value=3>3 x 3</option>
<option value=4>4 x 4</option>
<option value=5>5 x 5</option>
</select>
<style>
    select{
        text-align: center;
        border: 1px solid lightblue;
    }
    select:hover{
        border: 1px solid lightcoral;
    }
</style>