import MDX from '../../../components/MDX';
import { getArticleContent } from '../../../utils/filesystem';
import Image from 'next/image';

export default async function ArticlePage({ params }: any) {
  const blogContent = await getArticleContent(params.topic, `${params.article}.mdx`);

  return (
    <div>
      <div className="post-header">
        <h1 className={''}>{blogContent.frontMatter.title}</h1>
        <p className="author">{blogContent.frontMatter.author}</p>
        <Image src={blogContent.frontMatter.authorImage} alt={`Image of ${blogContent.frontMatter.author} image`} width={75} height={75} className={'rounded-full shadow-lg'} />
        <p className="date">{blogContent.frontMatter.date}</p>
      </div>
      <h3>TLDR</h3>
      <p>{blogContent.frontMatter.description}</p>
      <MDX {...blogContent.source} />
    </div>
  );
}
