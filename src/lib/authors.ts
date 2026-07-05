export type Author = {
  /** 화면에 표시할 이름 */
  name: string;
  /** GitHub username (https://github.com/{username}) */
  github?: string;
  /** 개인 사이트 등 */
  url?: string;
};

/**
 * 블로그 저자 목록.
 * 새 글을 쓰기 전에 본인 slug를 여기에 등록하세요. 가이드: BLOG.md
 */
export const authors = {
  'adlib-admin': {
    name: 'adlib-admin',
  },
  dongja: {
    name: 'dongja',
    github: 'DongjaJ',
  },
} as const satisfies Record<string, Author>;

export type AuthorSlug = keyof typeof authors;

export const authorSlugs = Object.keys(authors) as [AuthorSlug, ...AuthorSlug[]];

export function getAuthor(slug: string): Author & { slug: string } {
  const author = authors[slug as AuthorSlug];
  if (!author) {
    return { slug, name: slug };
  }
  return { slug, ...author };
}

export function getAuthorGithubUrl(author: Author) {
  return author.github ? `https://github.com/${author.github}` : undefined;
}
