import { defineCollection, z } from 'astro:content';

export const postsSchema = z.object({
  title: z.string(),
  author: z.string().default('Daniel Brai'),
  publishedAt: z.date(),
	updatedAt: z
		.date()
		.optional(),
  description: z.string(),
  isDraft: z.boolean().default(false),
	heroImage: z.string().optional(),
	ogImage: z.string().optional(),
	tags: z.array(z.string()).optional().default(["learning-in-public", "web-development"]),
});

export const postsCollection = defineCollection({
  type: "content",
  schema: postsSchema,
});

export type PostFrontmatter = z.infer<typeof postsSchema>;

export const collections = { 
	"posts": postsCollection 
};
