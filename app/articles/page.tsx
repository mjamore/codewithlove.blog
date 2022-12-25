import ArticleCard from '../components/ArticleCard';
import { getArticles } from '../utils/filesystem';

// /articles route
export default async function ArticlesPage() {
  // get a list of all articles from /data/blog
  const articles = await getArticles();

  const Articles = articles.map((article) => {
    return (
      <div key={article.frontMatter.url}>
        <ArticleCard author={article.frontMatter.author} authorImage={article.frontMatter.authorImage} date={article.frontMatter.date} description={article.frontMatter.description} image={article.frontMatter.authorImage} readingTime={article.readingTime} title={article.frontMatter.title} url={article.frontMatter.url} />
      </div>
    )
  });

  return (
    <div>
      <h3>Blog Articles:</h3>
      {Articles}
    </div>
  );
}
