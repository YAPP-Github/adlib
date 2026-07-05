import { blogPosts } from 'collections/server';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { loader } from 'fumadocs-core/source';
import { blogContentRoute } from './shared';
import { formatBlogDate } from './blog';

export const blog = loader({
  baseUrl: '/blog',
  source: toFumadocsSource(blogPosts, []),
});

export function getPageMarkdownUrl(page: (typeof blog)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${blogContentRoute}/${segments.join('/')}`,
  };
}

export async function getLLMText(page: (typeof blog)['$inferPage']) {
  const processed = await page.data.getText('processed');
  const date =
    page.data.date instanceof Date ? formatBlogDate(page.data.date) : formatBlogDate(page.data.date);

  return `# ${page.data.title}
URL: ${page.url}
Author: ${page.data.author}
Date: ${date}

${page.data.description ?? ''}

${processed}`;
}
