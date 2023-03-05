<script lang="ts">
    import { newsLetters } from "$utils/constants";
    import type { INewsLetter } from "$utils/interfaces";
    import { BehaviorSubject, delayWhen, from, map, Subject, timer } from "rxjs";
    import { onMount } from "svelte";

    /** -------- newsLetter scenario -------- */
    const newsLetterSubject$ = new Subject<INewsLetter>();

    from(newsLetters)
        .pipe(
            delayWhen((newsLetter) => timer(newsLetter.releaseDate)),
            map((newsLetter) => ({ headline: newsLetter.headline }))
        )
        .subscribe(newsLetterSubject$);

    // newsLetterSubject$.pipe(tap(getFullTapObserver("(wizard subscriber)"))).subscribe();
    // newsLetterSubject$.pipe(tap(getFullTapObserver("(orc subscriber)"))).subscribe();
    // timer(6000).subscribe(() =>
    //     newsLetterSubject$.pipe(tap(getFullTapObserver("(fairy subscriber)"))).subscribe()
    // );

    /** -------- store example -------- */
    const store$ = new BehaviorSubject({
        animals: [{ name: "Cat" }, { name: "Dog" }, { name: "Monkey" }],
        caretaker: { name: "John" },
    });

    onMount(() => {
        // status html element
        const storeStatus = document.querySelector("#store-status");
        // buttons
        const showStoreStatusButton = document.querySelector("#show-store-status");
        const addAnimalButton = document.querySelector("#update-animal-button");
        const updateCareTakerButton = document.querySelector("#update-caretaker-button");
        // input
        const animalInput: HTMLInputElement = document.querySelector("#animal-input");
        const careTakerInput: HTMLInputElement = document.querySelector("#caretaker-input");

        // update animals

        // update caretaker

        // show store status
    });

    // extra store functions
</script>

<section>
    <!-- store status -->
    <p class="my-4" id="store-status" />
    <button
        id="show-store-status"
        data-mdb-ripple="true"
        data-mdb-ripple-color="gray"
        class="p-3 bg-slate-200 rounded-md w-full"
    >
        Check store
    </button>

    <!-- show data in store -->
    <section class="mt-4 w-full">
        <h1 class="text-2xl font-bold my-2">Store</h1>
        <div class="flex justify-between h-48">
            <div class="flex-1 mr-2 border-2 border-solid  border-gray-500 rounded-sm p-3">
                <h1 class="text-xl font-bold">Animals</h1>
                <div class="overflow-y-auto max-h-32">
                    {#each [] as animal}
                        <p>{animal.name}</p>
                    {/each}
                </div>
            </div>

            <div class="flex-1  ml-2 border-2 border-solid border-gray-500 rounded-sm p-3">
                <h1 class="text-xl font-bold">Caretaker</h1>
                {$store$.caretaker?.name}
            </div>
        </div>
    </section>

    <!-- update store -->
    <div class="flex flex-col mt-16 w-full">
        <div class="mb-4 flex">
            <button
                id="update-animal-button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="gray"
                class="p-3 bg-slate-200 rounded-md w-full"
            >
                Add animal
            </button>
            <input
                id="animal-input"
                type="text"
                autocomplete="off"
                placeholder="animal"
                class="ml-4 border-slate-200 pl-4 rounded-md border-solid border-2"
            />
        </div>
        <div class="mb-4 flex">
            <button
                id="update-caretaker-button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="gray"
                class="p-3 bg-slate-200 rounded-md w-full"
            >
                Update caretaker
            </button>
            <input
                id="caretaker-input"
                type="text"
                autocomplete="off"
                placeholder="caretaker"
                class="ml-4 border-slate-200 pl-4 rounded-md border-solid border-2"
            />
        </div>
    </div>
</section>
