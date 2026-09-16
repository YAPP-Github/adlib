# adlib

chaeso-zip을 만드는 **adlib** 팀의 테크 블로그입니다.  
다른 팀의 기술 블로그를 보며 우리 팀도 비슷한 공간이 있으면 좋겠다고 생각해 만들었습니다. ([CAR-FFEINE](https://car-ffeine.github.io/) — Docusaurus / adlib — Fumadocs + GitHub Pages)

- 사이트: https://yapp-github.github.io/adlib/
- [채소ZIP 데모 갤러리](https://yapp-github.github.io/adlib/demo/): 기능별 영상 14편을 바로 재생합니다.
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
| `src/app/(home)/demo/` | 데모 갤러리 (PC 2열, 모바일 1열) |
| `src/lib/demos.ts` | 데모 영상 순서·제목·설명 |
| `public/demo/` | 데모 MP4와 미리보기 이미지 |
| `source.config.ts` | MDX 컬렉션·frontmatter 스키마 |

Static export + GitHub Pages로 배포됩니다. (`next.config.mjs`, `.github/workflows/deploy.yml`)

## 데모 영상 관리

영상과 미리보기 이미지는 `public/demo/<id>.mp4`, `public/demo/<id>-poster.png`로 관리합니다.
추가하거나 교체할 때 `src/lib/demos.ts`의 목록도 함께 갱신합니다.
기능별 링크(`#recommendation`, `#comparison`, `#simulator`, `#saved-results`)와 영상별 ID는 제품 저장소 README에서 사용하므로 유지합니다.

영상은 사용자가 재생할 때 로드하며 자동 재생하지 않습니다. 별도 서버 없이 Pages에서 직접 제공합니다.
배포 경로까지 확인하려면 `BASE_PATH=/adlib SITE_URL=https://yapp-github.github.io/adlib node --run build`로 빌드합니다.
