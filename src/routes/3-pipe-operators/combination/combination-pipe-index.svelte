<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.COMBINATION_PIPE_OPERATORS;
    const title = "Combination pipe operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
