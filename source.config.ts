import { authorSlugs } from './src/lib/authors';
import { defineCollections, defineConfig } from 'fumadocs-mdx/config';
import { pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: pageSchema.extend({
    /** `src/lib/authors.ts`에 등록된 slug */
    author: z.enum(authorSlugs),
    date: z.string().date().or(z.date()),
  }),
  postprocess: {
    includeProcessedMarkdown: true,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
