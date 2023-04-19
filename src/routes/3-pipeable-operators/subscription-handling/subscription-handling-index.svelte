<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.SUBSCRIPTION_HANDLING_PIPEABLE_OPERATORS;
    const title = "Subscription handling pipeable operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
