<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.UTILITY_PIPE_OPERATORS;
    const title = "Utility pipe operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
