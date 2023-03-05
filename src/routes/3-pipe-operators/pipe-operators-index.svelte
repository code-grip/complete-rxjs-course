<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.PIPE_OPERATORS;
    const title = "Pipe operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
