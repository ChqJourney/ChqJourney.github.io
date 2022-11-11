<script lang="ts">
    import { sound } from "../../pages/focus.svelte";
  import { readExistedRecords, validateAndPersistanceRecords } from "../../funcs/common";
  import { calculatorData, timeout } from "../../stores/calculatorStore";

  import Timer from "../public/timer.svelte";
  import DisplayUnit from "./displayUnit.svelte";

  import ErrorZone from "./errorZone.svelte";
  const timeoutAction=()=>{
    sound.play('timeout')
    setTimeout(()=>{
      timeout()
    },2000)
  }
  const successAction = (e: any) => {
    const newRecord = {
      elapseTime: $calculatorData.roundTime - e.detail.leftTime.toFixed(2),
      user: localStorage.getItem("user"),
      createdAt: new Date().toLocaleString(),
      keySt: `${$calculatorData.level}x${$calculatorData.total}`
    };
    const existRecords=readExistedRecords("calculator-records",`${$calculatorData.level}x${$calculatorData.total}`);
    const updateRecords=validateAndPersistanceRecords(existRecords,newRecord)
    var str=localStorage.getItem('calculator-records');
        let obj:any=str?JSON.parse(str):{}
    localStorage.removeItem('calculator-records')
    obj[`${$calculatorData.level}x${$calculatorData.total}`]=[...updateRecords]
    localStorage.setItem('calculator-records',JSON.stringify(obj))
    $calculatorData.records=readExistedRecords("calculator-records",`${$calculatorData.level}x${$calculatorData.total}`)
  };
</script>

<div class="w-full lg:w-[500px] h-full bg-sky-600 pb-2 pt-2">
  <div
    class=" h-full flex justify-center items-center bg-sky-800 mx-2 rounded-lg py-4 relative"
  >
    <div class="absolute left-2 top-1 text-lg font-bold text-orange-600">
      <div class="w-14 h-full">
        <Timer
          noBoard={true}
          on:start={() => {}}
          on:timeout={timeoutAction}
          on:success={successAction}
          duration={$calculatorData.roundTime}
          operation={$calculatorData.status}
        />
      </div>
    </div>
    {#if $calculatorData.tis.length !== 0 && $calculatorData.status === "running"}
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

      <DisplayUnit content={$calculatorData.input} />
    {:else}
      <div class="h-12 sm:h-24 text-xs flex items-center sm:text-xl text-white">
        {$calculatorData.user ?? "hi friend"}，按开始键游戏......
      </div>
    {/if}
    {#if $calculatorData.status === "running"}
      <ErrorZone arr={$calculatorData.tis} />
    {/if}
  </div>
</div>
