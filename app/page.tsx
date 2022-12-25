import cn from 'classnames';
import ArticleCard from './components/ArticleCard';
import { getArticleContent } from './utils/filesystem';

export default async function HomePage() {
  const centerDivBlogArticle = await getArticleContent('css', 'how-to-center-a-div.mdx');
  const deployToVercel = await getArticleContent('javascript', 'how-to-deploy-a-nextjs-13-application-to-vercel.mdx');

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
          <ArticleCard
            author={centerDivBlogArticle.frontMatter.author}
            authorImage={centerDivBlogArticle.frontMatter.authorImage}
            date={centerDivBlogArticle.frontMatter.date}
            description={centerDivBlogArticle.frontMatter.description}
            image={centerDivBlogArticle.frontMatter.image}
            readingTime={centerDivBlogArticle.readingTime}
            title={centerDivBlogArticle.frontMatter.title}
            url={centerDivBlogArticle.frontMatter.url}
          />
          <ArticleCard
            author={centerDivBlogArticle.frontMatter.author}
            authorImage={centerDivBlogArticle.frontMatter.authorImage}
            date={centerDivBlogArticle.frontMatter.date}
            description={deployToVercel.frontMatter.description}
            image={deployToVercel.frontMatter.image}
            readingTime={centerDivBlogArticle.readingTime}
            title={deployToVercel.frontMatter.title}
            url={deployToVercel.frontMatter.url}
          />
          <ArticleCard
            author={centerDivBlogArticle.frontMatter.author}
            authorImage={centerDivBlogArticle.frontMatter.authorImage}
            date={centerDivBlogArticle.frontMatter.date}
            description={centerDivBlogArticle.frontMatter.description}
            image={centerDivBlogArticle.frontMatter.image}
            readingTime={centerDivBlogArticle.readingTime}
            title={centerDivBlogArticle.frontMatter.title}
            url={centerDivBlogArticle.frontMatter.url}
          />
        </div>
      </main>
    </div>
  );
}
