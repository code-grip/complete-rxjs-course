<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.TIME_CREATION_OPERATORS;
    const title = "Time creation operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
