import type { Metadata } from 'next';
import type { TOCItemType } from 'fumadocs-core/toc';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Heading } from 'fumadocs-ui/components/heading';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { DemoVideo } from '@/components/demo-video';
import { demoSections } from '@/lib/demos';

export const metadata: Metadata = {
  title: '채소ZIP 데모 | adlib',
  description: '온보딩과 맞춤 채널 추천부터 채널 비교, 예산 시뮬레이션, 저장한 결과까지 영상으로 만나보세요.',
};

// Native media URLs need the same prefix as the GitHub Pages deployment.
const mediaPath = `${process.env.BASE_PATH ?? ''}/demo`;
const tableOfContents: TOCItemType[] = demoSections.map((section, index) => ({
  title: `${index + 1}. ${section.label}`,
  url: `#${section.id}`,
  depth: 2,
}));

export default function DemoPage() {
  return (
    <main lang="ko" className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-fd-muted-foreground">채소ZIP · 제품 데모</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          내게 맞는 광고 채널을 찾는 과정
        </h1>
        <p className="mt-5 text-base leading-relaxed text-fd-muted-foreground">
          채널 추천부터 예산 시뮬레이션까지, 채소ZIP의 주요 기능을 영상으로 살펴보세요.
          원하는 영상을 재생하거나 전체 화면으로 크게 볼 수 있습니다.
        </p>
        <a
          href="https://chaeso-zip.com/"
          className={buttonVariants({ variant: 'primary', className: 'mt-6 px-4' })}
        >
          채소ZIP 사용해 보기
        </a>
      </header>

      <nav aria-label="데모 기능 바로가기" className="my-10">
        <InlineTOC items={tableOfContents} defaultOpen>
          데모 기능 바로가기
        </InlineTOC>
      </nav>

      <div className="space-y-16">
        {demoSections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            className="scroll-mt-24"
          >
            <p className="text-sm font-medium text-fd-muted-foreground">0{index + 1}</p>
            <Heading as="h2" id={`${section.id}-title`} className="mt-2 text-2xl font-semibold tracking-tight">
              {section.title}
            </Heading>
            <p className="mt-3 leading-relaxed text-fd-muted-foreground">{section.description}</p>
            <Cards className="mt-6 gap-6">
              {section.videos.map((video) => (
                <Card
                  key={video.id}
                  id={video.id}
                  title={<span id={`${video.id}-title`}>{video.title}</span>}
                  description={<span id={`${video.id}-description`}>{video.description}</span>}
                  aria-labelledby={`${video.id}-title`}
                  className="min-w-0 scroll-mt-24"
                >
                  <div className="pt-4">
                    <DemoVideo
                      id={video.id}
                      title={video.title}
                      src={`${mediaPath}/${video.id}.mp4`}
                      poster={`${mediaPath}/${video.id}-poster.png`}
                    />
                  </div>
                </Card>
              ))}
            </Cards>
          </section>
        ))}
      </div>
    </main>
  );
}
