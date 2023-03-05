import { debounceTime, delay, filter, map, Observable, of, Subject, throwError, type Observer } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import type { TapObserver } from "rxjs/internal/operators/tap";

/**
 * --------------------------------------------------------------
 * This file contains premade custom rxjs observables & functions
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
    reject("something went wrong");
  }, 2000);
});

export const activityErrorHttpCall$ = new Observable(subscriber => {
  setTimeout(() => subscriber.error("something went wrong"), 2000);
})

export const activityHttpCall$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next(activity("observable"));
    subscriber.complete()
  }, 2000);
});



export const stringObservable$ = new Observable(subscriber => {
  setTimeout(() => {
    ['Charlie', 'Alice', 'Bob'].forEach(val => subscriber.next(val))
    subscriber.complete()
  }, 2000);

  return () => {
    // console.log('Teardown stringObservable');
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
    console.log('producer created a new value: ', counter);
  }, 1000);

  return () => {
    console.log('numberIntervalObservable$ teardown function activated');
    clearInterval(intervalId)
  };
});
export const stringIntervalObservable$ = new Observable<string>(subscriber => {
  let counter = 0;

  setInterval(() => {
    subscriber.next(String.fromCharCode((counter++) + 97));
  }, 1000);

  return () => {
    console.log('stringIntervalObservable$ teardown function activated');
  };
});


/**
 * simple function that returns a complete Observer object
 * @param label: tells us what situation the observer is observing
 * @returns {@type Observer}
 */
export function getFullObserver(label: string): Observer<any> {
  return {
    next: (value) => console.log(`${label}:`, value),
    error: (err) => console.error(`Error in ${label}: `, err),
    complete: () => console.log(`${label} completed!`),
  }
}

/**
 * simple function that returns a complete TapObserver object
 * @param label: tells us what situation the observer is observing
 * @returns {@type TapObserver}
 */
export function getFullTapObserver(label: string): TapObserver<any> {
  return {
    ...getFullObserver(label),
    subscribe: () => console.log(`${label} subscription started!`),
    unsubscribe: () => console.log(`${label} unsubscribed manually!`),
    finalize: () => console.log(`${label} subscription was destroyed!`),
  }
}

/**
 * @abstract fetches random user from the open source randomuser api
 * {@param specificProperty} if empty returns whole user object
 * object property keys we can pass as string arguments: https://randomuser.me/documentation#incexc   
 * {@param countryCode} only these country codes are allowed: https://randomuser.me/documentation#nationalities 
 */
export function fetchRandomUser(countryCode?: string, specificProperty?: string): Observable<any> {
  if (!countryCode) return throwError(() => "No country code provided")

  const url = "https://randomuser.me/api/"
  return fromFetch(`${url}${countryCode ? `?nat=${countryCode}` : ""}`, {
    selector: async (response) => {
      const result = (await response.json()).results[0];
      return result[specificProperty] ?? result;
    },
  }).pipe(
    // delay is a bit like the timer operator, they both use the setTimeOut function
    delay(Math.random() * 1500)
  );
}

/**
 * custom websocket observable (only emits websocket values)
 */
export const webSocket$ = new Observable<MessageEvent>((subscriber) => {
  const ws = new WebSocket(
    "wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV"
  );
  const type = "message";
  const eventHandler = (event) => subscriber.next(event)
  ws.addEventListener(type, eventHandler);

  return () => {
    ws.removeEventListener(type, eventHandler)
  }
}).pipe(
  filter(message => !!message.data),
  map((message, i) => `(${i}) ${message.data}`),
  debounceTime(750)
);
