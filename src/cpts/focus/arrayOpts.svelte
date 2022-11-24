<script lang="ts">
    import { beforeUpdate } from "svelte";
    import { readRecords } from "../../funcs/common";

    import {
        focusData,
        setDimension,
        setRecords,
    } from "../../stores/focusStore";
    let dimension, records;
    beforeUpdate(() => {
        focusData.subscribe((val) => {
            dimension = val.dimension;
            records = val.records;
        });
    });
    const onSelection = (e) => {
        setDimension(parseInt(e.target.value));
        setRecords(readRecords(e.target.value));
    };
</script>

<select
    title="dimension"
    on:change={onSelection}
    class="w-16 text-sm sm:text-xl sm:h-10 sm:w-24 rounded-sm mx-1"
>
    <option value="3">3 x 3</option>
    <option value="4">4 x 4</option>
    <option value="5">5 x 5</option>
</select>

<style>
    select {
        text-align: center;
        border: 1px solid lightblue;
    }
    select:hover {
        border: 1px solid lightcoral;
    }
</style>
