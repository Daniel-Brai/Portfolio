import { z } from "astro:content";

export const postSchema = z
    .object({
		author: z.string().optional().default("Daniel Brai"),
		title: z.string(),
		description: z.string(),
    postSlug: z.string().optional(),
    isDraft: z.boolean().optional().default(false),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		ogImage: z.string().optional(),
		tags: z.array(z.string()).optional().default(["learning-in-public", "web-development"]),
    });

