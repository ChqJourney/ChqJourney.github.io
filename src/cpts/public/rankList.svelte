<script lang='ts'>
    import RankItem from './rankItem.svelte'
  import type { Rank } from '../../models/focus';
    export let records:Rank[]=[]
    </script>
     
<table class="table-auto hover:table-fixed rounded-lg">
    <thead>
        <tr class="border-b border-slate-500">
            <th class="">no</th>
            <th class="w-8 sm:w-24">user</th>
            <th class="">time</th>
            <th class="">at</th>
        </tr>
    </thead>
    <tbody>
       
        {#each records as rank, i}
        <RankItem rank={rank} idx={i+1}/>
        {/each}
    </tbody>
</table>
{#if records.length===0}
     <div class="w-full text-center blank font-sans">no records</div>
     {:else}
     <div></div>
{/if}

<style>
    th{
        font-size: 0.5rem;
    }
    .blank{
        font-size: 0.5rem;
    }
</style>
