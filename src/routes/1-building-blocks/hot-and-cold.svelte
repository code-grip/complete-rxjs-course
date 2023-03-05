<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { fromEvent } from "rxjs";

    /**
     * cold observable -> new value stream for each subscription
     */

    /**
     * hot observable -> same value stream for each subscription
     */
    // fromEvent: a prefab observable that focuses on emitting DOM events, in this case we want to emit click events when we click our mouse
    // inside this fromEvent observable the click events already are emitted even if we dont subscribe,
    // it's a good example of a hot observable
    const mouseClick$ = fromEvent<MouseEvent>(document, "click")

</script>

<section>
    <Page title="Hot & cold works" subTitle="(Open devtools)" />
</section>
