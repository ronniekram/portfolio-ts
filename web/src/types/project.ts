export type ProjectLink = {
  live: string;
  github: string;
};

export type LighthouseProps = {
  performance: number;
  a11y: number;
  bestPractices: number;
  seo: number;
};

export type ProjectImageProps = {
  thumbnail: string;
  alt: string;
};

export type ProjectProps = {
  name: string;
  slug: string;
  thumbnail: string;
  screenshot: ProjectImageProps;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  links: ProjectLink;
  lighthouse: LighthouseProps;
};