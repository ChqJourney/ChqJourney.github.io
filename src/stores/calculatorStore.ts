import type { Rank } from "src/models/focus";
import { writable } from "svelte/store";
import type { Ti } from "../models/calculator";
import  { state } from "../models/state";

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
