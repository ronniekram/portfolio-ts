export type AboutProps = {
  media: string;
  profesh: any;
  personal: any;
};

export type SocialProps = {
  name: string;
  title: string;
  type: string;
  href: string;
};

export type ContactProps = {
  title: string;
  email: string;
  resume: string;
  socials: SocialProps[];
  freelance: string;
};

export type SkillsProps = {
  languages: string[];
  tech: string[];
  soft: string[];
};