import { BlogBanner } from '@/components/blog-banner';
import { BlogPostGrid } from '@/components/blog-post-grid';
import { getSortedBlogPosts } from '@/lib/blog';
import { productName } from '@/lib/shared';

export default function BlogPage() {
  const posts = getSortedBlogPosts();

  return (
    <main className="mx-auto w-full max-w-page px-4 pb-12 md:py-12">
      <BlogBanner
        title="Blog"
        description={`${productName}을 만드는 팀이 쓴 글 ${posts.length}개`}
      />
      <BlogPostGrid posts={posts} />
    </main>
  );
}
