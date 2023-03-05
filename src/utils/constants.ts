import type { IUser, Item, IActivity, ISchoolClass, INewsLetter } from "./interfaces"

/** lessons */
export const userMap: { [user: string]: IUser } = {
  spy: { id: 1, age: 20, name: "James", profession: "spy" },
  singer: { id: 2, age: 31, name: "Cassandra", profession: "singer" },
  ninja: { id: 3, age: 28, name: "Hanzo", profession: "ninja" },
  farmer: { id: 4, age: 48, name: "Thomas", profession: "farmer" },
  doctor: { id: 5, age: 38, name: "Hippocrates", profession: "doctor" },
  princess: { id: 6, age: 17, name: "Anna", profession: "princess" },
  wizard: { id: 7, age: 999, name: "Odin", profession: "wizard" },
  baby: { id: 8, age: 1, name: "Benjamin", profession: "baby" },
  dad: { id: 9, age: 33, name: "John", profession: "dad" },
  mom: { id: 10, age: 27, name: "Olivia", profession: "mom" }
}

export const activityMap: { [activity: string]: IActivity } = {
  basketball: { id: 1, duration: 60 * 60 * 1, description: "playing basketball", participants: 2 },
  cooking: { id: 2, duration: 60 * 60 * 0.5, description: "cooking a meal", participants: 1 },
  carRepair: { id: 3, duration: 60 * 60 * 2, description: "repairing a car", participants: 1 },
}

export const schoolClassMap: { [schoolClass: string]: ISchoolClass } = {
  biology: { title: "biology", category: "science" },
  mathematics: { title: "mathematics", category: "science" },
  drawing: { title: "drawing", category: "art" },
  painting: { title: "painting", category: "art" },
}

export const activityImgMap: { [activityId: number]: string } = {
  1: "/src/assets/img/activity/basketball.png",
  2: "/src/assets/img/activity/cooking.png",
  3: "/src/assets/img/activity/fixing.png",
}

export const userImgMap: { [userId: number]: string } = {
  1: "/src/assets/img/users/spy.png",
  2: "/src/assets/img/users/singer.png",
  3: "/src/assets/img/users/ninja.png",
  4: "/src/assets/img/users/farmer.png",
  5: "/src/assets/img/users/doctor.png",
  6: "/src/assets/img/users/princess.png",
  7: "/src/assets/img/users/wizard.png",
  8: "/src/assets/img/users/baby.png",
  9: "/src/assets/img/users/dad.png",
  10: "/src/assets/img/users/mom.png",
}

export function getImage(id, map) {
  return new URL(map[id], import.meta.url).href;
}

const currentTime = new Date();
export const newsLetters: INewsLetter[] = [
  {
    releaseDate: new Date(currentTime.getTime() + 5 * 1000),
    headline: "RxJS is awesome, here's why!",
    author: "CodeGrip",
  },
  {
    releaseDate: new Date(currentTime.getTime() + 10 * 1000),
    headline: "Why is there a new Javascript library released almost everyday?",
    author: "CodeGrip",
  },
  {
    releaseDate: new Date(currentTime.getTime() + 15 * 1000),
    headline: "Top 10 RxJS tips & tricks",
    author: "CodeGrip",
  },
];


/** meta */
// root paths -------------------------------------------
const fundamentalRoot = '/0-fundamentals'
const basicBuildingBlockRoot = '/1-building-blocks'
const creationOperatorsRoot = '/2-creation-operators'
const pipeOperatorsRoot = '/3-pipe-operators'

// sections -------------------------------------------
export const sections: Item[] = [
  {
    name: 'RxJs Fundamentals',
    description: 'Foundation of RxJS',
    route: fundamentalRoot,
  },
  {
    name: 'RxJS building blocks',
    description: 'Playing around with the basics',
    route: basicBuildingBlockRoot,
  },
  {
    name: 'Creation operators',
    description: 'Creating new observables with premade functions',
    route: creationOperatorsRoot,
  },
  {
    name: 'Pipe operators',
    description: 'Transforming observables with premade functions',
    route: pipeOperatorsRoot,
  }
]

// lessons -------------------------------------------
export const fundamentalConceptsLessons: Item[] = [
  {
    name: 'Appetizer',
    description: 'A first taste to prepare for the main dish',
    route: fundamentalRoot + '/appetizer',
  },
  {
    name: 'Iterator pattern',
    description: 'Iterate over any collection',
    route: fundamentalRoot + '/iterator',
  },
  {
    name: 'Observer pattern',
    description: 'Notify changes to observers',
    route: fundamentalRoot + '/observer',
  },
]

export const basicBuildingBlocksLessons: Item[] = [
  {
    name: 'Basic building blocks',
    description: 'Observable, producer, observer, subscription, unsubscribe',
    route: basicBuildingBlockRoot + '/basics',
  },
  {
    name: 'Observer notifications',
    description: 'Next, error, complete',
    route: basicBuildingBlockRoot + '/observer-notifications',
  },
  {
    name: 'Subscription management',
    description: 'Making space for other tasks',
    route: basicBuildingBlockRoot + '/subscription-management',
  },
  {
    name: 'Progress bar',
    description: 'Training the basics',
    route: basicBuildingBlockRoot + '/progress-bar',
  },
  {
    name: 'Hot & Cold',
    description: 'Observable behaviors',
    route: basicBuildingBlockRoot + '/hot-and-cold',
  },
]

/** creation operators */
export const creationOperatorsLessons: Item[] = [
  {
    name: 'Basic',
    route: creationOperatorsRoot + '/basic',
  },
  {
    name: 'Time',
    route: creationOperatorsRoot + '/time',
  },
  {
    name: 'Http',
    route: creationOperatorsRoot + '/http',
  },
  {
    name: 'Combination',
    route: creationOperatorsRoot + '/combination',
  },
]

export const basicCreationOperatorsLessons: Item[] = [

  {
    name: 'Of',
    route: creationOperatorsRoot + '/basic/of',
  },
  {
    name: 'From',
    route: creationOperatorsRoot + '/basic/from',
  },
  {
    name: 'FromEvent',
    route: creationOperatorsRoot + '/basic/fromEvent',
  },
]

export const timeCreationOperatorsLessons: Item[] = [
  {
    name: 'Timer and interval',
    route: creationOperatorsRoot + '/time/timer-and-interval',
  },
]

export const httpCreationOperatorsLessons: Item[] = [
  {
    name: 'Ajax and fromFetch',
    route: creationOperatorsRoot + '/http/ajax-and-fromFetch',
  },
]

export const combinationCreationOperatorsLessons: Item[] = [
  {
    name: 'ForkJoin',
    route: creationOperatorsRoot + '/combination/forkJoin',
  },
  {
    name: 'CombineLatest',
    route: creationOperatorsRoot + '/combination/combineLatest',
  },
]

/** pipe operators */
export const pipeOperatorsLessons: Item[] = [
  {
    name: 'Filtering',
    route: pipeOperatorsRoot + '/filtering',
  },
  {
    name: 'Utility',
    route: pipeOperatorsRoot + '/utility',
  },
  {
    name: 'Combination',
    route: pipeOperatorsRoot + '/combination',
  },
  {
    name: 'Error handling',
    route: pipeOperatorsRoot + '/error-handling',
  },
  {
    name: 'Subscription handling',
    route: pipeOperatorsRoot + '/subscription-handling',
  },
  {
    name: 'Transformation',
    route: pipeOperatorsRoot + '/transformation',
  },
]

export const filteringPipeOperatorsLessons: Item[] = [
  {
    name: 'Filter',
    route: pipeOperatorsRoot + '/filtering/filter',
  },
  {
    name: 'DistinctUntilChanged',
    route: pipeOperatorsRoot + '/filtering/distinctUntilChanged',
  },
]
export const utilityPipeOperatorsLessons: Item[] = [
  {
    name: 'Tap',
    route: pipeOperatorsRoot + '/utility/tap',
  },
]
export const combinationPipeOperatorsLessons: Item[] = [
  {
    name: 'WithLatestFrom',
    route: pipeOperatorsRoot + '/combination/withLatestFrom',
  },
]
export const errorHandlingPipeOperatorsLessons: Item[] = [
  {
    name: 'CatchError',
    route: pipeOperatorsRoot + '/error-handling/catchError',
  },
]
export const subscriptionHandlingPipeOperatorsLessons: Item[] = [
  {
    name: 'TakeUntil',
    route: pipeOperatorsRoot + '/subscription-handling/takeUntil',
  },
]
export const transformationPipeOperatorsLessons: Item[] = [
  {
    name: 'Map',
    route: pipeOperatorsRoot + '/transformation/map',
  },
  {
    name: 'Flattening',
    route: pipeOperatorsRoot + '/transformation/flattening',
  },
]

export const itemCollections = {
  SECTIONS: sections,

  FUNDAMENTAL_CONCEPTS: fundamentalConceptsLessons,

  BASIC_BUILDING_BLOCKS: basicBuildingBlocksLessons,

  CREATION_OPERATORS: creationOperatorsLessons,
  BASIC_CREATION_OPERATORS: basicCreationOperatorsLessons,
  TIME_CREATION_OPERATORS: timeCreationOperatorsLessons,
  HTTP_CREATION_OPERATORS: httpCreationOperatorsLessons,
  COMBINATION_CREATION_OPERATORS: combinationCreationOperatorsLessons,

  PIPE_OPERATORS: pipeOperatorsLessons,
  FILTERING_PIPE_OPERATORS: filteringPipeOperatorsLessons,
  UTILITY_PIPE_OPERATORS: utilityPipeOperatorsLessons,
  COMBINATION_PIPE_OPERATORS: combinationPipeOperatorsLessons,
  ERROR_HANDLING_PIPE_OPERATORS: errorHandlingPipeOperatorsLessons,
  SUBSCRIPTION_HANDLING_PIPE_OPERATORS: subscriptionHandlingPipeOperatorsLessons,
  TRANSFORMATION_PIPE_OPERATORS: transformationPipeOperatorsLessons,
}


