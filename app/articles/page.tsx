import ArticleListItem from '../components/ArticleListItem';
import { getArticles } from '../utils/filesystem';

// /articles route
export default async function ArticlesPage() {
  // get a list of all articles from /data/blog
  const articles = await getArticles();

  // map over the articles and create a new ArticleListItem component for each one
  const Articles = articles.map((article) => <ArticleListItem article={article.frontMatter} key={article.frontMatter.url} /> );

  return (
    <div>
      <h1 className={'mb-3'}>Blog Articles:</h1>
      <div className={'grid grid-cols-1 gap-8'}>
        {Articles}
      </div>
    </div>
  );
}
