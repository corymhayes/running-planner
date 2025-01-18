<script lang="ts">
	import { db } from "$lib/db/db";
	import type { Settings } from "$lib/db/db";
	import SetSettings from "$lib/components/SetSettings.svelte";

	let settings: Settings[] = $state([]);
	let unit = $state("");

	const load_all_plans = async () => {
		settings = await db.settings.toArray();
	};

	$effect(() => {
		load_all_plans();
	});
</script>

{#if settings.length > 0}
	<SetSettings {settings} {load_all_plans} />
{/if}
