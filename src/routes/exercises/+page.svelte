<script lang="ts">
	import { db } from "$lib/db/db";
	import type { Exercise } from "$lib/db/db";
	import AddExercise from "$lib/components/AddExercise.svelte";

	let all_exercises: Exercise[] = $state([]);

	const load_all_exercises = async () => {
		all_exercises = await db.exercise.orderBy("name").toArray();
	};

	$effect(() => {
		load_all_exercises();
	});
</script>

<AddExercise {all_exercises} {load_all_exercises} />
