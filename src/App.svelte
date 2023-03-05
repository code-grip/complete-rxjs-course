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
  import PipeOperatorsIndex from "$routes/3-pipe-operators/pipe-operators-index.svelte";
  import TransformationIndex from "$routes/3-pipe-operators/transformation/transformation-index.svelte";
  import SubscriptionHandlingIndex from "$routes/3-pipe-operators/subscription-handling/subscription-handling-index.svelte";
  import ErrorHandlingIndex from "$routes/3-pipe-operators/error-handling/error-handling-index.svelte";
  import UtilityIndex from "$routes/3-pipe-operators/utility/utility-index.svelte";
  import FilteringIndex from "$routes/3-pipe-operators/filtering/filtering-index.svelte";
  import CombinationPipeIndex from "$routes/3-pipe-operators/combination/combination-pipe-index.svelte";

  import Filter from "$routes/3-pipe-operators/filtering/filter.svelte";
  import DistinctUntilChanged from "$routes/3-pipe-operators/filtering/distinctUntilChanged.svelte";

  import Tap from "$routes/3-pipe-operators/utility/tap.svelte";

  import WithLatestFrom from "$routes/3-pipe-operators/combination/withLatestFrom.svelte";

  import CatchError from "$routes/3-pipe-operators/error-handling/catchError.svelte";

  import TakeUntil from "$routes/3-pipe-operators/subscription-handling/takeUntil.svelte";

  import Map from "$routes/3-pipe-operators/transformation/map.svelte";
  import Flattening from "$routes/3-pipe-operators/transformation/flattening.svelte";
  // ----------------------------
  import SubjectsIndex from "$routes/4-subjects/subjects-index.svelte";
  import Subject from "$routes/4-subjects/subject.svelte";
  import BehaviorSubject from "$routes/4-subjects/behavior-subject.svelte";
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

    // pipe operators
    "/3-pipe-operators/": PipeOperatorsIndex,
    "/3-pipe-operators/filtering": FilteringIndex,
    "/3-pipe-operators/utility": UtilityIndex,
    "/3-pipe-operators/combination": CombinationPipeIndex,
    "/3-pipe-operators/error-handling": ErrorHandlingIndex,
    "/3-pipe-operators/subscription-handling": SubscriptionHandlingIndex,
    "/3-pipe-operators/transformation": TransformationIndex,

    // filtering
    "/3-pipe-operators/filtering/filter": Filter,
    "/3-pipe-operators/filtering/distinctUntilChanged": DistinctUntilChanged,
    // utility
    "/3-pipe-operators/utility/tap": Tap,
    // combination
    "/3-pipe-operators/combination/withLatestFrom": WithLatestFrom,
    // error handling
    "/3-pipe-operators/error-handling/catchError": CatchError,
    // subscription handling
    "/3-pipe-operators/subscription-handling/takeUntil": TakeUntil,
    // transformation
    "/3-pipe-operators/transformation/map": Map,
    "/3-pipe-operators/transformation/flattening": Flattening,

    // pipe operators
    "/4-subjects/": SubjectsIndex,
    "/4-subjects/subject": Subject,
    "/4-subjects/behaviorSubject": BehaviorSubject,

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
