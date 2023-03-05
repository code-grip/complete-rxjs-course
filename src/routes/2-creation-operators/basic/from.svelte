<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { from, of, throwError } from "rxjs";

    /** main difference between of & from */
    // of([1, 2 ,3]).subscribe((value) => console.log("of: ", value));
    // from([1, 2 ,3]).subscribe((value) => console.log("from: ", value));

    /** strings or other iterables */
    // from("God").subscribe((v) => console.log(v));
    // from("God").subscribe((value) => console.log("string from: ", value));

    /** arrays or other collection data structures */
    // const map = new Map();
    // map.set(1, "Hello");
    // map.set(2, "World");
    // from(map).subscribe((value) => console.log("map from: ", value));

    /** promises */
    // from(Promise.resolve("by the time you read this i already got emitted to an observer through subscriber.next()")).subscribe({
    //     next: (value) => console.log(value),
    //     complete: () => console.log("from promise completed!")
    // })

    // from(Promise.reject("something went wrong!")).subscribe({
    //     next: (value) => console.log(value),
    //     error: (error) => console.error(error)
    // })

    /** observables as an argument */
    // from(of("of inside from")).subscribe({
    //     next: (value) => console.log(value),
    // });

    from(throwError(() => "custom error message")).subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error("observable inside from operator threw an error: ", error)
    });
</script>

<section>
    <Page title="From works" subTitle="(Open devtools)" />
</section>
