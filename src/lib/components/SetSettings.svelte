<script lang="ts">
	import { db } from "$lib/db/db";

	import * as Card from "$lib/components/ui/card";
	import * as RadioGroup from "$lib/components/ui/radio-group";
	import { Label } from "$lib/components/ui/label";
	import arrowleft from "$lib/icons/arrow-left.svg";

	let { settings = $bindable(), load_all_plans } = $props();
	let innerWidth = $state(0);

	const set_unit = async (new_unit: string) => {
		await db.settings.update(1, { units: new_unit });
		load_all_plans();
	};
</script>

<svelte:window bind:innerWidth />

<div class="flex justify-center px-6 sm:px-0">
	<div class="mt-5 flex flex-col">
		<div class="flex flex-col gap-7">
			{#if innerWidth < 640}
				<a href="./">
					<img class="h-6 w-6" src={arrowleft} alt="go back" />
				</a>
			{/if}
			<h3 class="mb-5 text-2xl font-semibold tracking-tight">Settings</h3>
		</div>

		<div class="flex w-80 flex-col gap-10">
			<Card.Root class="pb-3">
				<Card.Header>
					<Card.Title>Units</Card.Title>
					<Card.Description>Change units used for distances</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="flex gap-3">
						<RadioGroup.Root class="flex gap-5" bind:value={settings[0].units}>
							<div class="flex items-center space-x-2">
								<RadioGroup.Item value="mi" id="mi" onclick={() => set_unit("mi")} />
								<Label for="duartion">mi</Label>
							</div>
							<div class="flex items-center space-x-2">
								<RadioGroup.Item value="km" id="km" onclick={() => set_unit("km")} />
								<Label for="distance">km</Label>
							</div>
						</RadioGroup.Root>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</div>
