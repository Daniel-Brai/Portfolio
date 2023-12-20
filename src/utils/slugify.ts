import { slug as slugger } from "github-slugger";
import type { PostFrontmatter } from "../content/config";

export const slugifyStr = (str: string) => slugger(str);

export const slugifyPost = (post: PostFrontmatter) => slugger(post.title);

export const slufigyAll = (arr: string[]) => arr.map(str => slugifyStr(str));


