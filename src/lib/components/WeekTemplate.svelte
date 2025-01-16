<script lang="ts">
    import { db } from "$lib/db/db";

    import NewDayTemplate from "$lib/components/NewDayTemplate.svelte";
    import Exercise from "$lib/components/Exercise.svelte";

    let { num, all_plans } = $props();

    const day_done = async (id: number) => {
        let current = await db.plan.where("id").equals(id).toArray();
        await db.plan.update(id, { completed: !current[0].completed });
        all_plans = await db.plan.orderBy("[week_num+day_of_week]").toArray();
    };
</script>

<main class="flex justify-center">
    <h1 class="w-25 sticky top-3 mb-16 mr-8 self-start text-2xl font-bold text-primary-foreground" style="writing-mode: vertical-rl; text-orientation: mixed">
        Week <span class="mt-1">{num}</span>
    </h1>
    <div class="flex flex-col">
        <NewDayTemplate day="Mon">
            {#each all_plans as plan}
                {#if plan.week_num === num && plan.day_of_week === 0}
                    <Exercise {plan} day_done={() => day_done(plan.id)} />
                {/if}
            {/each}
        </NewDayTemplate>
        <NewDayTemplate day="Tue">
            {#each all_plans as plan}
                {#if plan.week_num === num && plan.day_of_week === 1}
                    <Exercise {plan} day_done={() => day_done(plan.id)} />
                {/if}
            {/each}
        </NewDayTemplate>
        <NewDayTemplate day="Wed">
            {#each all_plans as plan}
                {#if plan.week_num === num && plan.day_of_week === 2}
                    <Exercise {plan} day_done={() => day_done(plan.id)} />
                {/if}
            {/each}
        </NewDayTemplate>
        <NewDayTemplate day="Thu">
            {#each all_plans as plan}
                {#if plan.week_num === num && plan.day_of_week === 3}
                    <Exercise {plan} day_done={() => day_done(plan.id)} />
                {/if}
            {/each}
        </NewDayTemplate>
        <NewDayTemplate day="Fri">
            {#each all_plans as plan}
                {#if plan.week_num === num && plan.day_of_week === 4}
                    <Exercise {plan} day_done={() => day_done(plan.id)} />
                {/if}
            {/each}
        </NewDayTemplate>
        <NewDayTemplate day="Sat">
            {#each all_plans as plan}
                {#if plan.week_num === num && plan.day_of_week === 5}
                    <Exercise {plan} day_done={() => day_done(plan.id)} />
                {/if}
            {/each}
        </NewDayTemplate>
        <NewDayTemplate day="Sun">
            {#each all_plans as plan}
                {#if plan.week_num === num && plan.day_of_week === 6}
                    <Exercise {plan} day_done={() => day_done(plan.id)} />
                {/if}
            {/each}
        </NewDayTemplate>
    </div>
</main>
