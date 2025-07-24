import type { CollectionEntry } from 'astro:content';

export interface ProjectFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  author: string;
  github_user?: string;
  repository_link?: string;
  image?: {
    url: string;
    alt: string;
  };
  gallery?: Array<{
    url: string;
    alt: string;
  }>;
  projectStats?: Array<{
    label: string;
    value: string;
  }>;
}

export interface ProjectPage {
  frontmatter: ProjectFrontmatter;
  url: string;
  year: string;
}

export async function getAllProjects(): Promise<ProjectPage[]> {
  // Find all MDX files in the projects directory
  const projectFiles = await import.meta.glob('/src/pages/projects/**/*.mdx');

  // Process each file to extract frontmatter and path info
  const allProjects = await Promise.all(
    Object.entries(projectFiles).map(async ([path, importFunc]) => {
      const module = await importFunc();

      // Extract year from path (e.g., /src/pages/projects/2025/project-name/index.mdx -> 2025)
      const yearMatch = path.match(/\/projects\/([0-9]{4})\//);
      const year = yearMatch ? yearMatch[1] : 'unknown';

      // Create URL from file path
      // Remove /src/pages and .mdx extension
      let url = path
        .replace(/^\/src\/pages/, '')
        .replace(/\/index\.mdx$/, '/')
        .replace(/\.mdx$/, '/');

      return {
        frontmatter: module.frontmatter as ProjectFrontmatter,
        url,
        year
      };
    })
  );

  // Sort projects by date (newest first)
  return allProjects.sort((a, b) => {
    return new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime();
  });
}

export function getProjectImageUrl(project: ProjectPage): string {
  // Use the first image from gallery, the main image, or a default
  if (project.frontmatter.gallery && project.frontmatter.gallery.length > 0) {
    return project.frontmatter.gallery[0].url;
  } else if (project.frontmatter.image) {
    return project.frontmatter.image.url;
  } else {
    return 'https://placehold.co/600x400?text=No+Image';
  }
}
