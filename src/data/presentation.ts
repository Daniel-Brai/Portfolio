type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "danielbrai.dev@gmail.com",
  title: "👋 Hi, I’m Daniel",
  description:
    "I'm a *Nigerian backend developer* with *1 year* of web experience. I am currently working with *Node JS and Typescript*. Outside of work I read mangas and continue learning Golang & Rust.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/daniel_brai",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/daniel-brai-12baa21a3/",
    },
    {
      label: "Github",
      link: "https://github.com/Daniel-Brai",
    },
    {
      label: 'Resume',
      link: '/resume.pdf'
    }
  ],
};

export default presentation;
