import Link from "next/link";
import { Card, Cards } from "fumadocs-ui/components/card";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { appName, gitConfig, productName } from "@/lib/shared";
import { cn } from "@/lib/cn";

export default function HomePage() {
  return (
    <main className='mx-auto flex w-full max-w-page flex-col items-center px-4 py-16 text-center md:py-24'>
      <h1 className='text-4xl font-semibold tracking-tight md:text-5xl'>
        {appName}
      </h1>
      <p className='mt-4 max-w-lg text-fd-muted-foreground'>
        {productName}을 만드는 팀의 테크 블로그입니다.
        <br />
        개발 회고, 기술 선택, 제품 이야기를 기록합니다.
      </p>

      <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
        <Link
          href='/blog'
          className={cn(buttonVariants({ className: "px-4" }))}
        >
          블로그 읽기
        </Link>
        <a
          href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
          target='_blank'
          rel='noreferrer noopener'
          className={cn(
            buttonVariants({ color: "secondary", className: "px-4" }),
          )}
        >
          GitHub
        </a>
      </div>

      <Cards className='mt-16 w-full max-w-2xl text-start'>
        <Card
          href='/blog'
          title='Blog'
          description='팀이 쓴 글을 모아 둔 아카이브입니다. 검색(Cmd+K)으로도 찾을 수 있습니다.'
        />
      </Cards>
    </main>
  );
}
