import type { Rank } from '../models/focus';
import { writable,derived } from 'svelte/store';

const initState = { arr: new Array(3 * 3), dimension: 3, user: localStorage.getItem('user'), status: 'idle', roundTime: 30, leftTime: 30, records: [] }
export const focusData = writable(initState);


