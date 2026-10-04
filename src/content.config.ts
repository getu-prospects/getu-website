import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const aktuelles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aktuelles' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    // Set to show a donation box with this bank transfer reference.
    // SEPA allows one line of at most 140 characters as transfer reference.
    donationReference: z
      .string()
      .trim()
      .min(1)
      .max(140)
      .regex(/^[^\r\n]+$/)
      .optional(),
  }),
});

export const collections = { aktuelles };
