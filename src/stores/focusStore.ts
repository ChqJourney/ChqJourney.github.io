import type { Rank } from '../models/focus';
import { writable,derived } from 'svelte/store';
import { createRandomArray } from '../funcs/common';

const initState = { arr: new Array(3 * 3), dimension: 3, user: localStorage.getItem('user'), status: 'idle',timerStatus:'idle', roundTime: 30, leftTime: 30, records: [] }
export const focusData = writable(initState);


export const createTis=()=>{
    focusData.update(val=>{
        val.arr = createRandomArray(
            val.dimension * val.dimension
          );
          return val;
    })
}

export const setDimension=(di:number)=>{
    focusData.update(val=>{
        val.dimension=di
        val.arr=new Array(di*di)
        return val
    })
}
export const setStatus=(status:string)=>{
    focusData.update(val=>{
        val.status=status
        return val
    })
}
export const setTimer=(timerStatus:string)=>{
    focusData.update(val=>{
        val.timerStatus=timerStatus
        return val
    })
}

export const setRecords=(records:any)=>{
    focusData.update(val=>{
        val.records=records
        return val
    })
}
export const setNum=(num:number,idx:number)=>{
    focusData.update(val=>{
        
        val.arr[idx]=num
        return val
    })
}