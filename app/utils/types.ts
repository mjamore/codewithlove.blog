import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type PageProps = {
  params: {
    article: string;
  };
};

export type ArticleMetaData = {
  author: string;
  authorImage: string;
  date: string;
  description: string;
  image: string;
  readingTime: ReadingTime;
  tags?: string[];
  title: string;
  url: string;
};

export type BlogContent = {
  frontMatter: {
    [key: string]: any;
  };
  readingTime: ReadingTime;
  source: MDXRemoteSerializeResult;
};

type ReadingTime = string;
