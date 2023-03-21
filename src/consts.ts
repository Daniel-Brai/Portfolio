import type { SocialObjects } from "./types";
export const SITE_TITLE = 'Daniel Brai';
export const SITE_LINK = 'https://danielbrai.ninja/'
export const SITE_DESCRIPTION = "Daniel Brai - A Third-year Computer Science student and aspiring Software Engineer";
export const POSTS_PER_PAGE: number = 4;

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Daniel-Brai",
    linkTitle: ` ${SITE_TITLE} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-brai-12baa21a3",
    linkTitle: `${SITE_TITLE} on LinkedIn`,
    active: true,
  },
  {
    name: "Email",
    href: "mailto:danielbraibrai.dev@gmail.com",
    linkTitle: `Send an email to ${SITE_TITLE}`,
    active: true,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `RSS Feed`,
    active: true,
  }
]
