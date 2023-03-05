<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.CREATION_OPERATORS;
    const title = "Creation operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
