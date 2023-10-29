import type { SocialObjects } from "./types";
export const SITE_TITLE = 'Daniel Brai';
export const SITE_LINK = 'https://danielbrai.me/'
export const SITE_CDN = 'https://cdn.jsdelivr.net/gh/Daniel-Brai/CDN/portfolio/'
export const SITE_DESCRIPTION = "Daniel Brai - A Passionate Software Engineer and fourth year Computer Science Undergraduate";
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
