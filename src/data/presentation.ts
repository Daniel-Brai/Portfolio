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
    "I'm a *Software Engineer* with *more than 2 years* of experience. I am currently working with *Node.js and Typescript, Golang and Elixir*. Outside programming, I like to read mangas, novels, watch anime, and research on the latest technological advancements.",
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
  profile: ""
};

export default presentation;
