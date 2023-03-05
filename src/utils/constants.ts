import type { Item } from "$utils/interfaces"

// root paths -------------------------------------------
const fundamentalRoot = '/0-fundamentals'
const basicBuildingBlockRoot = '/1-building-blocks'

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
]

// lessons -------------------------------------------
export const fundamentalConceptsLessons: Item[] = [
  {
    name: 'Appetizer',
    description: '',
    route: fundamentalRoot + '/appetizer',
  },
  {
    name: 'Iterator pattern',
    description: '',
    route: fundamentalRoot + '/iterator',
  },
  {
    name: 'Observer pattern',
    description: '',
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

export const itemCollections = {
  SECTIONS: sections,
  FUNDAMENTAL_CONCEPTS: fundamentalConceptsLessons,
  BASIC_BUILDING_BLOCKS: basicBuildingBlocksLessons,
}


