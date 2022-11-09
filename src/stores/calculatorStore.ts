import type { Rank } from "src/models/focus";
import { writable } from "svelte/store";
import type { Ti } from "../models/calculator";
import  { state } from "../models/state";
import { createRandomTis, findNextTi } from "../funcs/common";

const initState: {
  status: string;
  tis: Ti[];
  total:number;
  current: number;
  records: Rank[];
  user: string;
  level: string;
  roundTime: number;
  leftTime: number;
  input:string
} = {
  status: "idle",
  tis: [],
  total:10,
  current: 1,
  records: [],
  user: localStorage.getItem('user'),
  level: "简单",
  roundTime: 30,
  leftTime: 30,
  input:" "
};

export const calculatorData = writable(initState);

export const initializeStore=()=>{
  calculatorData.update(val=>initState)
}
export const createTis=()=>{
  calculatorData.update(val=>{
    val.tis=createRandomTis({quantity:val.total,mode:val.level});
    return val
  })
}
export const updateLevel=()=>{
  calculatorData.update(val=>{
    if(val.status==='idle'){
      const level = ["简单", "普通", "困难"];
      const idx = level.findIndex((v) => v === val.level);
      const newLevel = idx === level.length - 1 ? level[0] : level[idx + 1];
      val.level=newLevel
    }
    return val
  })
}
export const updateQuantity=()=>{
  calculatorData.update(val=>{
    if(val.status==='idle'){
      val.total=val.total===50 ? 10 : val.total + 10;
    }
    return val
  })
}

export const updateInput=(st:string|number)=>{
  calculatorData.update(val=>{
    if (val.input.length < 3) {
      val.input = `${val.input}${st}`.trim();
    }
    return val
  })
}