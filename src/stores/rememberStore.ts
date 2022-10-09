import type { Rank } from '../models/focus';
import { writable } from 'svelte/store';
const initBlocks=[{blocks:"000000000"},{blocks:"000000000"},{blocks:"000000000"},{blocks:"000000000"},{blocks:"000000000"},{blocks:"000000000"},{blocks:"000000000"},{blocks:"000000000"},{blocks:"000000000"}]

const initState: {
    arr: RememberTi[];
    showIdx:number[];
    dimension: number;
    quantity:number;
    current:number
    user: string;
    status: string;
    elapseTime: number;
    records: Rank[];
  } = {
    arr: initBlocks,
    showIdx:[],
    dimension: 9,
    quantity:3,
    current:1,
    user: localStorage.getItem("user"),
    status: "idle",
    elapseTime: 0,
    records: [],
  };
  export interface RememberTi{
    blocks:string
    verdict?:boolean

  }
  export const rememberData = writable(initState);
  