# 블로그 글 작성 가이드

adlib 테크 블로그에 글을 올리는 방법입니다.

다른 팀의 기술 블로그([CAR-FFEINE](https://car-ffeine.github.io/) 등)를 보며, 우리 팀도 기술 이야기를 모을 공간이 있으면 좋겠다고 생각해 이 블로그를 만들었습니다. (CAR-FFEINE은 Docusaurus 기반이고, adlib는 Fumadocs + GitHub Pages로 구성되어 스택은 다릅니다.)

## 빠른 시작

1. [개발 환경](#0-개발-환경) 준비 (Node 24 + pnpm 11)
2. `src/lib/authors.ts`에 본인 저자 프로필 등록
3. `content/blog/`에 `.mdx` 파일 추가
4. 로컬에서 확인 후 `main`에 merge

```bash
pnpm dev
# http://localhost:3000/blog
```

mise를 쓰는 경우: `mise exec -- pnpm dev` (아래 참고)

---

## 0. 개발 환경

이 프로젝트는 **Node.js 24**와 **pnpm 11**이 필요합니다.  
Next.js 16 빌드는 Node 20 이하에서 실패할 수 있으니 버전을 맞춰 주세요.

| 파일 | 용도 |
|------|------|
| `mise.toml` | mise로 Node·pnpm 자동 설치 |
| `.nvmrc` | nvm / fnm 등에서 Node 24 선택 |

### mise 사용 (권장)

팀원마다 Node·pnpm 버전을 동일하게 맞출 때 편합니다.

**1. mise 설치**

```bash
# macOS (Homebrew)
brew install mise

# 공통 (설치 스크립트)
curl https://mise.run | sh
```

설치 후 셸 설정이 안내됩니다. zsh 예시 (`~/.zshrc`):

```bash
eval "$(mise activate zsh)"
```

터미널을 다시 열거나 `source ~/.zshrc` 후 진행합니다.

공식 문서: https://mise.jdx.dev/getting-started.html

**2. 프로젝트 도구 설치**

```bash
cd adlib
mise trust          # 최초 1회: mise.toml 신뢰
mise install        # Node 24, pnpm 11 설치
mise exec -- pnpm install
mise exec -- pnpm dev
```

이후 명령은 `mise exec --`를 붙이거나, 디렉터리에서 `mise activate`가 켜져 있으면 `pnpm dev`만 써도 됩니다.

### mise 없이 실행

이미 **Node 24**와 **pnpm 11**이 설치되어 있으면 mise 없이도 됩니다.

```bash
node -v   # v24.x
pnpm -v   # 11.x

pnpm install
pnpm dev
pnpm build
```

**Node 버전 관리 예시 (nvm)**

```bash
nvm install    # .nvmrc → 24
nvm use
corepack enable
corepack prepare pnpm@11 --activate
pnpm install
pnpm dev
```

**pnpm 설치**

```bash
npm install -g pnpm@11
# 또는
corepack enable && corepack prepare pnpm@11 --activate
```

CI(GitHub Actions)도 mise 없이 Node 24 + pnpm 11로 빌드합니다. 로컬만 맞추면 됩니다.

---

## 1. 저자 등록 (`src/lib/authors.ts`)

글 frontmatter의 `author`는 **문자열 이름이 아니라 slug**입니다.  
slug는 아래 `authors` 객체의 키와 일치해야 합니다.

```ts
export const authors = {
  'adlib-admin': {
    name: 'adlib-admin',
  },
  your-slug: {
    name: '홍길동',
    github: 'your-github-id', // 선택: 없으면 링크 없이 이름만 표시
    url: 'https://your-site.dev', // 선택
  },
} as const satisfies Record<string, Author>;
```

| 필드 | 필수 | 설명 |
|------|------|------|
| `name` | ✅ | 글 상단에 표시되는 이름 |
| `github` | 선택 | 있으면 GitHub 프로필 링크 + @username 표시 |
| `url` | 선택 | `github` 없을 때만 이름에 링크로 사용 |

**새 팀원이 글을 쓰려면** PR에 `authors.ts` 등록을 포함해 주세요.

---

## 2. 글 파일 추가 (`content/blog/`)

파일명이 URL slug가 됩니다.

| 파일 | URL |
|------|-----|
| `content/blog/hello.mdx` | `/blog/hello` |
| `content/blog/deploy-setup.mdx` | `/blog/deploy-setup` |

- `content/blog/` **바로 아래**에만 둡니다 (하위 폴더 없음)
- slug는 **영문·숫자·하이픈** 권장

### frontmatter (필수)

```mdx
---
title: 글 제목
description: 목록·검색에 쓰이는 한 줄 요약
author: your-slug
date: 2026-07-05
---

본문...
```

| 필드 | 필수 | 설명 |
|------|------|------|
| `title` | ✅ | 글 제목 |
| `description` | 선택 | 카드·OG 설명 |
| `author` | ✅ | `authors.ts`에 등록한 slug |
| `date` | ✅ | `YYYY-MM-DD` (목록 정렬 기준) |

`author`에 등록되지 않은 slug를 쓰면 **빌드가 실패**합니다.

### 본문

일반 Markdown / MDX를 사용합니다.

- 제목(`##`)은 자동으로 목차(TOC)에 포함됩니다
- Fumadocs MDX 컴포넌트(Callout, Cards 등)도 사용 가능합니다

---

## 3. 로컬 확인

```bash
pnpm dev
# mise 사용 시: mise exec -- pnpm dev
```

| 확인 항목 | URL |
|-----------|-----|
| 글 목록 | http://localhost:3000/blog |
| 글 상세 | http://localhost:3000/blog/{slug} |
| 검색 | `Cmd+K` |

빌드 검증:

```bash
pnpm build
# mise 사용 시: mise exec -- pnpm build
```

---

## 4. 배포

`main` 브랜치에 merge되면 GitHub Actions가 자동 배포합니다.

- 프로덕션: https://yapp-github.github.io/adlib/

---

## 자주 묻는 것

### 제목만 바꾸고 싶어요

frontmatter의 `title`만 수정하면 됩니다. 파일명(slug)을 바꾸면 URL이 바뀝니다.

### 예시 글은 지워도 되나요?

`hello.mdx`, `chaeso-zip-intro.mdx`는 레이아웃 테스트용입니다.  
실제 글이 쌓이면 삭제해도 됩니다.

### LLM / 마크다운 export

배포 후 아래 경로에서도 글을 읽을 수 있습니다.

- `/llms.txt` — 글 인덱스
- `/llms.mdx/blog/{slug}/content.md` — 글별 마크다운

---

## 체크리스트 (PR 전)

- [ ] `src/lib/authors.ts`에 본인 slug 등록 (최초 1회)
- [ ] `content/blog/*.mdx` frontmatter 완성
- [ ] `author` slug가 `authors.ts`와 일치
- [ ] `pnpm build` 성공 (mise 사용 시 `mise exec -- pnpm build`)
- [ ] 로컬에서 글 목록·상세 확인
