<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.ERROR_HANDLING_PIPEABLE_OPERATORS;
    const title = "Error handling pipeable operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
