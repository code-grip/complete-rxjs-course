<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { Observable, type Observer, type PartialObserver } from "rxjs";

    const observer: PartialObserver<string> = {
        next: (value) => console.log("Next notification: ", value),
        error: (err) => console.error("Error notification: ", err),
        complete: () => console.log("Observable completed!"),
    };

    const observable$ = new Observable<string>((subscriber) => {
        subscriber.next("(sync) Rhinoceros beetle");
        subscriber.next("(sync) Singularity point");

        subscriber.complete();

        subscriber.error("Error message!!");

        setTimeout(() => {
            subscriber.next("(async) Heaven");
        }, 2000);

        // teardown
        return () => {
            console.log("Teardown function activated");
        };
    });

    console.log("------ before subscribe ------");
    observable$.subscribe(observer);
    console.log("------ after subscribe ------");
</script>

<section>
    <Page title="Observer notifications works" subTitle="(Open devtools)" />
</section>
