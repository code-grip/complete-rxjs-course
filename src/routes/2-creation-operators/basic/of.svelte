<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { Observable, of } from "rxjs";

    // of(
    //     3.14,
    //     true,
    //     "string argument",
    //     [1, 2, 3],
    //     Promise.resolve("promise value"),
    //     () => "hi"
    // ).subscribe({
    //     next: (value) => console.log(value),
    //     complete: () => console.log("of subscription completed"),
    // });

    of({ data: "something" });

    function customOf(...argumentsList): Observable<any> {
        return new Observable((subscriber) => {
            try {
                argumentsList.forEach((value) => subscriber.next(value));
                // throw new Error("something went wrong")
            } catch (err) {
                subscriber.error(err);
            }
            subscriber.complete();
        });
    }

    customOf(
        3.14,
        true,
        "string argument",
        [1, 2, 3],
        Promise.resolve("promise value"),
        () => "hi"
    ).subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error("customOf error: ", error.message),
        complete: () => console.log("customOf subscription completed"),
    });

</script>

<section>
    <Page title="Of works" subTitle="(Open devtools)" />
</section>
