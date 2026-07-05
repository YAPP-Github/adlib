import { getLLMText, blog } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = blog.getPages();
  const scanned = await Promise.all(pages.map(getLLMText));

  return new Response(scanned.join('\n\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
