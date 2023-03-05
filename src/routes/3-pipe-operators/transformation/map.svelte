<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { schoolClassMap, userMap } from "$utils/constants";
    import type { ISchoolClass, IUser } from "$utils/interfaces";
    import { combineLatest, fromEvent } from "rxjs";
    import { onMount } from "svelte";

    /** marble diagram example */
    const users: IUser[] = [userMap.doctor, userMap.ninja, userMap.spy, userMap.farmer];

    /** order of pipeable operator is important */

    /** rewriting the combineLatest exercise by using pipe operators like map */
    const schoolClasses: ISchoolClass[] = [
        schoolClassMap.biology,
        schoolClassMap.mathematics,
        schoolClassMap.drawing,
        schoolClassMap.painting,
    ];
    let filteredClasses: ISchoolClass[] = schoolClasses;

    onMount(() => {
        // HTML elements
        const categoryDropdown = document.getElementById("category-dropdown");
        const titleSearch = document.getElementById("title-search");

        // fromEvents
        const categoryDropdown$ = fromEvent<Event>(categoryDropdown, "change").pipe();
        const titleSearch$ = fromEvent<InputEvent>(titleSearch, "input").pipe();

        // combined filter observables
        combineLatest([categoryDropdown$, titleSearch$]).subscribe(
            ([dropdownValue, titleValue]) => {
                const title = (titleValue.target as any).value;
                const category = (dropdownValue.target as any).value;

                filteredClasses = schoolClasses.filter(
                    (cl) => cl.title.includes(title) && cl.category === category
                );

                // if default is selected show all the classes and only allow filtering on title
                if (category === "default") {
                    filteredClasses = schoolClasses.filter((cl) => cl.title.includes(title));
                }
            }
        );
    });
</script>

<section>
    <Page title="Map works" subTitle="(Open devtools)" />

    <!-- filters -->
    <section id="filter-container" class="flex justify-center mt-8">
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
</section>
