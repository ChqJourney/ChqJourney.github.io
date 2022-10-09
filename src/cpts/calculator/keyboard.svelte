<script lang="ts">
  import Delete from "../../assets/icons/deleteIcon.svelte";
  import { calculatorData } from "../../stores/calculatorStore";
  import Key from "./key.svelte";
  import { createRandomTis, findNextTi } from "../../funcs/common";
  const level = ["简单", "普通", "困难"];
  console.log($calculatorData);
  let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const changeLevel = () => {
    if ($calculatorData.status === "idle") {
      const idx = level.findIndex((v) => v === $calculatorData.level);
      // const newIdx = idx === level.length - 1 ? 0 : idx + 1;
      const newLevel = idx === level.length - 1 ? level[0] : level[idx + 1];
      $calculatorData.level = newLevel;
    }
  };
  const changeQuantity = () => {
    if ($calculatorData.status === "idle") {
      $calculatorData.total =
        $calculatorData.total === 50 ? 10 : $calculatorData.total + 10;
    }
  };
  const onOffAction = () => {
    console.log($calculatorData.status);
    if ($calculatorData.status === "running") {
      $calculatorData.status = "idle";
      
    } else {
      $calculatorData.status = "running";
      $calculatorData.tis = createRandomTis({
        quantity: $calculatorData.total,
        mode: $calculatorData.level,
      });
      
    }
   
  };
  const changeInput = (key: string | number) => {
    if ($calculatorData.input.length < 3) {
      $calculatorData.input = `${$calculatorData.input}${key}`.trim();
      console.log($calculatorData.input);
    }
  };
  const confirm = () => {
    if ($calculatorData.input === " ") {
      return;
    }
    // 判断此题是否已答对过
    if ($calculatorData.tis[$calculatorData.current - 1]?.verdict !== true) {
      console.log("in");
      // 没答过或没答对过，则更新verdict后，提交tis
      var ans = parseInt($calculatorData.input);
      $calculatorData.tis.forEach((v, i) => {
        if (i === $calculatorData.current - 1) {
          if ($calculatorData.tis[$calculatorData.current - 1].answer === ans) {
            console.log('right')
            v.verdict = true;
          } else {
            v.verdict = false;
          }
          return v;
        } else {
          return v;
        }
      });
      $calculatorData.current = findNextTi(
        $calculatorData.current,
        $calculatorData.total,
        $calculatorData.tis
      );
      $calculatorData.input = " ";
    } else {
      //已答对
      // todo
      $calculatorData.current = findNextTi(
        $calculatorData.current,
        $calculatorData.total,
        $calculatorData.tis
      );
      $calculatorData.input = " ";
    }
    // 如果每题答案都答对了，则游戏成功，且提示用户
    if ($calculatorData.tis.every((m) => m.verdict === true)) {
      $calculatorData.status='idle'
    }
    return;
  };
  const deleteInput=()=>{
    console.log('delete')
    const st=$calculatorData.input.substring(0, $calculatorData.input.length - 1)
    $calculatorData.input=st
  }
</script>

<div
  class="grid grid-cols-3 gap-2 pt-6 px-2 text-indigo-600 justify-items-center mb-2"
>
  <Key keydown={() => changeLevel()}>{$calculatorData.level}</Key>
  <Key keydown={() => changeQuantity()}>{$calculatorData.total}题</Key>
  <Key keydown={() => onOffAction()}
    >{$calculatorData.status === "idle" ? "Start" : "Stop"}</Key
  >
  {#each keys as ky}
    <Key keydown={() => changeInput(ky)}>{ky}</Key>
  {/each}
  <Key keydown={()=>deleteInput()}><Delete /></Key>
  <Key keydown={() => changeInput(0)}>0</Key>
  <Key keydown={() => confirm()}>OK</Key>
</div>
