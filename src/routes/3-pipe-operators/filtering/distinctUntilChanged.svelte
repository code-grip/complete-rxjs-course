<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { userMap } from "$utils/constants";
    import type { IUser } from "$utils/interfaces";

    const numbers = [2, 2, 2, 1, 4, 4, 3];
    const users: IUser[] = [
        // destructuring so each user has its own object instance
        { ...userMap.ninja },
        { ...userMap.spy },
        { ...userMap.spy },
        { ...userMap.spy },
        { ...userMap.princess },
        { ...userMap.farmer },
        { ...userMap.farmer },
    ];

    /**--- primitives: no arguments needed ---*/

    /**--- objects: arguments needed ---*/
</script>

<section>
    <Page title="DistinctUntilChanged works" subTitle="(Open devtools)" />
</section>
