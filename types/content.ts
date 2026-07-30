export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  technologies: string[];
  publishedAt: string;
  featured: boolean;
  repositoryUrl?: string;
  liveUrl?: string;
  status: "building" | "complete";
  sections: ProjectSection[];
};

export type Experience = {
  slug: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime?: string;
  externalUrl?: string;
  featured: boolean;
};

export type Technology = {
  name: string;
  iconSlug?: string;
};

export type TechnologyGroup = {
  name: string;
  technologies: Technology[];
};

export type IntegrationSource = "disabled" | "local" | "remote";

export type IntegrationResponse<T> = {
  configured: boolean;
  source: IntegrationSource;
  items: T[];
  message?: string;
};
