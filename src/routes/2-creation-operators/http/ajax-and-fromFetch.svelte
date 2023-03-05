<script lang="ts">
    import Page from "$lib/Page.svelte";

    // --- http request variables ---
    const url = "https://jsonplaceholder.typicode.com/posts";
    const headers = { "Content-Type": "application/json" };
    const postBody = {
        title: "Testing the POST request in RxJS",
        author: "CodeGrip",
    };
    const putBody = {
        title: "Testing the PUT request in RxJS",
        author: "CodeGrip",
    };

    /** GET */
    // default implicit behavior
    // explicit http GET methods

    /** POST */

    /** PUT */

    /** DELETE */
</script>

<section>
    <Page title="Ajax & fromFetch works" subTitle="(Open devtools)" />
</section>
