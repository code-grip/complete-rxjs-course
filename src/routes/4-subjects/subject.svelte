<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { onDestroy } from "svelte";

    /** basic subject behavior */
    // multiple subscriptions, but shares same data with all observers

    // emit values

    /** newsLetter scenario */
    const colors = {
        wizard: "color:	#56b5ff",
        orc: "color: #ff6961",
        fairy: "color: #77dd77"
    }

    // subscriptions

    /** using subjects in combination with takeUntil */
    onDestroy(() => {});
</script>

<section>
    <Page title="Subject works" subTitle="(Open devtools)" />
</section>
