<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { userMap } from "$utils/constants";
    import type { ILoginData, IUser } from "$utils/interfaces";
    import { LoginService } from "$utils/login-service";
    import { getFullObserver } from "$utils/rxjs-prefab";
    import {
        distinctUntilChanged,
        distinctUntilKeyChanged,
        from,
        interval,
        of,
        tap,
        timer,
    } from "rxjs";
    import { onMount } from "svelte";

    const users: IUser[] = [
        { ...userMap.singer },
        { ...userMap.singer },
        { ...userMap.baby },
        { ...userMap.wizard },
        { ...userMap.wizard },
    ];

    // 2.1 store example
    let store = { users: [] as IUser[] };

    // 2.2 login example
    const loginService = new LoginService();
    let loggedInUserName: string;
    let loggedInUserToken: string;

    /** use case 1: debugging, logging the data coming through the pipeline */
    from(users).pipe(
        tap((user) => console.log("(tap observer) BEFORE distinctUntilChanged: ", user)),
        distinctUntilChanged((previous, current) => {
            // uh oh, we introduced a bug, by "accident" ;)
            return previous.profession === current.profession;
        }),
        tap((user) => console.log("(tap observer) AFTER distinctUntilChanged: ", user))
    );
    // .subscribe(getFullObserver("(final observer) debug example"));

    /** use case 2: side effects (influencing variables outside the subscribed observable) */
    onMount(() => {
        /** 2.1 collect users in state/store object */
        from(users)
            .pipe(
                distinctUntilKeyChanged("profession"),
                tap({
                    next: (user) => {
                        store = {
                            users: [...store.users, user],
                        };
                    },
                    complete: () => {
                        // console.log({ users: store.users });
                    },
                    error: (error) => {
                        console.error(error);
                    },
                })
            )
            // .subscribe(getFullObserver("(final observer) side effect example"));
            .subscribe();

        /** 2.2 update variables in different places */
        const randomUser = users[Math.floor(Math.random() * users.length)];

        loginService
            .loginUser(randomUser)
            .pipe(
                tap({
                    next: (loginData) => {
                        loggedInUserName = loginData.userName;
                        loggedInUserToken = loginService.loggedInUserToken;
                    },
                    complete: () => {},
                    error: (error) => {
                        console.error(error);
                    },
                })
            )
            .subscribe();
    });

    /**
     * ---------------------------- full tap observer -----------------------------
     * Since RxJS v7.3.0 the tap observer has received some extra observer functions.
     * Besides the regular observer functions like next, error & complete,
     * we now also have the "subscribe, unsubscribe and finalize" functions.
     * ----------------------------------------------------------------------------
     */
    const label = "(tap)";

    const subscription = interval(1000)
        // of(1, 2, 3)
        .pipe(
            tap({
                // classic observer functions
                ...getFullObserver(label),
                // TapObserver functions
                subscribe: () => console.log(`${label} subscription started!`),
                unsubscribe: () => console.log(`${label} unsubscribed manually!`),
                finalize: () => console.log(`${label} subscription was destroyed!`),
            })
        )
        .subscribe();

    // triggers the "unsubscribe" callback function in the "tap observer"
    // but only if the observable is infinite
    timer(2000).subscribe(() => subscription.unsubscribe());
</script>

<section>
    <section class="border-4 p-8 m-4 flex flex-col justify-center">
        <h1 class="text-3xl font-bold flex justify-start mb-4 text-gray-400">1. Debugging</h1>
        <Page title="" subTitle="(Open devtools)" />
    </section>

    <section class="border-4 p-8 m-4 flex flex-col justify-center">
        <h1 class="text-3xl font-bold flex justify-start mb-4 text-gray-400">2. Side effects</h1>

        <h2 class="text-xl text-gray-300 font-bold flex justify-start">2.1 Users in store</h2>

        <!-- uncomment the html below when the users are stored in the store -->

        <div class="flex flex-row w-full justify-start">
            {#each store.users as user}
                <div class="bg-green-200 rounded-md p-4 mr-4 my-4 flex flex-col w-40">
                    <h2 class="text-xl font-bold mb-1">{user.name}</h2>
                    <h3 class="text-gray-400">{user.profession?.toUpperCase()}</h3>
                    <h3 class="text-gray-400">{user.age}</h3>
                </div>
            {/each}
        </div>

        <h2 class="text-xl font-bold text-gray-300 flex justify-start">
            2.2 Logged in user data (fetched from 2 different places)
        </h2>

        <!-- uncomment the html below when the logged in user data is coming from 2 different locations -->

        <h4 class="text-md font-bold flex justify-start my-4">User name (tap.svelte)</h4>
        <div class="flex justify-start flex-row">{loggedInUserName ?? "Loading..."}</div>

        <h4 class="text-md font-bold flex justify-start my-4">User token (login-service.ts)</h4>
        <div class="flex justify-start">{loggedInUserToken ?? "Loading..."}</div>
    </section>

    <section class="border-4 p-8 m-4 flex flex-col">
        <h1 class="text-3xl font-bold flex justify-start mb-4 text-gray-400">3. Tap Observer</h1>
        <Page title="" subTitle="(Open devtools)" />
    </section>
</section>

