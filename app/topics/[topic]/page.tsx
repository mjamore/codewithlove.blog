import path from 'path';
import Link from 'next/link';
import { BLOG_POSTS_PATH } from '../../utils/mdx';
import { readdir } from 'node:fs/promises';
import { getArticleContent } from '../../utils/filesystem';
import { ArticleMetaData } from '../../utils/types';

type TopicPageProps = {
  params: {
    topic: string;
  };
};

// render the page at codewithlove.blog/topics/{topic}
export default async function TopicPage({ params }: TopicPageProps) {
  const articlesMetaData = await getArticlesMetadata(params.topic);

  // using the metadata from each file in the {topic} directory, create a link for each article
  const Articles = articlesMetaData.map((article) => {
    return (
      <li key={article.url}>
        <Link href={article.url}>
          <h3>{article.title}</h3>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <p>URL: codewithlove.blog/topics/{`${params.topic}`}</p>
      <p>Articles about {params.topic}:</p>
      <ul>{Articles}</ul>
    </div>
  );
}

async function getArticlesMetadata(topic: string): Promise<ArticleMetaData[]> {
  return new Promise<ArticleMetaData[]>(async (resolve, reject) => {
    // create an array that will hold the metadata for each file in the {topic} directory
    let articlesMetadata: ArticleMetaData[] = [];

    try {
      // get an array of filenames all the files in the {topic} directory
      const files = await readdir(path.join(BLOG_POSTS_PATH, `${topic}`));

      // for each file, open it to get the frontmatter metadata, and push the metadata into the articlesMetadata array
      for (let file of files) {
        const articleContent = await getArticleContent(`${topic}`, `${file}`);

        articlesMetadata.push({
          author: articleContent.frontMatter.author,
          description: articleContent.frontMatter.description,
          editedDate: articleContent.frontMatter.editedDate,
          image: articleContent.frontMatter.image,
          title: articleContent.frontMatter.title,
          topic: articleContent.frontMatter.topic,
          url: articleContent.frontMatter.url
        });
      }

      // return the array with the metadata for each file in the {topic} directory
      resolve(articlesMetadata);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
}
