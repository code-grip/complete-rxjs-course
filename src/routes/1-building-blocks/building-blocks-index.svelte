<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.BASIC_BUILDING_BLOCKS;
    const title = "Basic building blocks";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
