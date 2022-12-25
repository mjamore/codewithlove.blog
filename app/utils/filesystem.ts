import fs from 'fs';
import { readdir } from 'node:fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';
import { TOPICS } from '../utils/constants';
import { BlogContent, Topic } from '../utils/types';
import { BLOG_POSTS_PATH } from './mdx';

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

export const getTopics = async (): Promise<Topic[]> => {
  return new Promise<Topic[]>(async (resolve, reject) => {
    try {
      // go to /data/blog and get a list of directories
      const files = await readdir(BLOG_POSTS_PATH, { withFileTypes: true });
      const directories = files.filter((file) => file.isDirectory());

      // create an array to hold the list of topics in /data/blog
      let topics: Topic[] = [];

      for (const directory of directories) {
        // create a new topic from the current directory
        let topic: Topic = {
          directory: directory.name,
          friendlyName: directory.name,
          icon: '',
          tagline: '',
          url: `/topics/${directory.name}`
        };

        // if the directory exists in the constants file, override the topic's friendlyName and icon properties
        TOPICS.forEach((innerTopic) => {
          if (innerTopic.directory === directory.name) {
            topic.friendlyName = innerTopic.friendlyName;
            topic.icon = innerTopic.icon;
            topic.tagline = innerTopic.tagline;
          }
        });

        // add this topic to the list of topics in /data/blog
        topics.push(topic);
      }

      resolve(topics);
    } catch (err) {
      console.error(err);
      const response: Topic[] = [];
      reject(response);
    }
  });
};
