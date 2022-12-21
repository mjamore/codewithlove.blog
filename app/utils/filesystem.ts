import fs from 'fs';
import path from 'path';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BLOG_POSTS_PATH } from '../utils/mdx';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

type BlogContent = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    [key: string]: any;
  };
};

export const getArticleContent = async (topic: string, article: string): Promise<BlogContent> => {
  return new Promise<BlogContent>(async (resolve, reject) => {
    const postFilePath = path.join(BLOG_POSTS_PATH, `${topic}/${article}`);

    if (fs.existsSync(postFilePath)) {
      // if the markdown file exists for the requested route, return the markdown content
      const source = fs.readFileSync(postFilePath);
      const { content, data } = matter(source);
      const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: []
        },
        scope: data
      });

      resolve({
        source: mdxSource,
        frontMatter: data
      });
    } else {
      console.log(`file DOES NOT exists`);
      reject(`Request path ${postFilePath} doesn't exist`);
    }
  });
};
