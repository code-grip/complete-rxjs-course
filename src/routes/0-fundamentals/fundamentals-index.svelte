<script lang="ts">
    import Cards from "../../lib/Cards.svelte";
    import { itemCollections } from "../../utils/constants";

    const lessons = itemCollections.FUNDAMENTAL_CONCEPTS;
    const title = "RxJS fundamental concepts";
</script>

<main>
    <Cards {title} items={lessons} />
</main>
