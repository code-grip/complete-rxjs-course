<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.TRANSFORMATION_PIPEABLE_OPERATORS;
    const title = "Transformation pipeable operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
