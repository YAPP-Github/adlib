import { blogPosts } from 'collections/server';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { loader } from 'fumadocs-core/source';
import { getAuthor } from './authors';
import { formatBlogDate } from './blog';
import { blogContentRoute } from './shared';

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
Author: ${getAuthor(page.data.author).name}
Date: ${date}

${page.data.description ?? ''}

${processed}`;
}
