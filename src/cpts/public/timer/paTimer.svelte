<script type="ts">
    import { onMount, createEventDispatcher, afterUpdate } from "svelte";
    import { createTimer } from "./timerStore";
    export let duration: number;
    export let interval: number;
    export let operation: string;
    export let countDownSeconds = 0;
    let num;
    let timer;
    let currentDuration = duration * 1000;
    $: flash = false;
    const dispatch = createEventDispatcher();
    const timeFormat = (t: number = 0) => {
        let initNum = Math.ceil(t / 1000) % 3600;
        const sec = initNum % 60;
        const min = Math.floor(t / 60000);
        const secStr = sec < 10 ? `0${sec}` : sec;
        const minStr = min < 10 ? `0${min}` : min;
        return `${minStr}:${secStr}`;
    };
    onMount(() => {
        console.log('mount timer')
        timer = createTimer(currentDuration, interval, true);
        timer.subscribe((v) => (num = v));
    });
    afterUpdate(() => {
        console.log(operation);
        switch (operation) {
            case "running":
                if (num === currentDuration) {
                    timer.startTick();
                    dispatch("start");
                }
                if (num <= countDownSeconds * 1000) {
                    flash = true;
                }
                if (num === 0) {
                    flash = false;
                    
                    dispatch("timeup");
                }

                break;
                case 'pending':
                timer.stopTick();
                console.log("pending");
                dispatch("pending");
                currentDuration = num;
                    break;
            case "idle":
                let temp2 = num;
                timer.reset();
                dispatch("stop", { currentTime: temp2 });
                break;
            case "reset":
                console.log("reset");
                timer.reset();
                break;
            default:
                console.warn("only running,idle,reset allowed", operation);
                break;
        }
    });
</script>

<div
    class={`${
        flash ? "animate-pulse border-red-500" : "border-sky-400"
    } text-sm sm:text-xl border text-center rounded-md px-1 mx-1 justify-center text-lime-700 flex items-center font-sans`}
>
    {timeFormat(num)}
</div>
