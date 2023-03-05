<script lang="ts">
    import { Observable } from "rxjs";
    import { onMount } from "svelte";

    // use these html elements to update the styling
    let progressColor: HTMLElement;
    let progressText: HTMLElement;

    // runs when the HTML in this file is loaded to the DOM
    onMount(() => {
        const progressCount$ = new Observable<number>((subscriber) => {
            const speed = 50;

            // ----------- create a producer that increments from 0 to 100 -----------
            let counter = 0;

            const intervalId = setInterval(() => {
                if (counter > 100) subscriber.complete();
                if (counter > 30) subscriber.error("Something went wrong!");

                subscriber.next(counter++);
            }, speed);

            return () => {
                clearInterval(intervalId);
            };
        });

        // update styling based on the incoming notification type
        progressCount$.subscribe({
            next: (progressCount) => {
                progressColor.style.width = progressCount + "%";
                progressText.textContent = progressCount + "%";
            },
            error: (error) => {
                progressColor.style.backgroundColor = "red";
                progressColor.style.width = "100%";

                progressText.textContent = error;
                progressText.style.color = "#fff";
            },
            complete: () => {
                progressColor.style.backgroundColor = "forestgreen";
                progressText.style.color = "#fff";
                progressText.textContent = "Complete!";

            },
        });
    });
</script>

<section>
    <!-- binds HTMLElement objects to divs so we can interact with them in the script tag-->
    <div bind:this={progressColor} class="h-full progress-color" />
    <div bind:this={progressText} />
</section>

<style>
    .progress-color {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        background-color: yellow;
    }
</style>
