<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { Observable, Subscriber, Subscription } from "rxjs";

    const simpleObservable$ = new Observable<number>(
        (subscriber: Subscriber<number>) => {
            // will be executed on calling the subscribe function
            subscriber.next(1);
            subscriber.next(32);
            setTimeout(() => {
                subscriber.next(42);
            }, 3000);
        }
    );

    /** -------- Producer examples -------- */
    const numberObservable$ = new Observable<number>((subscriber) => {
        subscriber.next(42);
        subscriber.next(3.14);
    });

    const arrayObservable$ = new Observable<number>((subscriber) => {
        const array = [1, 2, 3, 4];

        array.forEach((val) => {
            subscriber.next(val);
        });
    });

    const httpObservable$ = new Observable<Event>((subscriber) => {
        const http = new XMLHttpRequest();
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        http.open("GET", url);
        http.send();

        http.onreadystatechange = (httpEvent) => {
            subscriber.next(http.response);
        };
    });

    const eventListenerObservable$ = new Observable<{}>((subscriber) => {
        document.addEventListener("click", (event) => {
            subscriber.next({ x: event.clientX, y: event.clientY });
        });
    });

    const webSocketObservable$ = new Observable<MessageEvent>((subscriber) => {
        const ws = new WebSocket(
            "wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
        );

        ws.addEventListener("message", (event) => subscriber.next(event));
    });

    /** -------- Observer -------- */
    const observer = {
        // notify (observer pattern) + next (iterator pattern) = RxJS observer.next
        next: (value: number) => {
            console.log(
                "(standard subscribe) The observable has sent a new value: ",
                value
            );
        },
    };

    /** -------- Subscribing -------- */
    // // standard subscribe method
    const subscription: Subscription = simpleObservable$.subscribe(observer);

    // // shorthand subscribe method
    // simpleObservable$.subscribe((value: number) => {
    //     console.log(
    //         "(shorthand subscribe) The observable has sent a new value: ",
    //         value
    //     );
    // });

    /** -------- Unsubscribe -------- */
    // observer stops listening to incoming next notifications from the observable
    setTimeout(() => {
        subscription.unsubscribe();
        if (subscription.closed) console.log("Unsubscribed");
    }, 2000);
</script>

<section>
    <Page title="Basics works" subTitle="(Open devtools)" />
</section>
