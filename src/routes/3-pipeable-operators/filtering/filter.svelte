<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { userMap } from "$utils/constants";
    import type { IUser } from "$utils/interfaces";
    import { getFullObserver } from "$utils/rxjs-prefab";
    import { filter, from } from "rxjs";

    const users: IUser[] = [null, userMap.spy, userMap.dad, userMap.baby, userMap.mom];
    

    // basic use case
    from(users)
        .pipe(
            // filter((user) => user.age > 18),
            // filter((user) => user.profession === "dad" || user.profession === "mom"),
            // filter((user) => user.name === "John"),
            // or
            filter(
                (user) =>
                    !!user &&
                    user.age > 21 &&
                    (user.profession === "dad" || user.profession === "mom") &&
                    user.name === "John"
            ),
            filter((user) => {
                throw new Error("Something went wrong");
            })
        )
        .subscribe(getFullObserver("filter"));

    // error use case
    // from(data).subscribe(getFullObserver("error filter"));
</script>

<section>
    <Page title="Filter works" subTitle="(Open devtools)" />
</section>
