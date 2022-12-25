import cn from 'classnames';
import ArticleCard from './components/ArticleCard';
import { getArticles } from './utils/filesystem';

export default async function HomePage() {
  const centerDivBlogArticle = await getArticles();
  const firstThreeArticles = centerDivBlogArticle.slice(0, 3);

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
    )
  });

  return (
    <div className={'flex flex-col'}>
      <h1 className={'mb-12 text-center'}>
        When you <span className={cn('text-amore-red hover:cursor-heart')}>code with love</span>,
        <br />
        you can change the world.
      </h1>
      <main className={'my-12'}>
        <h2>Recent Articles</h2>
        <div className={'my-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'}>
          {Articles}
        </div>
      </main>
    </div>
  );
}
