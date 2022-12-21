import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { BLOG_POSTS_PATH } from '../../utils/mdx';
import { doesFileExists } from '../../utils/filesystem';

type TopicProps = {
  params: {
    topic: string;
  };
};

type Article = {
  title: string;
  url: string;
};

export default async function TopicPage({ params }: TopicProps) {
  const articles = await getArticles(params.topic);

  const Articles = articles.map((article) => {
    return (
      <Link href={article.url} key={article.url}>
        <li>
          <h3>{article.title}</h3>
        </li>
      </Link>
    );
  });

  return (
    <div>
      <p>URL: codewithlove.blog/topics/{`${params.topic}`}</p>
      <p>This page should:</p>
      <ul>
        <li>For the given topic, loop over each article and render a link to the article</li>
        {Articles}
      </ul>
    </div>
  );
}

async function getArticles(topic: string): Promise<Article[]> {
  return new Promise<Article[]>(async (resolve, reject) => {
    const topicDirectory = path.join(BLOG_POSTS_PATH, `${topic}`);

    try {
      await doesFileExists(topicDirectory);
      // The directory exists

      console.log('directory exists!!');
      const arr = [{ title: 'title', url: 'url' }];
      resolve(arr);

      // get a list of files in the directory
    } catch (error) {
      // The check failed
      console.log('directory does not exists :(');

      const arr = [{ title: 'title', url: 'url' }];
      reject(arr);
    }
  });
}
