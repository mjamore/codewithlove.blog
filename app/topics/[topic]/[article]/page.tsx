import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { BLOG_POSTS_PATH } from '../../../utils/mdx';
import MDX from '../../../components/MDX';

type BlogContent = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    [key: string]: any;
  };
};

const components = {};

export default async function BlogPost({ params }: any) {
  const blogContent = await getBlogContent(params.topic, params.article);
  console.log(`blogContent: ${JSON.stringify(blogContent.source)}`);

  return (
    <div>
      <div>Note Page: {`${params.topic}/${params.article}`}</div>
      <div className="post-header">
        <h1>{blogContent.frontMatter.title}</h1>
        {blogContent.frontMatter.description && <p className="description">{blogContent.frontMatter.description}</p>}
      </div>
      <MDX {...blogContent.source} components={components} />
    </div>
  );
}

async function getBlogContent(topic: string, article: string): Promise<BlogContent> {
  return new Promise<BlogContent>(async (resolve, reject) => {
    const postFilePath = path.join(BLOG_POSTS_PATH, `${topic}/${article}.mdx`);

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
}
