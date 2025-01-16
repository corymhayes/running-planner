<!-- <script lang="ts">
    import { db, type Settings, type Exercise } from "$lib/db/db";
    import { settings_data, exercise_data } from "$lib/db/data";
    import { colors } from "$lib/colors.json";

    import * as Card from "$lib/components/ui/card";
    import * as RadioGroup from "$lib/components/ui/radio-group";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { Button } from "$lib/components/ui/button";
    import { ArrowLeft, Cross2, Pencil1 } from "svelte-radix";

    let exercise_form_data = $state(structuredClone(exercise_data));
    let all_exercises: Exercise[] = $state([]);
    let loaded_id = $state(0);
    let exercise_name = $state("");
    let measurement = $state("");
    let exercise_color = $state("");

    let save = async () => {
        let name = $state.snapshot(exercise_name);
        let measure = $state.snapshot(measurement);
        let color = $state.snapshot(exercise_color);

        if (!loaded_id) {
            await db.exercise.add({
                name: name,
                measurement: measure,
                color: color
            });
        } else {
            await db.exercise.update(loaded_id, {
                name: name,
                measurement: measure,
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
        measurement = "";
    };

    const load_all_exercises = async () => {
        all_exercises = await db.exercise.orderBy("name").toArray();
    };

    const edit_exercise = async (id: number) => {
        const selected_exercise = await db.exercise.get(id);

        if (selected_exercise) {
            loaded_id = selected_exercise.id;
            exercise_name = selected_exercise.name;
            measurement = selected_exercise.measurement;
            exercise_color = selected_exercise.color;
        }
    };

    async function delete_exercise(id: number) {
        await db.exercise.delete(id);
        load_all_exercises();
    }

    $effect(() => {
        load_all_exercises();
    });
</script>

<div class="flex justify-center px-6 sm:px-0">
    <div class="mt-10 flex flex-col">
        <div class="flex flex-col gap-7">
            <a href="./"> <ArrowLeft /></a>
            <h3 class="mb-5 w-full text-2xl font-semibold tracking-tight">Settings</h3>
        </div>

        <div class="flex flex-col gap-10 sm:flex-row">
            <Card.Root class="sm:w-96">
                <Card.Header>
                    <Card.Title>Add an exercise</Card.Title>
                    <Card.Description>Create an exercise to be used through the course of the plan</Card.Description>
                </Card.Header>
                <Card.Content>
                    <div class="flex flex-col gap-10">
                        <div class="grid w-full max-w-sm items-center gap-2">
                            <Label for="name">Name</Label>
                            <Input type="text" id="name" bind:value={exercise_name} />
                        </div>

                        <div class="grid w-full max-w-sm items-center gap-3">
                            <Label for="name">Measurement</Label>
                            <RadioGroup.Root class="flex gap-5" bind:value={measurement}>
                                <div class="flex items-center space-x-2">
                                    <RadioGroup.Item value="default" id="r1" />
                                    <Label for="r1">Duration</Label>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <RadioGroup.Item value="comfortable" id="r2" />
                                    <Label for="r2">Distance</Label>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <RadioGroup.Item value="compact" id="r3" />
                                    <Label for="r3">None</Label>
                                </div>
                            </RadioGroup.Root>
                        </div>

                        <div class="flex max-w-sm flex-col gap-2">
                            <Label for="color">Color</Label>

                            <div class="grid grid-cols-6 gap-y-2">
                                {#each colors as color}
                                    {#if exercise_color === color}
                                        <Button class="h-10 w-10 rounded-full border-2 border-white" style="background-color: {color}"></Button>
                                    {:else}
                                        <Button class="h-10 w-10 rounded-full" style="background-color: {color}" onclick={() => (exercise_color = color)}></Button>
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
                        <div class="grid grid-cols-[3rem_10rem_2rem_2rem] items-center">
                            <div class="mr-7 h-4 w-4 rounded-full" style="background-color: {exercise.color}"></div>
                            <h1 class="text-sm">{exercise.name}</h1>

                            <Pencil1 class="cursor-pointer justify-self-end text-stone-700" size={18} onclick={() => edit_exercise(exercise.id)} />
                            <Cross2 class="cursor-pointer justify-self-end text-stone-700" size={18} onclick={() => delete_exercise(exercise.id)} />
                        </div>
                    {/each}
                </Card.Content>
            </Card.Root>
        </div>
    </div>
</div> -->

<script lang="ts">
	import Settings from '$lib/components/AddExercise.svelte';
</script>

<Settings />
