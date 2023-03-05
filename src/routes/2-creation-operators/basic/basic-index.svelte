<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.BASIC_CREATION_OPERATORS;
    const title = "Basic creation operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
