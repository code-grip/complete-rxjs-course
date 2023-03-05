<script lang="ts">
  import "tw-elements";
  import { location } from "svelte-spa-router";
  import Router from "svelte-spa-router";
  import Index from "$routes/index.svelte";
  import NotFound from "$lib/NotFound.svelte";
  import Navigation from "$lib/Navigation.svelte";
  // ----------------------------
  import RxjsAppetizer from "$routes/0-fundamentals/rxjs-appetizer.svelte";
  import Iterator from "$routes/0-fundamentals/iterator-pattern.svelte";
  import Observer from "$routes/0-fundamentals/observer-pattern.svelte";
  import FundamentalsIndex from "$routes/0-fundamentals/fundamentals-index.svelte";
  // ----------------------------
  import ProgressBar from "$routes/1-building-blocks/progress-bar.svelte";
  import HotAndCold from "$routes/1-building-blocks/hot-and-cold.svelte";
  import SubscriptionManagement from "$routes/1-building-blocks/subscription-management.svelte";
  import ObserverNotifications from "$routes/1-building-blocks/observer-notifications.svelte";
  import Basics from "$routes/1-building-blocks/basics.svelte";
  import BuildingBlocksIndex from "$routes/1-building-blocks/building-blocks-index.svelte";
  // ----------------------------
  import CreationOperatorsIndex from "$routes/2-creation-operators/creation-operators-index.svelte";
  import BasicIndex from "$routes/2-creation-operators/basic/basic-index.svelte";
  import TimeIndex from "$routes/2-creation-operators/time/time-index.svelte";
  import HttpIndex from "$routes/2-creation-operators/http/http-index.svelte";
  import CombinationIndex from "$routes/2-creation-operators/combination/combination-index.svelte";

  import Of from "$routes/2-creation-operators/basic/of.svelte";
  import From from "$routes/2-creation-operators/basic/from.svelte";
  import FromEvent from "$routes/2-creation-operators/basic/fromEvent.svelte";

  import TimerAndInterval from "$routes/2-creation-operators/time/timer-and-interval.svelte";

  import AjaxAndFromFetch from "$routes/2-creation-operators/http/ajax-and-fromFetch.svelte";

  import CombineLatest from "$routes/2-creation-operators/combination/combineLatest.svelte";
  import ForkJoin from "$routes/2-creation-operators/combination/forkJoin.svelte";
  // ----------------------------

  let routes = {
    // root
    "/": Index,

    // fundamentals
    "/0-fundamentals/": FundamentalsIndex,
    "/0-fundamentals/appetizer": RxjsAppetizer,
    "/0-fundamentals/iterator": Iterator,
    "/0-fundamentals/observer": Observer,

    // basic building blocks
    "/1-building-blocks/": BuildingBlocksIndex,
    "/1-building-blocks/basics": Basics,
    "/1-building-blocks/observer-notifications": ObserverNotifications,
    "/1-building-blocks/subscription-management": SubscriptionManagement,
    "/1-building-blocks/progress-bar": ProgressBar,
    "/1-building-blocks/hot-and-cold": HotAndCold,

    // creation operators
    "/2-creation-operators/": CreationOperatorsIndex,
    "/2-creation-operators/basic": BasicIndex,
    "/2-creation-operators/time": TimeIndex,
    "/2-creation-operators/http": HttpIndex,
    "/2-creation-operators/combination": CombinationIndex,
    // basic
    "/2-creation-operators/basic/of": Of,
    "/2-creation-operators/basic/from": From,
    "/2-creation-operators/basic/fromEvent": FromEvent,
    // time
    "/2-creation-operators/time/timer-and-interval": TimerAndInterval,
    // http
    "/2-creation-operators/http/ajax-and-fromFetch": AjaxAndFromFetch,
    // combination
    "/2-creation-operators/combination/forkJoin": ForkJoin,
    "/2-creation-operators/combination/combineLatest": CombineLatest,

    // not found
    "*": NotFound,
  };
</script>

<main class="flex justify-center items-center">
  {#if $location !== "/"}
    <div class="absolute left-4 top-4">
      <Navigation />
    </div>
  {/if}

  <Router {routes} />
</main>
