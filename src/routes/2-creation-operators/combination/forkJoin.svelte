<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { getFullObserver } from "$utils/rxjs-prefab";
    import { forkJoin, throwError, timer } from "rxjs";
    import { fromFetch } from "rxjs/fetch";

    let activityOne, activityTwo;
    // --- observables to combine with the forkJoin operator ---
    // finite
    const activity1$ = fromFetch("https://www.boredapi.com/api/activity?key=5881028", {
        selector: (response) => response.json(),
    });
    const activity2$ = fromFetch("https://www.boredapi.com/api/activity?key=9008639", {
        selector: (response) => response.json(),
    });
    const error$ = throwError(() => "Something went wrong");
    // infinite
    const timerInterval1$ = timer(0, 2000);
    const timerInterval2$ = timer(0, 4000);

    // --- forkJoin with finite observables ---
    forkJoin([activity1$, activity2$]).subscribe({
        next: ([activity1, activity2]) => {
            console.log(
                `I'm going to ${activity1.activity.toLowerCase()} and ${activity2.activity.toLowerCase()}`
            );
            activityOne = activity1;
            activityTwo = activity2;
        },
        complete: () => console.log("forkJoin completed!"),
    });

    // --- forkJoin with infinite observables ---
    forkJoin([timerInterval1$, timerInterval2$]).subscribe(getFullObserver("infinite"));

    // --- forkJoin with finite and infinite observables ---
    forkJoin([activity1$, timerInterval1$]).subscribe(getFullObserver("finite and infinite"));

    // --- forkJoin with finite and error observables ---
    forkJoin([activity1$, error$]).subscribe(getFullObserver("finite & error"));

    // --- forkJoin empty array ---
    forkJoin([]).subscribe(getFullObserver("empty array"));
</script>

<section>
    <Page title="ForkJoin works" subTitle="(Open devtools)" />
    <section class="border-4 p-4 m-4 flex flex-col justify-center">
        <h1 class="text-2xl font-bold flex justify-center mb-4 text-gray-400">
            Combining http requests
        </h1>

        <div class="mt-2 flex flex-col items-center">
            <div class="font-bold">Activity One</div>
            <div>{activityOne?.activity ?? "Loading..."}</div>
        </div>
        <div class="mt-4 flex flex-col items-center">
            <div class="font-bold">Activity Two</div>
            <div>{activityTwo?.activity ?? "Loading..."}</div>
        </div>
    </section>
</section>
