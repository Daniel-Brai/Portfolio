export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Sendwave",
    techs: ["NestJS", "PostgreSQL", "HTMX"],
    link: "https://github.com/Daniel-Brai/Sendwave",
  },
  {
    title: "Jetei",
    techs: ["NestJS", "PostgreSQL", "HTMX"],
    link: "https://github.com/Daniel-Brai/Jetei",
  },
  {
    title: "Mesh",
    techs: ["Phoenix", "PostgreSQL", "Rust"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects
