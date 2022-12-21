import MDX from '../../../components/MDX';
import { getArticleContent } from '../../../utils/filesystem';

const components = {};

export default async function ArticlePage({ params }: any) {
  const blogContent = await getArticleContent(params.topic, `${params.article}.mdx`);

  return (
    <div>
      <div className="post-header">
        <h1>{blogContent.frontMatter.title}</h1>
        {blogContent.frontMatter.description && <p className="description">{blogContent.frontMatter.description}</p>}
      </div>
      <MDX {...blogContent.source} components={components} />
    </div>
  );
}
