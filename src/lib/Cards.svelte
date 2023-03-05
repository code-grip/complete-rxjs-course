<script lang="ts">
    import { push, pop, location, replace } from "svelte-spa-router";
    import Navigation from "./Navigation.svelte";
    export let title: string;
    export let items: any[];
</script>

<main class="m-20 flex items-center flex-col">
    <h1 class="text-5xl font-bold">{title}</h1>

    <section class="flex my-4 w-full flex-wrap justify-center">
        {#each items as item}
            <div
                class="bg-slate-200 rounded-md p-4 m-4 flex flex-basis flex-col justify-between w-64 h-64"
            >
                <div class="mb-12">
                    <h2 class="text-2xl font-bold mb-1">{item.name}</h2>
                    <h3 class="text-gray-400 text-">{item.description}</h3>
                </div>

                <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    on:click={() => {
                        push(item.route);
                    }}
                    type="button"
                    class="bg-purple-600 capitalize text-sm w-full rounded-sm h-8 text-white"
                    >Start</button
                >
            </div>
        {/each}
    </section>
</main>
