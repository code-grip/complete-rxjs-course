<script lang="ts">
    import { schoolClassMap } from "$utils/constants";
    import type { ISchoolClass } from "$utils/interfaces";
    import { fromEvent, throwError } from "rxjs";
    import { fromFetch } from "rxjs/fetch";
    import { onMount } from "svelte";

    /** --- basic behaviors --- */
    const mouseClick$ = fromEvent<MouseEvent>(document, "click");
    const keyInput$ = fromEvent<KeyboardEvent>(document, "keydown");
    const httpCall$ = fromFetch("https://www.boredapi.com/api/activity?key=5881028", {
        selector: (response) => response.json(),
    });
    const error$ = throwError(() => "Something went wrong");

    /** --- classic combineLatest use case: applying filter criteria --- */
    const schoolClasses: ISchoolClass[] = [
        schoolClassMap.biology,
        schoolClassMap.mathematics,
        schoolClassMap.drawing,
        schoolClassMap.painting,
    ];
    let filteredClasses: ISchoolClass[] = schoolClasses;

    onMount(() => {
        const categoryDropdown = document.getElementById("category-dropdown");
        const titleSearch = document.getElementById("title-search");
    });
</script>

<main>
    <!-- filters -->
    <section id="filter-container" class="flex justify-center">
        <select id="category-dropdown" class="border-slate-200 border-solid rounded-md border-2">
            <option value="default" selected>--- Category ---</option>
            <option value="science">Science</option>
            <option value="art">Art</option>
        </select>
        <input
            id="title-search"
            type="text"
            class="ml-4 border-slate-200 rounded-md border-solid border-2"
        />
    </section>

    <!-- cards -->
    <section class="flex my-4 h-48 w-full flex-wrap justify-center">
        {#each filteredClasses as schoolClass}
            <div
                class="bg-slate-200 rounded-md p-4 m-4 flex flex-basis flex-col justify-between w-48 h-48"
            >
                <div class="mb-12">
                    <h2 class="text-2xl font-bold mb-1">{schoolClass.title}</h2>
                    <h3 class="text-gray-400 text-">{schoolClass.category}</h3>
                </div>
            </div>
        {/each}
    </section>
</main>
