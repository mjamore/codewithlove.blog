import Link from 'next/link';

export default function ArticleListItem({ article }: any) {
  return (
    <Link className={'py-3'} href={article.frontMatter.url}>
      <h3 className={'my-0'}>{article.frontMatter.title}</h3>
      <p className={'mt-4 mb-3'}>{article.frontMatter.description}</p>
      <p className={'mt-0 text-sm text-palette-gray'}>
        {article.frontMatter.date} &#x2022; {article.readingTime}
      </p>
    </Link>
  );
}
