<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { userMap } from "$utils/constants";
    import type { IUser } from "$utils/interfaces";
    
    const users: IUser[] = [userMap.spy, userMap.dad, userMap.baby, userMap.mom];
    
</script>

<section>
    <Page title="Filter works" subTitle="(Open devtools)" />
</section>
