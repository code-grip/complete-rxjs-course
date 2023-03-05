<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.HTTP_CREATION_OPERATORS;
    const title = "Http creation operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
