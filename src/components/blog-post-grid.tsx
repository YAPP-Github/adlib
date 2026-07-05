import Link from 'next/link';
import { formatBlogDate, type BlogPage } from '@/lib/blog';

export function BlogPostGrid({ posts }: { posts: BlogPage[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
      {posts.map((post) => (
        <Link
          key={post.url}
          href={post.url}
          className="flex flex-col rounded-2xl border bg-fd-card p-4 shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <p className="font-medium">{post.data.title}</p>
          <p className="text-sm text-fd-muted-foreground">{post.data.description}</p>
          <p className="mt-auto pt-4 text-xs text-fd-primary">{formatBlogDate(post.data.date)}</p>
        </Link>
      ))}
    </div>
  );
}
