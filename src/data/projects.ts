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
    title: "Task rabbit",
    techs: ["Django", "Bootstrap", "Firebase"],
    link: "https://github.com/Daniel-Brai/Task-Rabbit",
  },
  {
    title: "Transcode",
    techs: ["Astro", "NestJS", "FFmpeg"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects
