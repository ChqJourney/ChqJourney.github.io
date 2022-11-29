<script lang="ts">
export let tick

const timeFormat = (t: number = 0) => {
    let initNum = Math.ceil(t / 1000) % 3600;
    const sec = initNum % 60;
    const min = Math.floor(t / 60000);
    const secStr = sec < 10 ? `0${sec}` : sec;
    const minStr = min < 10 ? `0${min}` : min;
    return `${minStr}:${secStr}`;
  };
</script>

<div>
    {timeFormat(tick)}
</div>