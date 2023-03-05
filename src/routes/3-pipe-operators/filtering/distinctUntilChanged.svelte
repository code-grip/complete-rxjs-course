<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { userMap } from "$utils/constants";
    import type { IUser } from "$utils/interfaces";
    import { getFullObserver } from "$utils/rxjs-prefab";
    import { distinctUntilChanged, distinctUntilKeyChanged, from } from "rxjs";

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
    from(numbers).pipe(distinctUntilChanged());
    // .subscribe(getFullObserver("distinctUntilChanged numbers"));

    /**--- objects: arguments needed ---*/
    from(users)
        .pipe(
            distinctUntilChanged(),
            // distinctUntilChanged(
            //     (previous, current) =>
            //         previous.profession === current.profession ||
            //         previous.age === current.age ||
            //         previous.name === current.name
            // ), 
            // distinctUntilChanged((previous, current) => JSON.stringify(previous) === JSON.stringify(current)),
            // distinctUntilChanged((previous, current) => _.isEqual(previous, current))
            distinctUntilKeyChanged("profession")
        )
        .subscribe(getFullObserver("distinctUntilChanged users"));
</script>

<section>
    <Page title="DistinctUntilChanged works" subTitle="(Open devtools)" />
</section>
