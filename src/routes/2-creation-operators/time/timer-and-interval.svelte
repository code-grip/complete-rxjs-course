<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { interval, Observable, timer } from "rxjs";
    import { SafeSubscriber } from "rxjs/internal/Subscriber";

    /** basic interval operator functionality */
    // interval(2000).subscribe((value) => console.log("interval: ", value));

    /** basic timer operator functionality */
    // timer(2000).subscribe((value) => console.log("timer: ", value));
    // timer(2000, 1000).subscribe((value) => console.log("timer: ", value));
    // timer(0, 1000).subscribe((value) => console.log("timer: ", value));

    /** custom timer operator */
    function customTimer(start: number, interval?: number) {
        return new Observable<number>((subscriber) => {
            let count = 0;
            let intervalId, timeOutId;

            timeOutId = setTimeout(() => {
                if (interval) {
                    intervalId = setInterval(() => {
                        subscriber.next(count);
                        count++;
                    }, interval);
                } else {
                    subscriber.next(count);
                    subscriber.complete();
                }
            }, start);

            return () => {
                clearInterval(intervalId);
                clearTimeout(timeOutId);
            };
        });
    }

    // customTimer(2000).subscribe((value) => console.log("timer: ", value));
    // const timerSubscription = customTimer(2000, 1000).subscribe((value) => console.log("timer: ", value));
    // const timerSubscription = customTimer(0, 1000).subscribe((value) => console.log("timer: ", value));

    // setTimeout(() => {
    //     timerSubscription.unsubscribe();
    // }, 5000);

    // customTimer(5000).subscribe(() => timerSubscription.unsubscribe())

    /** custom interval operator */

    function customInterval(interval: number) {
        return new Observable<number>((subscriber) => {
            let count = 0;

            const intervalId = setInterval(() => {
                subscriber.next(count);
                count++;
            }, interval);

            return () => {
                clearInterval(intervalId);
            };
        });
    }

    // customInterval(2000).subscribe((value) => console.log("interval: ", value));

    /** bonus: using specific dates in the timer operator */
    const triggerDate = new Date();
    triggerDate.setSeconds(triggerDate.getSeconds() + 5);

    // timer(triggerDate, 1000).subscribe((value) => console.log("timer: ", value));
</script>

<section>
    <Page title="Timer & interval works" subTitle="(Open devtools)" />
</section>
