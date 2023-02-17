import { defineCollection } from 'astro:content';
import { blogSchema, projectSchema } from './_schema';

const blogCollection = defineCollection({
	schema: blogSchema
});

const projectCollection = defineCollection({
	schema: projectSchema
});

export const collections = { 
	'blog': blogCollection, 
	'projects': projectCollection, 
};
