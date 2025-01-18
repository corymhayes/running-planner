<script lang="ts">
	// Database
	import { db } from "$lib/db/db";
	import type { Exercise, Plan, Settings } from "$lib/db/db";

	// UI
	import WeekTemplate from "$lib/components/WeekTemplate.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Dialog from "$lib/components/ui/dialog";
	import AddExercise from "$lib/components/AddExercise.svelte";
	import AddSchedule from "$lib/components/AddSchedule.svelte";
	import SetSettings from "$lib/components/SetSettings.svelte";

	// Icons
	import calendar from "$lib/icons/calendar-dots-fill.svg";
	import run from "$lib/icons/run-fill.svg";
	import gear from "$lib/icons/gear-fill.svg";

	let all_plans: Plan[] = $state([]);
	let all_exercises: Exercise[] = $state([]);
	let settings: Settings[] = $state([]);
	let unique_weeks: number[] = $state([]);

	const load_all_plans = async () => {
		all_plans = await db.plan.orderBy("[week_num+day_of_week]").toArray();
		all_exercises = await db.exercise.orderBy("name").toArray();
		settings = await db.settings.toArray();
		unique_weeks = await db.plan.orderBy("week_num").uniqueKeys((key) => key);
	};

	const load_all_exercises = async () => {
		all_exercises = await db.exercise.orderBy("name").toArray();
	};

	$effect(() => {
		load_all_plans();
	});

	let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />

<div class="pt-10">
	{#each unique_weeks as num}
		<WeekTemplate {num} {all_plans} settings={settings[0]} />

		{#if all_plans.length <= 1}
			<div class="mt-10 flex items-center justify-center gap-10">
				<div>
					<h3 class="mb-5 text-center text-2xl font-semibold tracking-tight">
						Welcome to your new
						<br /><span class="text-primary">Running Planner!</span>
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
			</div>
		{/if}
	{/each}

	<div class="fixed right-10 top-8 flex flex-col gap-3">
		{#if innerWidth < 640}
			<Button href="/exercises" variant="ghost" size="icon">
				<img src={run} class="h-6 w-6" alt="add an exercise" />
			</Button>

			<Button href="/schedule" variant="ghost" size="icon">
				<img src={calendar} class="h-6 w-6" alt="edit calendar" />
			</Button>

			<Button href="/settings" variant="ghost" size="icon">
				<img src={gear} class="h-6 w-6" alt="edit calendar" />
			</Button>
		{:else}
			<Dialog.Root>
				<Dialog.Trigger>
					<Button variant="ghost" size="icon">
						<img src={run} class="h-6 w-6" alt="edit calendar" />
					</Button>
				</Dialog.Trigger>
				<Dialog.Content class="max-w-4xl">
					<AddExercise {all_exercises} {load_all_exercises} />
				</Dialog.Content>
			</Dialog.Root>

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
						<img src={gear} class="h-6 w-6" alt="edit calendar" />
					</Button>
				</Dialog.Trigger>
				<Dialog.Content class="max-w-sm">
					<SetSettings {settings} {load_all_plans} />
				</Dialog.Content>
			</Dialog.Root>
		{/if}
	</div>
</div>
