<script lang="ts">
	import { activityErrorHttpCall$, activityErrorPromise, activityHttpCall$, activityPromise } from '$utils/rxjs-prefab';
    import Page from "$lib/Page.svelte";
    import type { IActivity } from "$utils/interfaces";

    /** eventListener */
    document.addEventListener("click", (clickEvent) => {
        try {
            console.log(clickEvent.clientX);
        } catch (error) {
            console.error(error);
        }
    });

    // some variable/state that needs to be updated
    let currentActivity = "nothing";

    /** promise */
    // activityPromise.then(
    activityErrorPromise.then(
        (activity: IActivity) => {
            currentActivity = activity.description;
            console.log(currentActivity);
        },
        (error) => {
            console.error(error);
        }
    );

    /** observable */
    // activityHttpCall$.subscribe({
    activityErrorHttpCall$.subscribe({
        next: (activity: IActivity) => {
            currentActivity = activity.description;
            console.log(currentActivity);
        },
        error: (error) => console.error(error),
    });
</script>

<section>
    <Page title="Appetizer" subTitle="(Open devtools)" />
</section>
