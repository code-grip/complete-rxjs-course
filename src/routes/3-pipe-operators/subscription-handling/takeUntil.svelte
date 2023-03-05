<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { getFullObserver, getFullTapObserver, webSocket$ } from "$utils/rxjs-prefab";
    import {
        timer,
        interval,
        fromEvent,
        combineLatest,
        delay,
        takeUntil,
        tap,
        NEVER,
        share,
        of,
        map,
    } from "rxjs";
    import { onMount } from "svelte";
    import { getCat } from "../error-handling/animals";

    onMount(() => {
        /** --- basic unsubscribe strategy --- */
        // issue 1: lack of control/logic when to destroy our subscription
        // const subscription = interval(1000).subscribe(getFullObserver('classic unsubscription'))
        // timer(5000).subscribe(() => subscription.unsubscribe())

        // issue 2: lots of subscriptions, messy, easy to forget -> memory leaks
        // const subscription1 = interval(1000).subscribe();
        // const subscription2 = interval(1000).subscribe();
        // const subscription3 = interval(1000).subscribe();
        // const subscription4 = interval(1000).subscribe();
        // const subscription5 = interval(1000).subscribe();
        // const subscription6 = interval(1000).subscribe();
        // const subscription7 = interval(1000).subscribe();

        // subscription1.unsubscribe();
        // subscription3.unsubscribe();
        // subscription5.unsubscribe();
        // subscription7.unsubscribe();
        // subscription6.unsubscribe();
        // subscription4.unsubscribe();
        // subscription2.unsubscribe();

        /** --- subscription management with takeUntil  --- */
        // notifiers: observables that emit a single next notification to let the takeuntil operator know it needs to send a complete notification
        const timerNotifier$ = timer(6000);
        const intervalNotifier$ = interval(4000);
        const httpNotifier$ = getCat().pipe(delay(6000));
        const clickNotifier$ = fromEvent<MouseEvent>(
            document.querySelector("#stop-button"),
            "click"
        ).pipe(map((mouseEvent) => mouseEvent.clientY));
        const neverNotifier$ = NEVER;

        // fill in your notifier observable here
        const notifier$ = clickNotifier$.pipe(
            tap(getFullTapObserver("(notifier)")), // change to tapobserver on interval notifier
            share() // multicasts the next notification among all takeUntil operators
        );

        /** example 1: interval producer */
        const infiniteSource1$ = interval(2000).pipe(takeUntil(notifier$));
        const infiniteSource2$ = webSocket$.pipe(takeUntil(notifier$));
        const infiniteSource3$ = webSocket$.pipe(takeUntil(notifier$));

        // infiniteSource1$.subscribe(getFullObserver("interval$"));
        // infiniteSource2$.subscribe(getFullObserver("websocket$(1)"));
        // infiniteSource3$.subscribe(getFullObserver("websocket$(2)"));

        // if we want to do something else with the http response,
        // we can still subscribe to it because of the share operator, so we get the same response.
        // notifier$.subscribe((httpResponse) => console.log("http request returned: ", httpResponse));

        /** example 2: takeUntil on combineLatest operator */
        combineLatest([infiniteSource1$, infiniteSource2$])
            .pipe(takeUntil(notifier$))
            .subscribe(getFullObserver("combineLatest"))
    });
</script>

<section>
    <Page title="TakeUntil works" subTitle="(Open devtools)" />

    <button
        data-mdb-ripple="true"
        type="button"
        class="bg-red-500 text-sm rounded-sm h-16 w-72 text-white font-bold mt-8"
        data-mdb-ripple-color="light"
        id="stop-button"
    >
        Stop all subscriptions
    </button>
</section>
