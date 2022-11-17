<script>
    import { onMount, createEventDispatcher, afterUpdate } from "svelte";
    import { createTimer } from "./timerStore";
    export let duration;
    export let interval;
    export let operation;
    let num;
    let timer;
    let currentDuration = duration * 1000;
    const dispatch = createEventDispatcher();
    onMount(() => {
        timer = createTimer(currentDuration, interval, true);
        timer.subscribe((v) => (num = v));
    });
    afterUpdate(() => {
        switch (operation) {
            case "start":
                if (num === currentDuration) {
                    timer.startTick();
                    dispatch("start");
                }
                if (num === 0) {
                    dispatch("finish");
                }
                break;
            case "stop":
                console.log(num)
                timer.stopTick();
                console.log('stop')
                dispatch("stop", { currentTime: num });
                currentDuration = num;
            case "reset":
                timer.reset();
                dispatch("reset");
                break;
        }
    });
</script>

<div>
    {num}
</div>
