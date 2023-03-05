<script lang="ts">
    import Page from "$lib/Page.svelte";
    import {
        fromEvent,
        map,
        of,
        timer,
    } from "rxjs";
    import { onMount } from "svelte";

    /** What happens if we map a value to a new observable without flattening */
    of(1, 2, 3).pipe(
        // without flattening operator we just emit an observable for each value
        // instead of the values themselves
        map((v) => of(v * 2))
    )
    // .subscribe(getFullObserver("without flattening"));

    /** basics (concatMap, switchMap, mergeMap) */
    const notifier$ = timer(3000);

    of(1, 2, 3).pipe(
        // map + xAll flattening operator

        // "xMap" = map & "xAll"

        // other values that can be used in inner subscriptions
    )
    // .subscribe((value) => console.log(value));

    /** common flattening operator use case: making http requests (concatMap, switchMap, mergeMap) */
    onMount(() => {
        const countryCode: HTMLInputElement = document.querySelector("#country-code-input-field");

        const requestButton = document.querySelector("#request-button");
        const completeButton = document.querySelector("#complete-button");

        const requestButtonClick$ = fromEvent(requestButton, "click");
        const completeButtonClick$ = fromEvent(completeButton, "click");
    });
</script>

<section>
    <Page title="Flattening works" subTitle="(Open devtools)" />

    <div class="flex flex-col mt-16">
        <div class="mb-4 flex">
            <button
                id="request-button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="gray"
                class="p-3 bg-slate-200 rounded-md"
            >
                Send request
            </button>
            <input
                id="country-code-input-field"
                type="text"
                placeholder="nationality"
                class="ml-4 border-slate-200 pl-4 rounded-md border-solid border-2"
            />
        </div>

        <button
            id="complete-button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="p-2 bg-green-400 rounded-md"
        >
            Complete outer subscription
        </button>
    </div>
</section>
