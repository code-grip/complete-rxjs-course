<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { activityMap } from "$utils/constants";
    import type { IActivity } from "$utils/interfaces";

    /**
     * basic catchError scenarios
     */
    const activities: IActivity[] = [
        activityMap.basketball,
        activityMap.cooking,
        activityMap.carRepair,
    ];

    /**
     * catchError scenario with combination observables
     */
    let htmlAnimals = [];
</script>

<section>
    <Page title="CatchError works" subTitle="(Open devtools)" />

    <section class="flex my-4 h-48 w-full flex-wrap justify-center">
        <table>
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Family</th>
                    <th>English name</th>
                    <th>Species</th>
                </tr>
            </thead>
            <tbody>
                {#each htmlAnimals as animal}
                    {#if animal?.order}
                        <tr>
                            <td>{animal.order}</td>
                            <td>{animal.family}</td>
                            <td>{animal.englishName}</td>
                            <td>{animal.scientificName}</td>
                        </tr>
                    {:else}
                        <tr>
                            <td class="text-center text-red-500" colspan="4">{animal}</td>
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    </section>
</section>

<style>
    table {
        border: 1px solid #1c6ea4;
        width: 100%;
        text-align: left;
    }
    th,
    td {
        padding: 1rem;
    }
    th {
        font-weight: bold;
        color: #ffffff;
    }
    td {
        background: #d0e4f5;
    }
    thead {
        background: #1c6ea4;
    }
</style>
