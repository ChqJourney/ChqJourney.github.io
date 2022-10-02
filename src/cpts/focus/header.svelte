<script lang="ts">
import { navigate } from "svelte-routing";

  import kelly from "../../assets/kelly.png";
  import molly from "../../assets/logo192.png";
  let userName;

  userName = localStorage.getItem("user");
  const toLink=(path:string)=>{
        navigate(path,{replace:true})
    }
</script>

<div
  class="w-full flex flex-row justify-between items-center bg-sky-400 h-10 sm:h-12"
>
  <img
    class="h-8 w-8 sm:h-10 sm:w-10 rounded-full ml-1 sm:ml-3"
    src={kelly}
    alt="kelly"
  />
  <div class="text-center text-xs md:text-base mt-2">
    <div>{userName}</div>
    <button class="hover:bg-sky-400 rounded-md" on:click={()=>toLink("/")}>
      <svg
        class="h-4 w-4 fill-orange-400"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3135"
        width="200"
        height="200"
        ><path
          d="M904.699382 574.392002l58.97416-58.97416-118.529557-118.520347 0.005117-213.882252-81.07041 0 0.00307 132.827191L513.284761 65.066925l-1.11438 1.113357-1.113357-1.113357L60.696896 515.416819l58.993602 58.95574 70.992891-70.991868 0.008186 456.137715 81.050967 0L271.742543 959.485661l492.354568 0.027629 0 0.005117 81.032548 0 0 0 0.019443 0L845.149101 878.429577l-0.017396 0 0.00921-363.590925L904.699382 574.392002zM764.095064 878.434693l-168.609139 0.010233L595.485925 607.621824l-166.594249 0 0 270.831288-157.149133 0.00921 0-456.138738 239.313457-239.308341 1.113357 1.113357 1.11438-1.113357 250.80007 250.77551L764.095064 878.434693z"
          p-id="3136"
        /></svg
      >
    </button>
  </div>

  <img
    class="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-1 sm:mr-3"
    src={molly}
    alt="molly"
  />
</div>

<style>
</style>
