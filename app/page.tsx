import cn from 'classnames';
import ArticleCard from './components/ArticleCard';
import { getArticleContent } from './utils/filesystem';

export default async function HomePage() {
  const centerDivBlogArticle = await getArticleContent('css', 'how-to-center-a-div.mdx');
  const deployToVercel = await getArticleContent('javascript', 'how-to-deploy-a-nextjs-13-application-to-vercel.mdx');

  return (
    <div className={'flex flex-col'}>
      <h1 className={'mb-12 text-center text-5xl font-bold leading-tight'}>
        When you <span className={cn('text-red-700 hover:cursor-heart')}>code with love</span>,
        <br />
        you make the world a better place.
      </h1>
      <main className={'my-12'}>
        <h3 className={'text-4xl font-semibold'}>Recent Articles</h3>
        <div className={'my-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'}>
          <ArticleCard
            author={centerDivBlogArticle.frontMatter.author}
            authorImage={centerDivBlogArticle.frontMatter.authorImage}
            date={centerDivBlogArticle.frontMatter.date}
            title={centerDivBlogArticle.frontMatter.title}
            description={centerDivBlogArticle.frontMatter.description}
            image={centerDivBlogArticle.frontMatter.image}
            topic={centerDivBlogArticle.frontMatter.topic}
            url={centerDivBlogArticle.frontMatter.url}
          />
          <ArticleCard
            author={centerDivBlogArticle.frontMatter.author}
            authorImage={centerDivBlogArticle.frontMatter.authorImage}
            date={centerDivBlogArticle.frontMatter.date}
            title={deployToVercel.frontMatter.title}
            description={deployToVercel.frontMatter.description}
            image={deployToVercel.frontMatter.image}
            topic={deployToVercel.frontMatter.topic}
            url={deployToVercel.frontMatter.url}
          />
          <ArticleCard
            author={centerDivBlogArticle.frontMatter.author}
            authorImage={centerDivBlogArticle.frontMatter.authorImage}
            date={centerDivBlogArticle.frontMatter.date}
            title={centerDivBlogArticle.frontMatter.title}
            description={centerDivBlogArticle.frontMatter.description}
            image={centerDivBlogArticle.frontMatter.image}
            topic={centerDivBlogArticle.frontMatter.topic}
            url={centerDivBlogArticle.frontMatter.url}
          />
        </div>
      </main>
    </div>
  );
}
