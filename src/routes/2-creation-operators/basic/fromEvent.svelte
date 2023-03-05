<script lang="ts">
    import { fromEvent, Observable } from "rxjs";
    import { onMount } from "svelte";

    function customFromEvent<T extends Event>(
        eventTarget: Document | HTMLElement,
        eventName: string
    ) {
        return new Observable<T>((subscriber) => {
            const eventHandler = (event: T) => {
                subscriber.next(event);
            };

            eventTarget.addEventListener(eventName, eventHandler);

            return () => {
                eventTarget.removeEventListener(eventName, eventHandler);
            };
        });
    }

    onMount(() => {
        const square = document.getElementById("square");
        const input = document.getElementById("input");

        const clickEvent$ = fromEvent<MouseEvent>(square, "click");

        const clickSubscription = clickEvent$.subscribe((event) =>
            console.log("fromEvent: ", { eventType: event.type, x: event.x, y: event.y })
        );

        const keyDownSubscription = customFromEvent<KeyboardEvent>(input, "keydown").subscribe(
            (event) =>
                console.log("customFromEvent keydown: ", { eventType: event.type, key: event.key })
        );

        setTimeout(() => {
            clickSubscription.unsubscribe();
            keyDownSubscription.unsubscribe();
        }, 5000);
    });
</script>

<section class="flex flex-col h-60 justify-center items-center">
    <div id="square" class="w-36 h-36 bg-blue-600 m-6" />

    <input id="input" type="text" class="border border-solid border-gray-500 rounded-sm" />
</section>
