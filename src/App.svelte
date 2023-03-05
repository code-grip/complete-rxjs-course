<script lang="ts">
  import Index from "./routes/index.svelte";
  import NotFound from "./routes/not-found.svelte";
  import RxjsAppetizer from "./routes/0-fundamentals/rxjs-appetizer.svelte";
  import Iterator from "./routes/0-fundamentals/iterator-pattern.svelte";
  import Observer from "./routes/0-fundamentals/observer-pattern.svelte";
  import Router from "svelte-spa-router";
  import FundamentalsIndex from "./routes/0-fundamentals/fundamentals-index.svelte";
  import Navigation from "./lib/Navigation.svelte";
  import { location } from "svelte-spa-router";
  import "tw-elements";

  let routes = {
    // root
    "/": Index,

    // fundamentals
    "/0-fundamentals/": FundamentalsIndex,
    "/0-fundamentals/appetizer": RxjsAppetizer,
    "/0-fundamentals/iterator": Iterator,
    "/0-fundamentals/observer": Observer,

    // not found
    "*": NotFound,
  };
</script>

<main class="flex justify-center items-center w-full">
  {#if $location !== "/"}
    <div class="absolute left-4 top-4">
      <Navigation />
    </div>
  {/if}

  <Router {routes} />
</main>

<style></style>
