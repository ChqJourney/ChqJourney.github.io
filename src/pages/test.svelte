<script lang="ts">
    import Confirm from "../cpts/public/modal/confirm.svelte";
    import Info from "../cpts/public/modal/info.svelte";
    import ModalContainer from "../cpts/public/modal/modalContainer.svelte";

    const modals = {
        info: { 
            component: Info, 
            title: "info", 
            content: "this is info only" },
        confirm: {
            component: Confirm,
            title: "confirm",
            content: "please confirm sdfafd jj ;klj k;lj  ;klj ;klj ;kl ;kl adfafd afdsafd ",
        },
    };

    $: slot = "info";
    $: show = false;
</script>

<div
    class="w-full flex flex-col justify-between items-center justify-items-start overflow-hidden h-full lg:w-[600px] md:mx-auto"
>
    <button class="btnPrimary w-24 h-10" on:click={() => (show = !show)}
        >show modal</button
    >
    <button
        class="btnPrimary w-24 h-10"
        on:click={() => {
            if (slot === "info") {
                slot = "confirm";
            } else {
                slot = "info";
            }
        }}>change modal</button
    >
    <ModalContainer isShow={show} >
        <svelte:component
            this={modals[slot]["component"]}
            title={modals[slot]["title"]}
            content={modals[slot]["content"]}
        />
    </ModalContainer>
</div>

<style>
</style>
