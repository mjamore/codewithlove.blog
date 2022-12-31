import ArticleCard from '../components/ArticleCard';
import ExternalLink from '../components/ExternalLink';
import InternalLink from '../components/InternalLink';
import { URLS } from '../utils/constants';
import { getArticles } from '../utils/filesystem';

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
        <span className={'font-bold'}>Note:</span> Article thumbnails were created using AI-powered, text to image tools. These are the ones I found most amusing.
      </span>

      <h3 className={'mb-0'}>What is this place?</h3>
      <p>
        The <span className={'code-with-love-text'}>code with love</span> blog is where I, <ExternalLink href='https://twitter.com/amore_codes'>Michael Amore</ExternalLink>,
        document interesting tidbits and insights I have about software engineering practices, web development, technology, and more. Sometimes it&apos;s just sharing a new piece
        of technology I&apos;m enjoying using and other times it&apos;s about how my experience has molded my opinions on certain software engineering topics. Sometimes it&apos;s
        just ranting.
      </p>

      <p>
        As a software engineer with 10+ years of building web/mobile applications, I&apos;ve seen the landscape of web development and mobile development evolve firsthand over that
        time. These days I love using Next.js, Remix, TypeScript, Tailwind, and many other technologies. You can see my everyday tech stack and other resources I use on my{' '}
        <InternalLink href={URLS.ROUTES.USES}>uses</InternalLink> page.
      </p>

      <p>
        However you got here, I&apos;m glad you&apos;re here. Read a few <InternalLink href={URLS.ROUTES.ARTICLES}>articles</InternalLink> and if you find any particularly
        interesting, please share them on social media. Reach out to me at <ExternalLink href='https://twitter.com/amore_codes'>@amore_codes</ExternalLink> with any questions or
        feedback.
      </p>

      <p>I appreciate you. Peace and Love.</p>
    </div>
  );
}
