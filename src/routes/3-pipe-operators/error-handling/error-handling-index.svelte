<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.ERROR_HANDLING_PIPE_OPERATORS;
    const title = "Error handling pipe operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
