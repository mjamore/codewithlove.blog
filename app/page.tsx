import ArticleCard from './components/ArticleCard';
import { getArticleContent } from './utils/filesystem';

export default async function HomePage() {
  const centerDivBlogArticle = await getArticleContent('css', 'how-to-center-a-div.mdx');
  const deployToVercel = await getArticleContent('javascript', 'how-to-deploy-a-nextjs-13-application-to-vercel.mdx');

  return (
    <div className={'flex flex-col'}>
      <header className={'text-center mb-8'}>
        <h1 className={'text-4xl'}>Welcome to the Code With Love Blog</h1>
        <h2 className={'text-xl mt-4 text-gray-400'}>When you code with love, you make the world a better place.</h2>
        {/* <h4>The world is a better place when you code with love.</h4> */}
      </header>
      <main className={'my-12'}>
        <h3 className={'text-3xl'}>Recent Articles</h3>
        <div className={'grid gap-4 md:grid-cols-2'}>
          <ArticleCard
            title={centerDivBlogArticle.frontMatter.title}
            description={centerDivBlogArticle.frontMatter.description}
            image={centerDivBlogArticle.frontMatter.image}
            topic={centerDivBlogArticle.frontMatter.topic}
            url={centerDivBlogArticle.frontMatter.url}
          />
          <ArticleCard
            title={deployToVercel.frontMatter.title}
            description={deployToVercel.frontMatter.description}
            image={deployToVercel.frontMatter.image}
            topic={deployToVercel.frontMatter.topic}
            url={deployToVercel.frontMatter.url}
          />
        </div>
      </main>
    </div>
  );
}
