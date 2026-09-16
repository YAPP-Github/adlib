import type { Metadata } from 'next';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { DemoVideo } from '@/components/demo-video';
import { demoSections } from '@/lib/demos';

export const metadata: Metadata = {
  title: '채소ZIP 데모 | adlib',
  description: '온보딩과 맞춤 채널 추천부터 채널 비교, 예산 시뮬레이션, 저장한 결과까지 영상으로 만나보세요.',
};

// Native media URLs need the same prefix as the GitHub Pages deployment.
const mediaPath = `${process.env.BASE_PATH ?? ''}/demo`;

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
          className={buttonVariants({ className: 'mt-6 px-4' })}
        >
          채소ZIP 사용해 보기
        </a>
      </header>

      <nav aria-label="데모 기능 바로가기" className="my-10 flex flex-wrap gap-2 border-y border-fd-border py-4">
        {demoSections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
          >
            {index + 1}. {section.label}
          </a>
        ))}
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
            <h2 id={`${section.id}-title`} className="mt-2 text-2xl font-semibold tracking-tight">
              {section.title}
            </h2>
            <p className="mt-3 leading-relaxed text-fd-muted-foreground">{section.description}</p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {section.videos.map((video) => (
                <article
                  key={video.id}
                  id={video.id}
                  aria-labelledby={`${video.id}-title`}
                  className="min-w-0 scroll-mt-24 overflow-hidden rounded-xl border border-fd-border bg-fd-card"
                >
                  <DemoVideo
                    id={video.id}
                    title={video.title}
                    src={`${mediaPath}/${video.id}.mp4`}
                    poster={`${mediaPath}/${video.id}-poster.png`}
                  />
                  <div className="p-5">
                    <h3 id={`${video.id}-title`} className="text-lg font-semibold">{video.title}</h3>
                    <p id={`${video.id}-description`} className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
