/// <reference types="astro/client" />

declare module '*.md' {
  const content: any;
  export default content;
  export const frontmatter: any;
  export const compiledContent: () => string;
  export const Content: any;
}

declare module '*.mdx' {
  const content: any;
  export default content;
  export const frontmatter: any;
  export const compiledContent: () => string;
  export const Content: any;
}
