import Image from 'next/image';
import cn from 'classnames';
import MDX from '../../../components/MDX';
import { getArticleContent } from '../../../utils/filesystem';
import 'highlight.js/styles/atom-one-dark.css';

export default async function ArticlePage({ params }: any) {
  const blogContent = await getArticleContent(params.topic, `${params.article}.mdx`);

  return (
    <div className={'max-w-prose mx-auto prose'}>
      <h1 className={'mb-3'}>{blogContent.frontMatter.title}</h1>
      <div className={'mb-20 flex items-center'}>
        <Image src={blogContent.frontMatter.authorImage} alt={`Image of ${blogContent.frontMatter.author} image`} width={35} height={35} className={'rounded-full shadow-lg'} />
        <div className={'ml-4 justify-between flex items-center w-full text-gray-400'}>
          <div>
            <span>{blogContent.frontMatter.author} &#x2022; <span className={'text-sm'}>{blogContent.frontMatter.date}</span></span>
          </div>
          <p>{blogContent.readingTime}</p>
        </div>
      </div>
      <MDX {...blogContent.source} />
      <h3 className={'mt-20 mb-6'}>Last Word</h3>
      <p>We all have plenty to be grateful for in life. Take a break and think about a few things you are grateful for in your life.</p>
      <p>Remember ... When you <span className={cn('text-amore-red hover:cursor-heart')}>code with love</span>, you can change the world.</p>
    </div>
  );
}
