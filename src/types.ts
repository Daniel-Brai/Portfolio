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
