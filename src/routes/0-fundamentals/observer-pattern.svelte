<script>
    import { Observer, Subject } from "$utils/classes";
    import Page from "../../lib/Page.svelte";

    // make sure you import subject from the "classes.ts" file
    const subject = new Subject();

    const observer1 = new Observer();
    const observer2 = new Observer();
    const observer3 = new Observer();
    const observer4 = new Observer();

    // adds observers to the internal observers collection of the subject
    // ...do you notice something familiar?
    subject.subscribe(observer1);
    subject.subscribe(observer2);
    subject.subscribe(observer3);
    subject.subscribe(observer4);

    // emit message to all observers
    subject.notifyAllObservers();

    // remove observer from the observers collection
    subject.unsubscribe(observer4);

    // emit message to all observers (except observer 4)
    subject.notifyAllObservers();
</script>

<section>
    <Page title="Observer pattern" subTitle="(Open devtools)" />
</section>
