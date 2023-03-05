<script>
    import { pop, replace } from "svelte-spa-router";
    const goBack = () => pop();
    const goHome = () => replace("/");
</script>

<nav class="flex">
    <button class="flex items-center  mb-2" on:click={goBack}>
        <img
            class="mr-2"
            src="../../src/assets/arrow-left.svg"
            alt="left-arrow"
        />
    </button>
    <button class="flex items-center mb-2" on:click={goHome}>
        <img class="mr-2" src="../../src/assets/home.svg" alt="left-arrow" />
    </button>
</nav>
