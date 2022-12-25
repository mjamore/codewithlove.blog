import Image from 'next/image';
import MDX from '../../../components/MDX';
import { getArticleContent } from '../../../utils/filesystem';
import 'highlight.js/styles/atom-one-dark.css';

export default async function ArticlePage({ params }: any) {
  const blogContent = await getArticleContent(params.topic, `${params.article}.mdx`);

  return (
    <div>
      <h1 className={'mb-3'}>{blogContent.frontMatter.title}</h1>
      <div className={'mb-20 flex items-center'}>
        <Image src={blogContent.frontMatter.authorImage} alt={`Image of ${blogContent.frontMatter.author} image`} width={35} height={35} className={'rounded-full shadow-lg'} />
        <div className={'space-between ml-4 flex'}>
          <p>
            {blogContent.frontMatter.author} &#x2022; <span className={'text-sm'}>{blogContent.frontMatter.date}</span>
          </p>
          <p>{blogContent.readingTime}</p>
        </div>
      </div>
      <MDX {...blogContent.source} />
    </div>
  );
}
