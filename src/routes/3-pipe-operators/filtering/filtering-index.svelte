<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.FILTERING_PIPE_OPERATORS;
    const title = "Filtering pipe operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
