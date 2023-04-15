<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { userMap } from "$utils/constants";
    import type { IUser } from "$utils/interfaces";
    import { LoginService } from "$utils/login-service";
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

    /** use case 2: side effects (influencing variables outside the subscribed observable) */
    onMount(() => {
        /** 2.1 collect users in state/store object */

        /** 2.2 update variables in different places */
    });

    /**
     * ---------------------------- full tap observer -----------------------------
     * Since RxJS v7.3.0 the tap observer has received some extra observer functions.
     * Besides the regular observer functions like next, error & complete,
     * we now also have the "subscribe, unsubscribe and finalize" functions.
     * ----------------------------------------------------------------------------
     */
    const label = "(tap)";
</script>

<section>
    <section class="border-4 p-8 m-4 flex flex-col justify-center">
        <h1 class="text-3xl font-bold flex justify-start mb-4 text-gray-400">1. Debugging</h1>
        <Page title="" subTitle="(Open devtools)" />
    </section>

    <section class="border-4 p-8 m-4 flex flex-col justify-center">
        <h1 class="text-3xl font-bold flex justify-start mb-4 text-gray-400">2. Side effects</h1>

        <h2 class="text-xl text-gray-300 font-bold flex justify-start">2.1 Users in store</h2>

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

