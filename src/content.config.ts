import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/projects",
    }),
    schema: ({image}) => z.object({
        title: z.string(),
        slug: z.string(),
        tags: z.array(z.string()).optional(),
        cover: image(),
        coverAlt: z.string(),
        date: z.date(),
        draft: z.boolean().default(false)
    })
})

export const collections = {
    projects: projectsCollection,
}