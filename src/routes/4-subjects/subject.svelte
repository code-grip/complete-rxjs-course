<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { newsLetters } from "$utils/constants";
    import type { INewsLetter } from "$utils/interfaces";
    import { getFullObserver, getFullTapObserver } from "$utils/rxjs-prefab";
    import { delayWhen, from, interval, map, of, Subject, takeUntil, tap, timer } from "rxjs";
    import { onDestroy } from "svelte";

    /** basic subject behavior */
    const subject = new Subject();

    // multiple subscriptions, but shares same data with all observers
    // subject.subscribe(getFullObserver("observer 1"));
    // subject.subscribe(getFullObserver("observer 2"));

    // emit values
    // subject.next("something");
    // subject.error(() => new Error("something went wrong"))
    // subject.complete();

    /** newsLetter scenario */
    const newsLetterSubject$ = new Subject<INewsLetter>();

    from(newsLetters).pipe(
        delayWhen((newsLetter) => timer(newsLetter.releaseDate)),
        map((newsLetter) => ({ headline: newsLetter.headline }))
    );
    // .subscribe(newsLetterSubject$);
    // .subscribe({
    //     next: (newsLetter) => {
    //         console.log("---- emitting new newsLetter ----");
    //         newsLetterSubject$.next(newsLetter);
    //     },
    //     complete: () => {
    //         newsLetterSubject$.complete();
    //     }
    // });

    // subscriptions
    // newsLetterSubject$.pipe(tap(getFullTapObserver("(wizard subscriber)"))).subscribe();
    // newsLetterSubject$.pipe(tap(getFullTapObserver("(orc subscriber)"))).subscribe();

    // timer(6000).subscribe(() =>
    //     newsLetterSubject$.pipe(tap(getFullTapObserver("(fairy subscriber)"))).subscribe()
    // );

    /** using subjects in combination with takeUntil */
    const destroy$ = new Subject();

    interval(1000)
        .pipe(
            // as usual, a single next notification destroys the subscription,
            // in this case its coming from the subject when the component is destroyed
            takeUntil(destroy$.pipe(tap(getFullTapObserver("(destroy$)"))))
        )
        .subscribe(getFullObserver("interval"));

    onDestroy(() => {
        destroy$.next("onDestroy lifecycle event was triggered, sending next notification");
        destroy$.unsubscribe();

        // destroy$.next(
        //     "OnDestroy lifecycle event was triggered, sending last next notfification to all subscribers"
        // );
        // destroy$.unsubscribe();
    });
</script>

<section>
    <Page title="Subject works" subTitle="(Open devtools)" />
</section>
