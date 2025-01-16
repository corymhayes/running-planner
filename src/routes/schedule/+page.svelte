<script lang="ts">
	import AddSchedule from '$lib/components/AddSchedule.svelte';

	import { db, type Exercise, type Plan } from '$lib/db/db';

	let all_plans: Plan[] = $state([]);
	let all_exercises: Exercise[] = $state([]);
	let unique_weeks = $state([]);

	const load_all_plans = async () => {
		all_plans = await db.plan.orderBy('day_of_week').toArray();
		all_exercises = await db.exercise.orderBy('name').toArray();
		unique_weeks = await db.plan.orderBy('week_num').uniqueKeys((key) => key);
	};

	$effect(() => {
		load_all_plans();
	});
</script>

<AddSchedule {all_plans} {all_exercises} {unique_weeks} {load_all_plans} />
