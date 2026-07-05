import { blog } from '@/lib/source';

export type BlogPage = (typeof blog)['$inferPage'];

export function getSortedBlogPosts() {
  return blog.getPages().sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}

export function formatBlogDate(date: string | Date) {
  return new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
