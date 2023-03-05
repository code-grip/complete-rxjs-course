<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { getFullObserver } from "$utils/rxjs-prefab";
    import { ajax, AjaxResponse } from "rxjs/ajax";
    import { fromFetch } from "rxjs/fetch";

    // --- http request variables ---
    const url = "https://jsonplaceholder.typicode.com/posts";
    const headers = { "Content-Type": "application/json" };
    const postBody = {
        title: "Testing the POST request in RxJS",
        author: "CodeGrip",
    };
    const putBody = {
        title: "Testing the PUT request in RxJS",
        author: "CodeGrip",
    };

    /** GET */
    // default implicit behavior
    const selector = (response: Response) => response.json();

    // ajax(url + "/1").subscribe({
    //     next: (response: AjaxResponse<any>) => console.log("default ajax behavior: ", response.response),
    //     complete: () => console.log("ajax completed"),
    // });
    // fromFetch(url + "/1", {selector: selector}).subscribe({
    //     next: (response: Response) => console.log("default fromFetch behavior: ", response),
    //     complete: () => console.log("fromFetch completed"),
    // });

    // explicit http GET methods
    // ajax.get(url + "/1").subscribe(getFullObserver("ajax get"));
    // ajax.getJSON(url + "/1").subscribe(getFullObserver("ajax getJSON"));
    // fromFetch(url + "/1", { selector: selector, method: "GET" }).subscribe(
    //     getFullObserver("fromFetch get")
    // );

    /** POST */
    // ajax.post(url, postBody).subscribe((res) => console.log("ajax post: ", res.response));
    // fromFetch(url, {
    //     body: JSON.stringify(postBody),
    //     method: "POST",
    //     selector: selector,
    //     headers: headers,
    // }).subscribe((res) => console.log("fromFetch post: ", res));

    /** PUT */
    // ajax.put(url + "/1", putBody).subscribe((res) => console.log("ajax put: ", res.response));
    // fromFetch(url + "/1", {
    //     body: JSON.stringify(putBody),
    //     method: "PUT",
    //     selector: selector,
    //     headers: headers,
    // }).subscribe((res) => console.log("fromFetch put: ", res));

    /** DELETE */
    ajax.delete(url + "/1").subscribe((res) => console.log("ajax delete: ", res.response));
    fromFetch(url + "/1", { selector: selector, method: "DELETE" }).subscribe((res) =>
        console.log("fromFetch delete : ", res)
    );
</script>

<section>
    <Page title="Ajax & fromFetch works" subTitle="(Open devtools)" />
</section>
