import { Observable } from "rxjs";


/**
 * --------------------------------------------------------------
 * This file contains premade custom rxjs observables, functions & promises
 * --------------------------------------------------------------
 */

const activity = (sourceType: string) => ({ description: `baking a ${sourceType} cake` })

export const activityPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(activity("promise"));
  }, 2000);
});
export const activityErrorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("something went wrong");
  }, 2000);
});

export const activityHttpCall$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next(activity("observable"));
    subscriber.complete()
  }, 2000);
});

export const activityErrorHttpCall$ = new Observable(subscriber => {
  setTimeout(() => subscriber.error("something went wrong"), 2000);
})


// observables with primitive producers
export const stringObservable$ = new Observable(subscriber => {
  setTimeout(() => {
    ['Charlie', 'Alice', 'Bob'].forEach(val => subscriber.next(val))
    subscriber.complete()
  }, 2000)

  return () => {
    console.log('Teardown stringObservable');
  }
});

export const numberObservable$ = new Observable(subscriber => {
  [1, 2, 3].forEach(val => subscriber.next(val))
  subscriber.complete()

  return () => {
    console.log('Teardown numberObservable');
  }
});


// interval observables
export const numberIntervalObservable$ = new Observable<number>(subscriber => {
  let counter = 0;

  const intervalId = setInterval(() => {
    subscriber.next(counter++);
  }, 1000);

  return () => {
    console.log('numberIntervalObservable$ teardown function activated');
    clearInterval(intervalId);
  };
});

export const stringIntervalObservable$ = new Observable<string>(subscriber => {
  let counter = 0;

  const intervalId = setInterval(() => {
    subscriber.next(String.fromCharCode((counter++) + 97));
  }, 1000);

  return () => {
    console.log('stringIntervalObservable$ teardown function activated');
    clearInterval(intervalId);
  };
});
