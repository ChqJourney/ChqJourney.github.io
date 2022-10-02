import type { Rank } from '../models/focus';
import { writable } from 'svelte/store';

export const focusData = writable({arr:new Array(3*3),dimension:3,user:"",status:'idle',roundTime:30,leftTime:30,records:[]});

