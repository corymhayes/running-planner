<script lang="ts">
    let { day, children } = $props();
</script>

<div class="mb-2 grid grid-cols-[3rem_10rem] grid-rows-[2rem_1fr] sm:mr-[-10rem] sm:grid-cols-[3rem_20rem]">
    <div class="flex flex-col items-center text-sm">{day}</div>
    <div class="col-start-1 row-start-2 h-full w-[1px] place-self-center bg-white opacity-25"></div>
    <div class="col-start-2 row-start-2 flex min-h-10 flex-col gap-2">
        {@render children?.()}
    </div>
</div>
