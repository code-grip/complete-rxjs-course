<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.UTILITY_PIPEABLE_OPERATORS;
    const title = "Utility pipeable operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
