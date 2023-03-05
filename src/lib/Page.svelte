<script lang="ts">
    export let title: string;
    export let subTitle = "";
</script>

<section>
    <div class="flex flex-col items-center">
        <p class="text-md">{title}</p>
        <p class="text-slate-400 text-sm">{subTitle}</p>
    </div>
</section>
