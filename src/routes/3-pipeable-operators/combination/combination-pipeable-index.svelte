<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.COMBINATION_PIPEABLE_OPERATORS;
    const title = "Combination pipeable operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
