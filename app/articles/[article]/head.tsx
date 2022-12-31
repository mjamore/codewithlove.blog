import Script from 'next/script';
import { URLS } from '../../utils/constants';
import CommonHeadTags from '../../../components/CommonHeadTags';
import { getArticle } from '../../utils/filesystem';
import { PageProps } from '../../utils/types';

export default async function Head({ params }: PageProps) {
  const blogContent = await getArticle(`${params.article}.mdx`);
  const meta = blogContent.frontMatter;

  function addStructuredData() {
    return {
      __html: `{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: meta.title,
          image: [meta.image],
          datePublished: meta.editedDate,
          dateModified: meta.editedDate,
          author: [
            {
              '@type': 'Person',
              name: 'Michael Amore',
              url: ${URLS.DOMAIN}/images/michael-amore.jpg,
            },
          ],
        }
      `,
    };
  }

  return (
    <>
      <CommonHeadTags />
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <link rel='canonical' href={`${URLS.DOMAIN}${meta.url}`} />
      <meta property='og:url' content={`${URLS.DOMAIN}${meta.url}`} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.editedDate && <meta property='article:published_time' content={meta.editedDate} />}
      {/* <script async dangerouslySetInnerHTML={addStructuredData()} type='application/ld+json' /> */}
      <Script async src='https://platform.twitter.com/widgets.js' />
    </>
  );
}
