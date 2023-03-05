<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { activityMap } from "$utils/constants";
    import type { IActivity } from "$utils/interfaces";
    import { getFullObserver, getFullTapObserver } from "$utils/rxjs-prefab";
    import {
        catchError,
        combineLatest,
        EMPTY,
        filter,
        first,
        forkJoin,
        from,
        map,
        of,
        range,
        tap,
        throwError,
    } from "rxjs";
    import { fromFetch } from "rxjs/fetch";
    import { getCat, getDog, getMonkey } from "./animals";

    /**
     * basic catchError scenarios
     */
    const activities: IActivity[] = [
        activityMap.basketball,
        activityMap.cooking,
        activityMap.carRepair,
    ];

    from(activities).pipe(
        map(({ description }) => {
            throw new Error("Oh no, an error occurred while mapping a value!");
            return description;
        }),
        catchError((error) => {
            return of("(catchError) " + error.message);
            // return of(null);
            // return EMPTY;
        })
    );
    // .subscribe(getFullObserver("activities"));

    /**
     * catchError scenario with combination observables
     */
    let htmlAnimals = [];
    const animals$ = forkJoin([getMonkey(), getCat(), getDog()]).pipe(
        tap((animals) => (htmlAnimals = animals)),
    );

    animals$.subscribe(getFullObserver("animals"));
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
                            <!-- <td class="text-center text-red-500" colspan="4">{animal}</td> -->
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
