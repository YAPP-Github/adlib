const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const appName = 'adlib';
export const docsRoute = `${basePath}/docs`;
export const docsImageRoute = `${basePath}/og/docs`;
export const docsContentRoute = `${basePath}/llms.mdx/docs`;

export const gitConfig = {
  user: 'YAPP-Github',
  repo: 'adlib',
  branch: 'main',
};
