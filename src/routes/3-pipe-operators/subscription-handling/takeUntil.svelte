<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { getFullObserver, getFullTapObserver } from "$utils/rxjs-prefab";
    import {
        timer,
        interval,
        fromEvent,
        delay,
        tap,
        NEVER,
        map,
    } from "rxjs";
    import { onMount } from "svelte";
    import { getCat } from "../error-handling/animals";

    onMount(() => {
        /** --- basic unsubscribe strategy --- */
        // issue 1: lack of control/logic when to destroy our subscription
        const subscription = interval(1000)
            // .subscribe(getFullObserver('classic unsubscription'))
        timer(5000)
            // .subscribe(() => subscription.unsubscribe())

        // issue 2: lots of individual subscriptions = easy to introduce memory leaks

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
        );

        /** example 1: interval producer */

        /** example 2: takeUntil on combineLatest operator */
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
