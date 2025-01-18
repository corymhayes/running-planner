import Dexie, { type EntityTable } from "dexie";
import { initial_data, exercise_data, settings_data } from "./data";

interface Plan {
	id: number;
	week_num: number;
	day_of_week: number;
	exercise: string;
	distance: number | null;
	measurement: string;
	completed: boolean;
}

interface Settings {
	id: number;
	units: string;
}

interface Exercise {
	id: number;
	name: string;
	color: string;
}

const db = new Dexie("PlanDB") as Dexie & {
	plan: EntityTable<Plan, "id">;
	settings: EntityTable<Settings, "id">;
	exercise: EntityTable<Exercise, "id">;
};

db.version(1).stores({
	plan: "++id, week_num, day_of_week, completed",
	settings: "units",
	exercise: "++id, name"
});

db.version(2).stores({
	plan: "++id, week_num, day_of_week, [week_num+day_of_week], completed",
	settings: "++id, units",
	exercise: "++id, name"
});

db.on("populate", async () => {
	db.plan.add({
		week_num: initial_data.week_num,
		day_of_week: initial_data.day_of_week,
		distance: initial_data.distance,
		exercise: initial_data.exercise,
		measurement: initial_data.measurement,
		completed: initial_data.completed
	});

	db.exercise.add({
		name: exercise_data.name,
		color: exercise_data.color
	});

	db.settings.add({
		units: settings_data.units
	});
});

export type { Plan, Settings, Exercise };
export { db };
