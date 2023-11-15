export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "Github"
  | "LinkedIn"
  | "Email"
  | "RSS"

export type EmojiIcons = 
  | "👨‍💻"
  | "😴"
  | "😁"
  | "🙇‍♂️"
  | "🎒"
  | "🙂"
  
export type StatusObjects = {
  emoji: EmojiIcons;
  description: string;
  start_time: string;
  end_time: string;
}[]

export type StatusObject = {
  emoji: EmojiIcons;
  description: string;
};

export type HeadTags = {
  title?: string;
  description?: string;
  noindex?: boolean;
  og?: {
    title: string;
    type: string;
    description: string;
    image: string;
    alt: string;
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
  | "rose";
