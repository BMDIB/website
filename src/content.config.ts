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

const meetings = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/data/meetings",
	}),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		time: z.string(),
		location: z.string().optional(),
		agenda: z.string().optional(),
		slides: z.string().optional(),
		minutes: z.string().optional(),
	}),
});

const board = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/data/board",
	}),
	schema: z.object({
		name: z.string(),
		role: z.string(),
		image: z.string().optional(),
		order: z.number(),
	}),
});

export const collections = {
	events,
	competitions,
	meetings,
	board,
};