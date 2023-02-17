import type { CollectionEntry } from "astro:content";

const getSortedProjects = (project: CollectionEntry<"projects">[]) =>
  project
    .filter(({ data }) => !data.workInProgress && data.type )
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDate).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDate).getTime() / 1000)
    );

export default getSortedProjects;
