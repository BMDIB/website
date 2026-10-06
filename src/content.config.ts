import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const events = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/data/events",
	}),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		time: z.string(),
		location: z.string().optional(),
	}),
});

const competitions = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/data/competitions",
	}),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		time: z.string(),
		location: z.string().optional(),
	}),
});

export const collections = {
	events,
	competitions,
};