<script lang="ts">
    import Page from "$lib/Page.svelte";
    import {
        numberIntervalObservable$,
        numberObservable$,
        stringIntervalObservable$,
        stringObservable$,
    } from "$utils/rxjs-prefab"
    import { Subscription } from "rxjs";

    // /** finite observables */
    // const finiteStringSubscription = stringObservable$.subscribe({
    //     next: (string) => console.log("(finite) stringObservable:", string),
    //     complete: () => console.log("(finite) stringObservable: Completed"),
    // });
    // const finiteNumberSubscription = numberObservable$.subscribe({
    //     next: (number) => console.log("(finite) numberObservable:", number),
    //     complete: () => console.log("(finite) numberObservable: Completed"),
    // });

    // /** unsubscribing finite observables */
    // finiteNumberSubscription.unsubscribe();

    /** infinite observables */
    const numberSubscriptionInfinite = numberIntervalObservable$.subscribe(
        (numberInterval) =>
            console.log("(infinite) number interval:", numberInterval)
    );
    // const stringSubscriptionInfinite = stringIntervalObservable$.subscribe(
    //     (stringInterval) =>
    //         console.log("(infinite) string interval:", stringInterval)
    // );

    // --- unsubscribe strategies ---
    // one by one
    // grouped
    // (takeUntil)

    // // unsubscribing each subscription one by one
    // setTimeout(() => {
    //     console.log("destroying all observable subscriptions one by one");
    //     numberSubscriptionInfinite.unsubscribe();
    //     stringSubscriptionInfinite.unsubscribe();
    //     console.log("There should be no more updates after this point");
    // }, 3000);

    // Collecting all subscription objects in one parent object and unsubscribe that single parent subscription
    // This makes it easier to manage groups of subscriptions that need to be unsubscribed at different times
    // const parentSubscription = new Subscription();
    // parentSubscription.add(numberSubscriptionInfinite);
    // parentSubscription.add(stringSubscriptionInfinite);

    // setTimeout(() => {
    //     console.log("destroying all observable subscriptions in one go");
    //     parentSubscription.unsubscribe();
    //     console.log("There should be no more updates after this point");
    // }, 3000);

    /** Teardown function use case */
    setTimeout(() => {
        numberSubscriptionInfinite.unsubscribe();
        console.log("There should be no more updates after this point");
    }, 3000);
</script>

<section>
    <Page title="Subscription management works" subTitle="(Open devtools)" />
</section>
