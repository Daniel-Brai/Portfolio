export type HeadTags = {
  title?: string;
  description?: string;
  noindex?: boolean;
  og?: {
    title: string;
    type?: string;
    description: string;
    image?: string;
    alt?: string;
  };
};

export type AllowedFileTypes = 
  | "gif"
  | "mp3"
  | "mp4"

export type TailwindColor =
  | "orange"
  | "violet"
  | "red"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "blue"
  | "indigo"
  | "purple"
  | "fushia"
  | "pink"
  | "rose"
  | "paolana-light"
  | "paolana-dark";
