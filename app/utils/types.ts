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
  description: string;
  editedDate: string;
  image: string;
  title: string;
  topic: string;
  url: string;
};

export type BlogContent = {
  frontMatter: {
    [key: string]: any;
  };
  source: MDXRemoteSerializeResult;
};
