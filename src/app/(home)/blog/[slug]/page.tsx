import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { BlogShareButton } from '@/components/blog-share-button';
import { getMDXComponents } from '@/components/mdx';
import { formatBlogDate } from '@/lib/blog';
import { blog } from '@/lib/source';
import { cn } from '@/lib/cn';
import type { Metadata } from 'next';
import { BlogShareButton } from '@/components/blog-share-button';

export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <article className="mx-auto flex w-full max-w-[800px] flex-col px-4 py-8">
      <div className="mb-8 flex flex-row gap-4 text-sm">
        <div>
          <p className="mb-1 text-fd-muted-foreground">Written by</p>
          <p className="font-medium">{page.data.author}</p>
        </div>
        <div>
          <p className="mb-1 text-fd-muted-foreground">At</p>
          <p className="font-medium">{formatBlogDate(page.data.date)}</p>
        </div>
      </div>

      <h1 className="mb-4 text-3xl font-semibold">{page.data.title}</h1>
      <p className="mb-8 text-fd-muted-foreground">{page.data.description}</p>

      <div className="prose min-w-0 flex-1">
        <div className="not-prose mb-8 flex flex-row gap-2">
          <BlogShareButton url={page.url} />
          <Link
            href="/blog"
            className={cn(
              buttonVariants({
                color: 'secondary',
                size: 'sm',
              }),
            )}
          >
            목록
          </Link>
        </div>

        <InlineTOC items={page.data.toc} />
        <MDX components={getMDXComponents()} />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
