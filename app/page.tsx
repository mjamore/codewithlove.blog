import ArticleCard from './components/ArticleCard';
import { getArticles } from './utils/filesystem';

export default async function HomePage() {
  const articles = await getArticles();
  const firstThreeArticles = articles.slice(0, 3);

  const Articles = firstThreeArticles.map((article) => {
    return (
      <ArticleCard
        author={article.frontMatter.author}
        authorImage={article.frontMatter.authorImage}
        date={article.frontMatter.date}
        description={article.frontMatter.description}
        image={article.frontMatter.image}
        readingTime={article.readingTime}
        title={article.frontMatter.title}
        url={article.frontMatter.url}
        key={article.frontMatter.url}
      />
    );
  });

  return (
    <div className={'flex flex-col'}>
      <h1 className={'mb-12 text-center'}>
        When you <span className={'code-with-love-text'}>code with love</span>,
        <br />
        you can change the world.
      </h1>
      <h2>Recent Articles</h2>
      <div className={'my-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'}>{Articles}</div>
      <span className={'text-sm text-palette-gray'}>
        <span className={'font-bold'}>Note:</span> These thumbnails were created using AI-powered, text to image tools. These are the ones I found most amusing.
      </span>
    </div>
  );
}
