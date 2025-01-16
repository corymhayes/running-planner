<script lang="ts">
	import { db, type Exercise } from '$lib/db/db';
	let { plan, day_done } = $props();

	let all_exercises: Exercise[] = $state([]);

	const load_all_exercises = async () => {
		all_exercises = await db.exercise.orderBy('name').toArray();
	};

	$inspect(plan);

	$effect(() => {
		load_all_exercises();
	});
</script>

{#if plan?.distance != 0}
	<button class="grid cursor-pointer grid-cols-[2rem_1fr] grid-rows-2" onclick={day_done}>
		{#each all_exercises as e}
			{#if plan?.exercise == e.name}
				<div
					class="h-3.5 w-3.5 place-self-center rounded-full {plan?.completed ? 'opacity-25' : null}"
					style="background-color: {e.color}"
				></div>
			{/if}
		{/each}
		<div class="font-base text-thin col-start-2 self-center justify-self-start font-medium">
			<span class={plan?.completed ? 'line-through' : null}>{plan?.exercise}</span>
		</div>
		<div class="text-md col-start-2 row-start-2 justify-self-start">
			{#if plan?.measurement === 'distance'}
				<span class="text-sm">
					{plan?.distance} km
				</span>
			{:else if plan?.measurement === 'duration'}
				<span class="text-sm">
					{plan?.distance} min
				</span>
			{/if}
		</div>
	</button>
{:else}
	<button class="grid cursor-pointer grid-cols-[2rem_1fr] grid-rows-1" onclick={day_done}>
		{#each all_exercises as e}
			{#if plan?.exercise == e.name}
				<div
					class="h-3.5 w-3.5 place-self-center rounded-full {plan?.completed ? 'opacity-25' : null}"
					style="background-color: {e.color}"
				></div>
			{/if}
		{/each}
		<div class="font-base text-thin col-start-2 self-center justify-self-start font-medium">
			<span class={plan?.completed ? 'line-through' : null}>{plan?.exercise}</span>
		</div>
		<div class="text-md col-start-2 row-start-2 justify-self-start">
			{#if plan?.measurement === 'distance'}
				<span class="text-sm">
					{plan?.distance} km
				</span>
			{:else if plan?.measurement === 'duration'}
				<span class="text-sm">
					{plan?.distance} min
				</span>
			{/if}
		</div>
	</button>
{/if}
