<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.TRANSFORMATION_PIPE_OPERATORS;
    const title = "Transformation pipe operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
