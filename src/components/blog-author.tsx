import { getAuthor, getAuthorGithubUrl } from '@/lib/authors';
import Link from 'next/link';

type BlogAuthorProps = {
  slug: string;
};

export function BlogAuthor({ slug }: BlogAuthorProps) {
  const author = getAuthor(slug);
  const githubUrl = getAuthorGithubUrl(author);

  return (
    <div>
      <p className="mb-1 text-fd-muted-foreground">Written by</p>
      <p className="font-medium">
        {githubUrl ? (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-fd-primary hover:underline"
          >
            {author.name}
          </Link>
        ) : author.url ? (
          <Link href={author.url} target="_blank" rel="noreferrer noopener" className="hover:underline">
            {author.name}
          </Link>
        ) : (
          author.name
        )}
        {githubUrl && author.github && (
          <span className="ms-1.5 text-xs font-normal text-fd-muted-foreground">@{author.github}</span>
        )}
      </p>
    </div>
  );
}
