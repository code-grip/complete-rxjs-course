<script>
  import Page from "$lib/Page.svelte";
  import { Iterator } from "$utils/classes";

  // iterator implementation
  const iterator = new Iterator([10, 20, 30]);

  const value1 = iterator.next();
  const value2 = iterator.next();
  const value3 = iterator.next();

  console.log("value1: ", value1); // => { nextValue: 10, isDone: false }
  console.log("value2: ", value2); // => { nextValue: 20, isDone: false }
  console.log("value3: ", value3); // => { nextValue: 30, isDone: true }

  const value4 = iterator.next() // value4 returns same value as value3
  console.log('value4: ', value4) // => { nextValue: 30, isDone: true }
</script>

<section>
  <Page title="Iterator pattern" subTitle="(Open devtools)" />
</section>
