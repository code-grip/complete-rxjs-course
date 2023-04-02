<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { numberIntervalObservable$, numberObservable$, stringIntervalObservable$, stringObservable$ } from "$utils/rxjs-prefab";

    /** finite observables */
    const finiteStringSubscription = stringObservable$.subscribe({
        next: (string) => console.log("(finite) stringObservable:", string),
        complete: () => console.log("(finite) stringObservable: Completed"),
    });
    const finiteNumberSubscription = numberObservable$.subscribe({
        next: (number) => console.log("(finite) numberObservable:", number),
        complete: () => console.log("(finite) numberObservable: Completed"),
    });
    
    /** unsubscribing finite observables */

    /** infinite observables */
    // const numberSubscriptionInfinite = numberIntervalObservable$.subscribe(
    //     (numberInterval) =>
    //         console.log("(infinite) number interval:", numberInterval)
    // );
    // const stringSubscriptionInfinite = stringIntervalObservable$.subscribe(
    //     (stringInterval) =>
    //         console.log("(infinite) string interval:", stringInterval)
    // );

    /** Teardown function use case */
</script>

<section>
    <Page title="Subscription management works" subTitle="(Open devtools)" />
</section>
