import fs from 'fs';
import { readdir } from 'node:fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';
import { BlogContent } from '../utils/types';
import { BLOG_POSTS_PATH } from './mdx';

export const getArticleContent = async (article: string): Promise<BlogContent> => {
  return new Promise<BlogContent>(async (resolve, reject) => {
    const postFilePath = path.join(BLOG_POSTS_PATH, `${article}`);

    if (fs.existsSync(postFilePath)) {
      // if the markdown file exists for the requested route, return the markdown content
      const source = fs.readFileSync(postFilePath);
      const { content, data } = matter(source);
      const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [
            rehypeHighlight,
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ['anchor']
                }
              }
            ]
          ],
          format: 'mdx'
        },
        scope: data
      });

      resolve({
        frontMatter: data,
        readingTime: readingTime(content).text,
        source: mdxSource,
      });
    } else {
      console.log(`file DOES NOT exists`);
      reject(`Request path ${postFilePath} doesn't exist`);
    }
  });
};

export const getArticles = async (): Promise<BlogContent[]> => {
  return new Promise<BlogContent[]>(async (resolve, reject) => {
    try {
      // go to /data/blog and get a list of all articles
      const articles = await readdir(BLOG_POSTS_PATH);

      // create an array to hold the list of articles
      let listOfArticles: BlogContent[] = [];

      // for each article, get the markdown content
      for (const article of articles) {
        const articleContent = await getArticleContent(article);
        listOfArticles.push(articleContent);
      }

      // sort the articles by date
      listOfArticles.sort((a, b) => {
        return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
      });

      resolve(listOfArticles);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};
