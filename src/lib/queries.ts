import groq from 'groq';

export const successStoriesPageQuery = groq`
    *[_type == "successStoriesPage"][0]{
    hero,
    intro,
    stats,
    caseStudies,
    seo
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    logo,
    GoogleIcon,
    navLinks,
    headerCta,
    footerOutro,
    footerColumns,
    contactEmail,
    contactPhone,
    contactAddress,
    socialLinks,
    copyrightText,
    legalLinks
  }
`;