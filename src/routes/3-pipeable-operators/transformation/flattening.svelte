<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { fetchRandomUser, getFullObserver } from "$utils/rxjs-prefab";
    import {
        catchError,
        concatAll,
        concatMap,
        EMPTY,
        fromEvent,
        interval,
        map,
        mergeAll,
        mergeMap,
        of,
        range,
        switchAll,
        switchMap,
        takeUntil,
        tap,
        throwError,
        timer,
    } from "rxjs";
    import { onMount } from "svelte";

    /** What happens if we map a value to a new observable without flattening */
    of(1, 2, 3).pipe(
        // without flattening operator we just emit an observable for each value
        // instead of the values themselves
        map((v) => of(v * 2))
    );
    // .subscribe(getFullObserver("without flattening"));

    /** basics (concatMap, switchMap, mergeMap) */
    const notifier$ = timer(3000);

    of(1, 2, 3).pipe(
        // map + xAll flattening operator
        // map((v) => of(v * 2)),
        // concatAll(),
        // switchAll(),
        // mergeAll(),

        // xMap = map & xAll
        // concatMap((v) => of(v * 2)),
        // mergeMap((v) => of(v * 2)),
        // switchMap((v) => of(v * 2)),

        // We can also pass other values besides observables to be used in inner subscriptions
        // concatMap((v) => [4, 5]),
        // concatMap((v) => "abc"),
        // concatMap((v) => Promise.resolve("promise value")),

        // We need to unsubscribe from infinite observables ourselves, eg: an interval
        concatMap((v) => interval(1000).pipe(takeUntil(notifier$)))
    );
    // .subscribe((value) => console.log(value));

    /** common flattening operator use case: making http requests (concatMap, switchMap, mergeMap) */
    onMount(() => {
        const countryCode: HTMLInputElement = document.querySelector("#country-code-input-field");

        const requestButton = document.querySelector("#request-button");
        const completeButton = document.querySelector("#complete-button");

        const requestButtonClick$ = fromEvent(requestButton, "click");
        const completeButtonClick$ = fromEvent(completeButton, "click");

        // outer subscription
        requestButtonClick$
            .pipe(
                tap(() => console.count("clicks")),
                // mergeMap((value, index) =>
                // switchMap((value, index) =>
                concatMap((value, index) =>
                    // inner subscription
                    fetchRandomUser(countryCode.value, "name").pipe(
                        tap({
                            complete: () =>
                                console.log(
                                    `Done with fetching user ${index}, destroying 'inner subscription' ${index}!`
                                ),
                        }),
                        // we can also use other operators on the result of the inner subscription before it goes to the observer
                        map((user) => ({
                            fullName: user.first + " " + user.last,
                        })),
                        // catching the error on the inner subscription level
                        catchError((error) => of({ error }))
                    )
                ),
                // this takeUntil stops the outer subscription when we click on the complete button
                takeUntil(completeButtonClick$)
                // catching the error on the outer subscription level
                // catchError((error) => of({ error }))
            )
            .subscribe(getFullObserver("flattening"));
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
