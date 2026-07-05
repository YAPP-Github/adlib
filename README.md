# adlib

chaeso-zip을 만드는 **adlib** 팀의 테크 블로그입니다.  
다른 팀의 기술 블로그를 보며 우리 팀도 비슷한 공간이 있으면 좋겠다고 생각해 만들었습니다. ([CAR-FFEINE](https://car-ffeine.github.io/) — Docusaurus / adlib — Fumadocs + GitHub Pages)

- 사이트: https://yapp-github.github.io/adlib/
- **글 작성 가이드: [BLOG.md](./BLOG.md)**

## 요구 사항

- **Node.js 24**
- **pnpm 11**

`mise.toml` / `.nvmrc`에 버전이 고정되어 있습니다. CI도 동일한 버전을 사용합니다.

## 개발

### mise 사용 (권장)

팀에서 `mise.toml`로 Node·pnpm 버전을 맞춥니다. 설치·사용법은 [BLOG.md — 개발 환경](./BLOG.md#0-개발-환경)을 참고하세요.

```bash
mise install
mise exec -- pnpm install
mise exec -- pnpm dev
```

### mise 없이

Node 24와 pnpm 11이 PATH에 있으면 바로 실행할 수 있습니다.

```bash
pnpm install
pnpm dev
```

http://localhost:3000

## 구조

| 경로 | 설명 |
|------|------|
| `content/blog/` | 블로그 MDX 글 |
| `src/lib/authors.ts` | 저자 프로필 (GitHub 링크 등) |
| `src/app/(home)/blog/` | 블로그 목록·상세 페이지 |
| `source.config.ts` | MDX 컬렉션·frontmatter 스키마 |

Static export + GitHub Pages로 배포됩니다. (`next.config.mjs`, `.github/workflows/deploy.yml`)
