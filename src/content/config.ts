import { defineCollection, z } from 'astro:content';
import { postSchema } from './_schema';

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
		updatedAt: z
			.date()
			.optional(),
    description: z.string(),
    isDraft: z.boolean().default(false),
		heroImage: z.string().optional(),
		ogImage: z.string().optional(),
		tags: z.array(z.string()).optional().default(["learning-in-public", "web-development"]),
  }), 
});

export const collections = { 
	posts: postsCollection 
};
