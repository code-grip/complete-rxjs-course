<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { activityImgMap, activityMap, getImage, userImgMap, userMap } from "$utils/constants";
    import type { IActivity, IUser } from "$utils/interfaces";
    import { getFullTapObserver } from "$utils/rxjs-prefab";
    import { fromEvent, map, tap, withLatestFrom } from "rxjs";
    import { onMount } from "svelte";

    // data
    const users: IUser[] = [userMap.doctor, userMap.ninja, userMap.spy, userMap.farmer];
    const activities: IActivity[] = [
        activityMap.basketball,
        activityMap.cooking,
        activityMap.carRepair,
    ];

    // variables
    let emittedUserImg, emittedActivityImg, nextActivityImg;

    onMount(() => {
        const userButton = document.querySelector("#user-button");
        const activityButton = document.querySelector("#activity-button");

        //  emits a user on each click
        const users$ = fromEvent(userButton, "click").pipe(
            map((click, i) => users[i % users.length])
        );

        //  emits an activity on each click
        const activities$ = fromEvent(activityButton, "click").pipe(
            map((click, i) => activities[i % activities.length]),
            tap((activity) => {
                nextActivityImg = getImage(activity.id, activityImgMap);
                console.log(`---- next activity: ${activity.description} ----`);
            })
        );

        users$
            .pipe(
                withLatestFrom(activities$.pipe(tap(getFullTapObserver("tap")))),
                tap(([user, activity]) => {
                    console.log(`(${user.profession}) ${user.name} is ${activity.description}`);

                    emittedActivityImg = getImage(activity.id, activityImgMap);
                    emittedUserImg = getImage(user.id, userImgMap);
                })
            )
            .subscribe();
    });
</script>

<section>
    <Page title="WithLatestFrom works" subTitle="(Open devtools)" />

    <!-- next user & activity -->
    <div class="flex justify-center items-center mt-8 w-96">
        <!-- user -->
        <div class="flex flex-col items-center mr-4">
            <button
                data-mdb-ripple="true"
                type="button"
                class="bg-green-500 capitalize text-sm rounded-sm h-8 w-32 font-bold "
                data-mdb-ripple-color="light"
                id="user-button"
            >
                next user
            </button>
            <img
                src={emittedUserImg ?? "/src/assets/img/empty.png"}
                alt="activeUserImg"
                class="w-16 h-16 mt-4"
            />
        </div>

        <!-- activity -->
        <div class="flex flex-col items-center ml-4">
            <button
                data-mdb-ripple="true"
                type="button"
                class="bg-orange-400 capitalize text-sm rounded-sm h-8 w-32 font-bold"
                data-mdb-ripple-color="light"
                id="activity-button"
            >
                next activity
            </button>
            <img
                src={nextActivityImg ?? "/src/assets/img/empty.png"}
                alt="activeActivityImg"
                class="w-16 h-16 mt-4"
            />
        </div>
    </div>

    <!-- result -->
    <div class="flex flex-col w-full items-center font-bold text-xl">
        <h1 class="mt-8">Result</h1>
        <div class="flex flex-row items-center justify-center">
            <p class="flex font-bold text-5xl items-center">
                [
                <img
                    src={emittedUserImg ?? "/src/assets/img/empty.png"}
                    alt="activeUserImg"
                    class="w-16 h-16"
                />,
                <img
                    src={emittedActivityImg ?? "/src/assets/img/empty.png"}
                    alt="activeActivityImg"
                    class="w-16 h-16"
                />
                ]
            </p>
        </div>
    </div>
</section>
