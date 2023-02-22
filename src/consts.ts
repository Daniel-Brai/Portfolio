import type { SocialObjects } from "./types";
export const SITE_TITLE = 'Daniel Brai';
export const SITE_LINK = 'https://braidaniel.netlify.app/'
export const SITE_DESCRIPTION = "Daniel Brai's Porfolio website";
export const SITE_STATUS_API_URL = "http://localhost:5000/api"
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
    href: "https://www.linkedln.com/in/daniel-brai-12baa21a3",
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
