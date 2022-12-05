<script lang="ts">
    import { setValue,rememberData } from "../../stores/rememberStore";


 const setLevel=(e)=>{
  setValue(e.target.value)
 }
</script>

<div class="text-xs sm:text-lg py-1">
      <span class="">Level:</span>
      <select class=" rounded-md px-1" title="level" on:change={setLevel}>
        <option>简单</option>
        <option>普通</option>
        <option>困难</option>
      </select>
    </div>

