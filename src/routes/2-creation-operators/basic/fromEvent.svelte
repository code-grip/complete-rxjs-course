<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const square = document.getElementById("square");
        const input = document.getElementById("input");
    });
</script>

<section class="flex flex-col h-60 justify-center items-center">
    <div id="square" class="w-36 h-36 bg-blue-600 m-6" />

    <input id="input" type="text" class="border border-solid border-gray-500 rounded-sm" />
</section>
