<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.PIPEABLE_OPERATORS;
    const title = "Pipeable operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
