import MDX from '../../../components/MDX';
import { getArticleContent } from '../../../utils/filesystem';
import Image from 'next/image';

export default async function ArticlePage({ params }: any) {
  const blogContent = await getArticleContent(params.topic, `${params.article}.mdx`);

  return (
    <div>
      <h1 className={'mb-12'}>{blogContent.frontMatter.title}</h1>
      <div className={'flex items-center'}>
        <Image src={blogContent.frontMatter.authorImage} alt={`Image of ${blogContent.frontMatter.author} image`} width={35} height={35} className={'rounded-full shadow-lg'} />
        <div className={'space-between ml-4 flex'}>
          <span>{blogContent.frontMatter.author}</span>
          <span>{blogContent.frontMatter.date}</span>
        </div>
      </div>
      <div className={'my-12'}>
        <h3>TLDR</h3>
        <p>{blogContent.frontMatter.tldr}</p>
      </div>
      <MDX {...blogContent.source} />
    </div>
  );
}
