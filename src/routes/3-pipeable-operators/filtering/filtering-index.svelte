<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.FILTERING_PIPEABLE_OPERATORS;
    const title = "Filtering pipeable operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
