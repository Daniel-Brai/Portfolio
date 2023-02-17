import { z } from "astro:content";

export const blogSchema = z
    .object({
		author: z.string().optional().default("Daniel Brai"),
		authorImg: z.string().optional().default("/daniel-brai.jpg"),
		title: z.string(),
		description: z.string(),
    	postSlug: z.string().optional(),
    	draft: z.boolean().optional().default(false),
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

export const ProjectTypeEnumValues = z.enum(["Web", "CLI", "XR", "Others"])
export type ProjectTypeEnum = z.infer<typeof ProjectTypeEnumValues>
export const projectSchema = z
    .object({
		title: z.string(),
		description: z.string(),
    	projectSlug: z.string().optional(),
    	workInProgress: z.boolean().optional().default(false),
		heroImage: z.string().optional(),
		ogImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		type: ProjectTypeEnumValues.optional().default(ProjectTypeEnumValues.enum.Web),
		github_link: z.string().url({ message: "github link must be a url"}).optional(),
		live_link: z.string().url({ message: "live link must be a url"}).optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
    });
    
export type BlogFrontmatter = z.infer<typeof blogSchema>;
export type ProjectFrontmatter = z.infer<typeof projectSchema>;