<script lang="ts">
  import type { Rank } from "../../models/focus";

  export let idx: number;
  export let rank: Rank;
</script>

<tr>
  <td class="">{idx}</td>
  <td class="">{rank.user}</td>
  <td class="">{rank.elapseTime} s</td>
  <td class="">{rank.createdAt}</td>
</tr>

<style>
    td{
        font-size: 0.5rem;
        font-family: sans-serif;
        text-align: center;
    }
</style>