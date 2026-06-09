export type SocialIcon = "mail" | "scholar" | "github" | "linkedin" | "file";

export interface NavItem {
  label: string;
  path: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface SocialLink extends LinkItem {
  icon: SocialIcon;
}

export interface BioTextSegment {
  type: "text";
  text: string;
}

export interface BioLogoSegment {
  type: "logo";
  src: string;
  alt: string;
}

export type BioSegment = BioTextSegment | BioLogoSegment;

export interface ProjectItem {
  id: string;
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  year: number;
  image: string;
  imageAlt: string;
  topic: string;
  featured?: boolean;
}

export interface NewsItem {
  date: string;
  title: string;
  description?: string;
}

export interface PublicationAuthor {
  name: string;
  highlight?: boolean;
}

export interface PublicationItem {
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  year: number;
  category: string;
  image: string;
  imageAlt: string;
  links: LinkItem[];
  featured?: boolean;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface CvEntry {
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
}

export interface MiscSection {
  title: string;
  description: string;
  items: {
    title: string;
    meta: string;
    description: string;
  }[];
}
