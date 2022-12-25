import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Topic = {
  directory: string;
  friendlyName: string;
  icon: string;
  tagline: string;
  url: string;
};

export type ArticleMetaData = {
  author: string;
  authorImage: string;
  date: string;
  description: string;
  image: string;
  tags?: string[];
  title: string;
  url: string;
};

export type BlogContent = {
  frontMatter: {
    [key: string]: any;
  };
  source: MDXRemoteSerializeResult;
};
