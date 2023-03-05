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
        });

        // shared style for progress bar
        progressColor.style.position = "absolute";

        // update styling based on the incoming notification type
    });
</script>

<section>
    <!-- binds HTMLElement objects to divs so we can interact with them in the script tag-->
    <div bind:this={progressColor} class="h-full"/>
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
