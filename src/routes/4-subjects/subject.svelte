<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { onDestroy } from "svelte";

    /** basic subject behavior */
    // multiple subscriptions, but shares same data with all observers

    // emit values

    /** newsLetter scenario */

    // subscriptions

    /** using subjects in combination with takeUntil */
    onDestroy(() => {});
</script>

<section>
    <Page title="Subject works" subTitle="(Open devtools)" />
</section>
