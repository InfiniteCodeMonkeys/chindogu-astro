import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
      url: z.string().optional(),
    }),
});

const graveyardCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
      url: z.string().optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
  graveyard: graveyardCollection,
};
