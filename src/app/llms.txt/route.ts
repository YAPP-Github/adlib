import { formatBlogDate, getSortedBlogPosts } from '@/lib/blog';
import { getPageMarkdownUrl } from '@/lib/source';
import { appName, productName } from '@/lib/shared';

export const revalidate = false;

export function GET() {
  const posts = getSortedBlogPosts();
  const lines = [
    `# ${appName} Blog`,
    '',
    `> ${productName}을 만드는 ${appName} 팀의 테크 블로그`,
    '',
    ...posts.map((post) => {
      const markdownUrl = getPageMarkdownUrl(post).url;
      const description = post.data.description ?? '';
      return `- [${post.data.title}](${post.url}): ${description} ([markdown](${markdownUrl}))`;
    }),
    '',
    '## Optional',
    '',
    `- [Full blog content in markdown](/llms-full.txt): all posts combined`,
    ...posts.map((post) => `- [${post.data.title}](${getPageMarkdownUrl(post).url})`),
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
