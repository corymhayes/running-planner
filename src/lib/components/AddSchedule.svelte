<script lang="ts">
	import { db } from "$lib/db/db";
	import { initial_data } from "$lib/db/data";
	import { getDay, setDay } from "$lib/utils";

	import * as Card from "$lib/components/ui/card";
	import * as RadioGroup from "$lib/components/ui/radio-group";
	import * as Select from "$lib/components/ui/select";
	import * as Table from "$lib/components/ui/table";
	import * as ToggleGroup from "$lib/components/ui/toggle-group";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { ScrollArea } from "$lib/components/ui/scroll-area";

	import { Cross2, Pencil1 } from "svelte-radix";
	import arrowleft from "$lib/icons/arrow-left.svg";

	let form_data = $state(structuredClone(initial_data));
	let loaded_id: number | undefined | null = $state(null);
	let value = $state([]);
	let selectedType: string = $state("");
	let measurement = $state("");
	let innerWidth = $state(0);

	let { all_plans, all_exercises, unique_weeks, load_all_plans } = $props();

	let save = async () => {
		let form = $state.snapshot(form_data);
		let days = $state.snapshot(value);
		let type = $state.snapshot(selectedType);

		if (!loaded_id) {
			for (const i in days) {
				await db.plan.add({
					week_num: form.week_num,
					day_of_week: setDay(days[i]),
					distance: form.distance,
					exercise: type,
					measurement: measurement,
					completed: false
				});
			}
		} else {
			await db.plan.update(loaded_id, {
				week_num: form.week_num,
				day_of_week: setDay(days),
				distance: form.distance,
				exercise: type,
				measurement: measurement,
				completed: false
			});
		}

		reset_form();
		load_all_plans();
	};

	let reset_form = () => {
		loaded_id = null;
		value = [];
		selectedType = "";
		form_data.distance = null;
		measurement = "";
	};

	async function load_day(id: number) {
		reset_form();
		const selected_day = await db.plan.get(id);

		if (selected_day) {
			form_data = selected_day;
			value = getDay(selected_day.day_of_week);
			selectedType = selected_day.exercise;
			measurement = selected_day.measurement;
			loaded_id = selected_day.id;
		}
	}

	async function delete_exercise(id: number) {
		await db.plan.delete(id);
		load_all_plans();
	}

	$effect(() => {
		load_all_plans();
	});
</script>

<svelte:window bind:innerWidth />

<div class="flex justify-center px-6 sm:px-0">
	<div class="mt-10 flex flex-col">
		<div class="flex flex-col gap-7">
			{#if innerWidth < 640}
				<a href="./">
					<img class="h-6 w-6" src={arrowleft} alt="back to home" />
				</a>
			{/if}
			<h3 class="mb-5 text-2xl font-semibold tracking-tight">Create schedule</h3>
		</div>

		<div class="flex flex-col gap-10 sm:grid sm:grid-cols-2">
			<Card.Root class="pb-3 sm:w-96 sm:self-start">
				<Card.Header>
					<Card.Title>Add workout</Card.Title>
					<Card.Description
						>Add a workout to a day, or multiple days, to your schedule</Card.Description
					>
				</Card.Header>
				<Card.Content class="flex flex-col gap-8">
					<div class="grid gap-2">
						<Label for="week_num">Week Num</Label>
						<Input
							type="number"
							inputmode="numeric"
							id="week_num"
							bind:value={form_data.week_num}
							min="1"
						/>
					</div>

					<div class="grid gap-2">
						<Label for="type">Day</Label>
						<ToggleGroup.Root
							class="flex justify-between"
							variant="outline"
							type="multiple"
							bind:value
						>
							<ToggleGroup.Item value="Mon" class="sm: w-10 rounded">M</ToggleGroup.Item>
							<ToggleGroup.Item value="Tue" class="sm: w-10 rounded">T</ToggleGroup.Item>
							<ToggleGroup.Item value="Wed" class="sm: w-10 rounded">W</ToggleGroup.Item>
							<ToggleGroup.Item value="Thu" class="sm: w-10 rounded">T</ToggleGroup.Item>
							<ToggleGroup.Item value="Fri" class="sm: w-10 rounded">F</ToggleGroup.Item>
							<ToggleGroup.Item value="Sat" class="sm: w-10 rounded">S</ToggleGroup.Item>
							<ToggleGroup.Item value="Sun" class="sm: w-10 rounded">S</ToggleGroup.Item>
						</ToggleGroup.Root>
					</div>

					<div class="grid gap-2">
						<Label for="type">Type</Label>
						<Select.Root
							selected={selectedType}
							onSelectedChange={(v) => (selectedType = v?.value)}
						>
							<Select.Trigger>
								<Select.Value placeholder={selectedType ? selectedType : ""} />
							</Select.Trigger>
							<Select.Content>
								{#if all_exercises.length === 0}
									<Select.Item value="none">No exercises found</Select.Item>
								{:else}
									{#each all_exercises as exercise}
										<Select.Item value={exercise.name}>{exercise.name}</Select.Item>
									{/each}
								{/if}
							</Select.Content>
						</Select.Root>
					</div>

					<div class="flex w-32 max-w-sm flex-col gap-3">
						<!-- <div class="grid w-full max-w-sm items-center gap-3"> -->
						<Label for="name">Measurement</Label>
						<RadioGroup.Root class="flex gap-5" bind:value={measurement}>
							<div class="flex items-center space-x-2">
								<RadioGroup.Item value="duration" id="duration" />
								<Label for="duartion">Duration</Label>
							</div>
							<div class="flex items-center space-x-2">
								<RadioGroup.Item value="distance" id="distance" />
								<Label for="distance">Distance</Label>
							</div>
							<div class="flex items-center space-x-2">
								<RadioGroup.Item value="none" id="none" />
								<Label for="none">None</Label>
							</div>
						</RadioGroup.Root>
					</div>

					<div class="flex flex-col gap-5">
						<div class="grid gap-2">
							<Label for="distance">Distance/Duration</Label>
							<Input
								type="text"
								id="distance"
								inputmode="decimal"
								bind:value={form_data.distance}
								onfocus={() => (form_data.distance = null)}
							/>
						</div>
					</div>

					<div class="mt-5 flex flex-col gap-3">
						<Button onclick={save}>Save</Button>
						<Button variant="outline" onclick={reset_form}>Reset</Button>
					</div>
				</Card.Content>
			</Card.Root>

			<Card.Root class="mb-10 sm:mb-0">
				<Card.Header>
					<Card.Title>Schedule Overview</Card.Title>
					<Card.Description>A brief overview of your current schedule</Card.Description>
				</Card.Header>
				<Card.Content class="pb-0">
					<ScrollArea class="h-[36rem]">
						{#each unique_weeks as week}
							<h4>Week {week}</h4>
							<Table.Root class="mb-7">
								<Table.Header>
									<Table.Row>
										<Table.Head class="w-[15%]">Day</Table.Head>
										<Table.Head class="w-[45%]">Type</Table.Head>
										<Table.Head class="w-[15%]">Distance</Table.Head>
										<Table.Head class="w-[25%]"></Table.Head>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{#each all_plans as plans}
										{#if plans.week_num === week}
											<Table.Row>
												<Table.Cell>{getDay(plans.day_of_week)}</Table.Cell>
												<Table.Cell>{plans.exercise}</Table.Cell>
												<Table.Cell>{plans.distance}</Table.Cell>
												<Table.Cell class="flex gap-2">
													<Pencil1
														class="cursor-pointer justify-self-end text-stone-700"
														size="18"
														onclick={() => load_day(plans.id)}
													/>
													<Cross2
														class="cursor-pointer justify-self-end text-stone-700"
														size="18"
														onclick={() => delete_exercise(plans.id)}
													/>
												</Table.Cell>
											</Table.Row>
										{/if}
									{/each}
								</Table.Body>
							</Table.Root>
						{/each}
					</ScrollArea>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</div>
