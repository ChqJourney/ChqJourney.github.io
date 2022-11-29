import { writable, derived } from "svelte/store";

export const timerStore = writable({ tick: 0, duration: 10, interval: 100 });

export const tickStore = derived(timerStore, $timerStore => {
  setTimeout(() => {
    $timerStore.tick+=100
  }, 2000);
  return $timerStore
});
