<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.COMBINATION_CREATION_OPERATORS;
    const title = "Combination creation operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
