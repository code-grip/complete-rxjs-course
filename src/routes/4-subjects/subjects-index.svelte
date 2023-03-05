<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.SUBJECTS;
    const title = "Subjects";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
