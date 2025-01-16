<script lang="ts">
	// Database
	import { db } from '$lib/db/db';
	import type { Exercise, Plan } from '$lib/db/db';

	// UI
	import WeekTemplate from '$lib/components/WeekTemplate.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import AddExercise from '$lib/components/AddExercise.svelte';
	import AddSchedule from '$lib/components/AddSchedule.svelte';

	// Icons
	import calendar from '$lib/icons/calendar-dots-fill.svg';
	import run from '$lib/icons/run-fill.svg';

	let all_plans: Plan[] = $state([]);
	let all_exercises: Exercise[] = $state([]);
	let unique_weeks: number[] = $state([]);

	const load_all_plans = async () => {
		all_plans = await db.plan.orderBy('[week_num+day_of_week]').toArray();
		all_exercises = await db.exercise.orderBy('name').toArray();
		unique_weeks = await db.plan.orderBy('week_num').uniqueKeys((key) => key);
	};

	$effect(() => {
		load_all_plans();
	});

	let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />

{#if all_plans.length === 0}
	<div class="flex h-screen flex-col items-center justify-center">
		<h3 class="mb-5 text-2xl font-semibold tracking-tight">
			Welcome to your new <span class="text-primary">Running Planner!</span>
		</h3>
		<p class="text-center">
			To get started, click the
			<img
				src={run}
				class="inline h-6 w-6"
				style="filter: brightness(0) saturate(100%) invert(38%) sepia(99%) saturate(2025%) hue-rotate(357deg) brightness(94%) contrast(95%)"
				alt="Add an exercise"
			/>
			icon and add your exercises.
			<br />
			Next, click the
			<img
				src={calendar}
				class="inline h-6 w-6"
				style="filter: brightness(0) saturate(100%) invert(38%) sepia(99%) saturate(2025%) hue-rotate(357deg) brightness(94%) contrast(95%)"
				alt="Add to schedule"
			/> to start organzing your new running schedule.
		</p>
	</div>
{/if}

<div class="pt-10">
	{#each unique_weeks as num}
		<WeekTemplate {num} {all_plans} />
	{/each}

	<div class="fixed right-10 top-8 flex flex-col gap-3">
		{#if innerWidth < 640}
			<Button href="/schedule" variant="ghost" size="icon">
				<img src={calendar} class="h-6 w-6" alt="edit calendar" />
			</Button>

			<Button href="/exercises" variant="ghost" size="icon">
				<img src={run} class="h-6 w-6" alt="add an exercise" />
			</Button>
		{:else}
			<Dialog.Root>
				<Dialog.Trigger>
					<Button variant="ghost" size="icon">
						<img src={calendar} class="h-6 w-6" alt="edit calendar" />
					</Button>
				</Dialog.Trigger>
				<Dialog.Content class="h-[53rem] max-w-4xl">
					<AddSchedule {all_plans} {all_exercises} {unique_weeks} {load_all_plans} />
				</Dialog.Content>
			</Dialog.Root>

			<Dialog.Root>
				<Dialog.Trigger>
					<Button variant="ghost" size="icon">
						<img src={run} class="h-6 w-6" alt="edit calendar" />
					</Button>
				</Dialog.Trigger>
				<Dialog.Content class="max-w-4xl">
					<AddExercise />
				</Dialog.Content>
			</Dialog.Root>
		{/if}
	</div>
</div>
