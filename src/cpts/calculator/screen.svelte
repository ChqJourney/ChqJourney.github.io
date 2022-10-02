<script lang="ts">
  import { calculatorData } from "../../stores/calculatorStore";
  import Timer from "../public/timer.svelte";
  import DisplayUnit from "./displayUnit.svelte";

  import ErrorZone from "./errorZone.svelte";
</script>

<div class="w-full lg:w-[500px] h-full bg-sky-600 pb-2 pt-18">
  <div class="flex items-center justify-between px-4">
    <button class="">
      <svg
        class="h-6 w-6 fill-orange-500"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        ><path
          d="M904.699382 574.392002l58.97416-58.97416-118.529557-118.520347 0.005117-213.882252-81.07041 0 0.00307 132.827191L513.284761 65.066925l-1.11438 1.113357-1.113357-1.113357L60.696896 515.416819l58.993602 58.95574 70.992891-70.991868 0.008186 456.137715 81.050967 0L271.742543 959.485661l492.354568 0.027629 0 0.005117 81.032548 0 0 0 0.019443 0L845.149101 878.429577l-0.017396 0 0.00921-363.590925L904.699382 574.392002zM764.095064 878.434693l-168.609139 0.010233L595.485925 607.621824l-166.594249 0 0 270.831288-157.149133 0.00921 0-456.138738 239.313457-239.308341 1.113357 1.113357 1.11438-1.113357 250.80007 250.77551L764.095064 878.434693z"
         
        /></svg
      >
    </button>
    <!-- <Ratings duration={state.duration} /> -->
  </div>
  <div
    class=" h-full flex justify-center items-center bg-sky-800 mx-2 rounded-lg py-2 relative"
  >
    <div class="absolute left-2 top-1 text-lg font-bold text-orange-600">
      <div class="w-14 h-full">
        <Timer
            noBoard={true}
          on:start={() =>{}}
          on:timeout={()=>$calculatorData.status==="idle"}
          duration={$calculatorData.roundTime}
          operation={$calculatorData.status}
        />
      </div>
    </div>
    {#if $calculatorData.tis.length !== 0&&$calculatorData.status==='running'}
      <div class="absolute right-6 top-1 text-md sm:text-xl text-lime-600">
        {$calculatorData.current} / {$calculatorData.tis.length}
      </div>

      <DisplayUnit
        content={$calculatorData.tis[$calculatorData.current - 1]?.num1 ?? " "}
      />
      
      <DisplayUnit
        content={$calculatorData.tis[$calculatorData.current - 1]?.operator ??
          " "}
      />
      
      <DisplayUnit
        content={$calculatorData.tis[$calculatorData.current - 1]?.num2 ?? " "}
      />
      
      <DisplayUnit
        content={$calculatorData.tis[$calculatorData.current - 1] ? "=" : ""}
      />
               {#each $calculatorData.input as num}
                <DisplayUnit content={num}/>
               {/each}
    {:else}
      <div class="h-14 sm:h-24 text-xs flex items-center sm:text-xl text-white">
        {$calculatorData.user ?? "hi friend"}，按开始键游戏......
      </div>
    {/if}

    <ErrorZone />
  </div>
</div>
