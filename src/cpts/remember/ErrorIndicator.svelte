<script lang="ts">
    import { rememberData } from "../../stores/rememberStore";
    $: errorCount = $rememberData.arr.filter(
        (v, i) => v.verdict === false
    ).length;
</script>

<div class=" flex items-center">
    <span>Error:</span>
    <div class="px-1 flex items-center">
        <div class="text-orange-600 font-semibold inline-block align-bottom">{errorCount}</div>
    </div>
</div>
