import Image from 'next/image';
import cn from 'classnames';
import MDX from '../../components/MDX';
import { getArticle } from '../../utils/filesystem';
import 'highlight.js/styles/atom-one-dark.css';

export default async function ArticlePage({ params }: any) {
  const blogContent = await getArticle(`${params.article}.mdx`);

  return (
    <div className={'prose mx-auto max-w-prose'}>
      {/* Article Title */}
      <h1 className={'mb-3'}>{blogContent.frontMatter.title}</h1>

      {/* Article Metadata */}
      <div className={'mb-20 flex items-center'}>
        <Image src={blogContent.frontMatter.authorImage} alt={`Image of ${blogContent.frontMatter.author} image`} width={35} height={35} className={'rounded-full shadow-lg'} />
        <div className={'ml-4 flex w-full items-center justify-between text-gray-400'}>
          <div>
            <span className={'text-amore-red'}>
              {blogContent.frontMatter.author} <span className={'text-sm text-gray-400'}>&#x2022; {blogContent.frontMatter.date}</span>
            </span>
          </div>
          <p className={'text-sm'}>{blogContent.readingTime}</p>
        </div>
      </div>

      {/* Article Body */}
      <MDX {...blogContent.source} />

      {/* Code With Love Message */}
      <h3 className={'mt-20 mb-6 text-amore-red'}>Last Words</h3>
      <p>
        Take a break from the internet for a few minutes and go show love to someone. Remind a friend or family member why you are grateful to have them in your life. Smile at a
        stranger. It&apos;s the little things that make the biggest difference.
      </p>
      <p>
        Remember ... When you <span className={cn('text-amore-red hover:cursor-heart')}>code with love</span>, you can change the world.
      </p>
      <p>Now go change the world!</p>
    </div>
  );
}
