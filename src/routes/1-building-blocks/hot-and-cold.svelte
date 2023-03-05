<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { filter, first, fromEvent, Observable } from "rxjs";

    /**
     * cold observable -> new value stream for each subscription
     */

    // Math.random() will only create a random value after we subscribe
    const randomValue = Math.random();
    console.log("randomValue: ", randomValue);

    const coldObservable$ = new Observable((subscriber) => {
        // producer is inside observable scope

        subscriber.next(randomValue);
    });

    // both observables emit different values, typical cold observable behavior
    coldObservable$.subscribe((number) => {
        console.log("cold observable subscription 1: ", number);
    });
    coldObservable$.subscribe((number) => {
        console.log("cold observable subscription 2: ", number);
    });

    /**
     * hot observable -> same value stream for each subscription
     */
    // fromEvent: a prefab observable that focuses on emitting DOM events, in this case we want to emit click events when we click our mouse
    // inside this fromEvent observable the click events already are emitted even if we dont subscribe,
    // it's a good example of a hot observable
    const mouseClick$ = fromEvent<MouseEvent>(document, "click")

    // // How our fromEvent observable works inside
    // document.addEventListener("click", (event) => {
    //     console.log("(producer) mouse click event listener: ", {
    //         x: event.clientX,
    //         y: event.clientY,
    //     });

    //     // subscriber.next(event); // passing click event to subscriber
    // });

    //     // subscriber #1 starts to listen to the mouse events after 3s
    //     setTimeout(() => {
    //     console.log("---------------------------");
    //     console.log("#1 subscribed to the hot observable");

    //     mouseClick$.subscribe((event: MouseEvent) => {
    //         console.log("#1 mouse coordinates: ", {
    //             x: event.clientX,
    //             y: event.clientY,
    //         });
    //     });
    // }, 3000);

    // // subscriber #2 starts to listen to the mouse events after 5s
    // setTimeout(() => {
    //     console.log("---------------------------");
    //     console.log("#2 subscribed to the hot observable");

    //     mouseClick$.subscribe((event: MouseEvent) => {
    //         console.log("#2 mouse coordinates: ", {
    //             x: event.clientX,
    //             y: event.clientY,
    //         });
    //     });
    // }, 5000);
</script>

<section>
    <Page title="Hot & cold works" subTitle="(Open devtools)" />
</section>
