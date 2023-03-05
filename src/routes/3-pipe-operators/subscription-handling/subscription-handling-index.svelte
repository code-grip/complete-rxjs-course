<script lang="ts">
    import Cards from "$lib/Cards.svelte";
    import { itemCollections } from "$utils/constants";

    const lessons = itemCollections.SUBSCRIPTION_HANDLING_PIPE_OPERATORS;
    const title = "Subscription handling pipe operators";
</script>

<section>
    <Cards {title} items={lessons} />
</section>
