import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Topic = {
  directory: string;
  friendlyName: string;
  icon: string;
  tagline: string;
  url: string;
};

export type ArticleMetaData = {
  title: string;
  description: string;
  author: string;
  url: string;
  editedDate: string;
};

export type BlogContent = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    [key: string]: any;
  };
};
