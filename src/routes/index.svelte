<script lang="ts">
    import Cards from "../lib/Cards.svelte";
    import { itemCollections } from "../utils/constants";
    
    const sections = itemCollections.SECTIONS;
    const title = "Complete RxJS course";
</script>

<main>
    <Cards {title} items={sections} />
</main>
