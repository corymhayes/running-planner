<script lang="ts">
	import { db } from "$lib/db/db";

	import * as Card from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";

	import arrowleft from "$lib/icons/arrow-left.svg";
	import pencil from "$lib/icons/pencil.svg";
	import trash from "$lib/icons/trash.svg";
	import { colors } from "$lib/colors.json";

	let { all_exercises, load_all_exercises } = $props();
	let exercise_color = $state("");
	let exercise_name = $state("");
	let loaded_id = $state(0);
	let innerWidth = $state(0);

	const save = async () => {
		let name = $state.snapshot(exercise_name);
		let color = $state.snapshot(exercise_color);

		if (!loaded_id) {
			await db.exercise.add({
				name: name,
				color: color
			});
		} else {
			await db.exercise.update(loaded_id, {
				name: name,
				color: color
			});
		}

		reset_form();
		load_all_exercises();
	};

	const reset_form = async () => {
		exercise_name = "";
		exercise_color = "";
		loaded_id = 0;
	};

	const edit_exercise = async (id: number) => {
		const selected_exercise = await db.exercise.get(id);

		if (selected_exercise) {
			loaded_id = selected_exercise.id;
			exercise_name = selected_exercise.name;
			exercise_color = selected_exercise.color;
		}
	};

	const delete_exercise = async (id: number) => {
		await db.exercise.delete(id);
		load_all_exercises();
	};
</script>

<svelte:window bind:innerWidth />

<div class="flex justify-center px-6 sm:px-0">
	<div class="mt-10 flex flex-col">
		<div class="flex flex-col gap-7">
			{#if innerWidth < 640}
				<a href="./">
					<img class="h-6 w-6" src={arrowleft} alt="go back" />
				</a>
			{/if}
			<h3 class="mb-5 text-2xl font-semibold tracking-tight">Add exercises</h3>
		</div>

		<div class="flex flex-col gap-10 sm:grid sm:grid-cols-2">
			<Card.Root class="pb-3 sm:w-96 sm:self-start">
				<Card.Header>
					<Card.Title>Add an exercise</Card.Title>
					<Card.Description
						>Create an exercise to be used through the course of the plan</Card.Description
					>
				</Card.Header>
				<Card.Content>
					<div class="flex flex-col gap-10">
						<div class="grid w-full max-w-sm items-center gap-2">
							<Label for="name">Name</Label>
							<Input type="text" id="name" bind:value={exercise_name} />
						</div>

						<div class="flex max-w-sm flex-col gap-2">
							<Label for="color">Color</Label>
							<div class="grid grid-cols-6 gap-y-2">
								{#each colors as color, i}
									{#if exercise_color === color}
										<div
											class="h-10 w-10 rounded-full border-2 border-white"
											style="background-color: {color}"
										></div>
									{:else}
										<div
											class="h-10 w-10 rounded-full"
											style="background-color: {color}"
											onclick={() => (exercise_color = color)}
										></div>
									{/if}
								{/each}
							</div>
						</div>

						<Button onclick={save}>Save</Button>
					</div>
				</Card.Content>
			</Card.Root>

			<Card.Root class="mb-10 h-full">
				<Card.Header>
					<Card.Title>Created exercises</Card.Title>
					<Card.Description>A list of your created exercises</Card.Description>
				</Card.Header>
				<Card.Content class="flex flex-col gap-3">
					{#each all_exercises as exercise}
						<div class="grid grid-cols-[3rem_1fr_1.5rem_2rem] items-center">
							<div
								class="mr-7 h-4 w-4 rounded-full"
								style="background-color: {exercise.color}"
							></div>
							<h1 class="text-sm">{exercise.name}</h1>

							<img
								src={pencil}
								class="h-5 w-5 cursor-pointer justify-self-end"
								onclick={() => edit_exercise(exercise.id)}
								alt="edit exercise"
							/>

							<img
								src={trash}
								class="h-5 w-5 cursor-pointer justify-self-end"
								onclick={() => delete_exercise(exercise.id)}
								alt="delete exercise"
							/>
						</div>
					{/each}
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</div>
