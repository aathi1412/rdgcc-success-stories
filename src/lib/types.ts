
export interface SuccessStoriesPage {
    hero: {
        title: string;
        subtitle?: string;
        badgeIcon?: SanityImage;
    };
    intro: {
        eyebrow?: string;
        heading: string;
        description?: string;
        features?: Features[];
    };
    stats: {
        heading?: string;
        description?: string;
        items?: StatItem[];
    };
    caseStudies: CaseStudyCard[];
    seo?: Seo;
}

export interface SiteSettings {
    logo?: SanityImage;
    certificationBadge?: SanityImage;
    navLinks?: NavLink[];
    headerCta?: CtaButton;
    footerOutro?: string;
    footerColumns?: FooterColumn[];
    contactEmail?: string;
    contactPhone?: string;
    contactAddress?: string;
    socialLinks?: SocialLink[];
    copyrightText?: string;
    legalLinks?: FooterLink[];
}

export interface SanityImage {
  asset?: {
    _ref?: string;
    _id?: string;
    url?: string;
  };
  alt?: string;
}

export interface CtaButton {
  label: string;
  url: string;
}

export interface Features {
  title: string;
  icon?: SanityImage;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface CaseStudyCard {
  tag: string;
  company: string;
  title: string;
  description: string;
  image?: SanityImage;
  icon?: SanityImage;
  link?: CtaButton;
}

export interface Seo {
  title?: string;
  description?: string;
}

export interface NavLink {
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterColumn {
  heading: string;
  links?: FooterLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}
