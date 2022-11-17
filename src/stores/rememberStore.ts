import type { Rank } from '../models/focus';
import { writable, readable, derived } from 'svelte/store';
import { createRandomRememberArray } from '../funcs/common';
const initBlocks =(dimension:number,total:number)=> Array.from(Array(total), (v, i) => { return { blocks: Array.from(Array(dimension),(v,i)=>"0").join("") } })


const initState: {
  arr: RememberTi[];
  showIdx: number[];
  dimension: number;
  quantity: number;
  total: number;
  current: number;
  user: string;
  status: string;
  roundStatus:string;
  level: string;
  records: Rank[];
} = {
  arr: initBlocks(9,10),
  showIdx: [],
  dimension: 3,
  quantity: 4,
  total: 10,
  current: 1,
  user: localStorage.getItem("user")??"friend",
  status: "idle",
  roundStatus:'idle',
  level: '简单',
  records: [],
};
export interface RememberTi {
  blocks: string
  verdict?: boolean
}
export const rememberData = writable(initState);
export const switchGame = () => {
  
  rememberData.update(val => {
    if(val.status==='idle'){
      val.status = 'running'
    }else{
      val.status='idle'
    }
    return val
  }
  )
}
export const initArr = () => {
  rememberData.update(val => {
    for (let index = 0; index < val.total; index++) {
      const ar = createRandomRememberArray(val.quantity, val.dimension*val.dimension);
      val.arr[index] = { blocks: ar };
    }
    val.current=1;
    val.roundStatus='idle'
    return val;
  })
}
export const startShowTi = () => {
  rememberData.update(val => {
    val.showIdx = Array.from(Array(val.quantity), (v, i) => i + 1);
    return val
  })
}
export const setRoundStatus=(status:string)=>{
  rememberData.update(val=>{
    if(val.status==='running'){
      val.roundStatus=status
    }
    return val
  })
}
export const hideTi = () => {
  rememberData.update(val => {
    val.showIdx = []
    return val
  })
}
export const triggerNextAction = () => {
  rememberData.update(val => {
    if(val.current<val.total){
      val.current++
    }
    
    return val;
  })
}
export const recordTiResult=(result:boolean|undefined)=>{
  rememberData.update(val=>{
    val.arr[val.current-1].verdict=result
    return val
  })
}
export const setValue=(opt:string)=>{
  rememberData.update(val=>{
    switch(opt){
      case "简单":
        val.dimension=3
        val.quantity=4
        val.arr=initBlocks(9,val.total)
      break;
      case "普通":
        val.dimension=4
        val.quantity=6
        val.arr=initBlocks(16,val.total)
        break;
        case "困难":
          val.dimension=5
          val.quantity=8
          val.arr=initBlocks(25,val.total)
        break;
    }
    return val
  })
}

export const counterStore = readable(null, set => {
  set(new Date())
  const interval = setInterval(() => {
    set(new Date())
  }, 100)

  return () => clearInterval(interval)
})