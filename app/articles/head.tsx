import { URLS } from '../../utils/constants';
import CommonHeadTags from '../../components/CommonHeadTags';

export default function Head() {
  const meta = {
    title: 'Articles | The Code With Love Web Development Blog by Michael Amore',
    description: `A list of blog articles I've written about such as front-end development, code deployment, AI code assistant tools, and my career path as a software engineer.`,
    image: '/images/logos/logo-amore-red-white.png',
    editedDate: '12/30/2022',
  };

  return (
    <>
      <CommonHeadTags />
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <link rel='canonical' href={`${URLS.DOMAIN}${URLS.ROUTES.ARTICLES}`} />
      <meta property='og:url' content={`${URLS.DOMAIN}${URLS.ROUTES.ARTICLES}`} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.editedDate && <meta property='article:published_time' content={meta.editedDate} />}
    </>
  );
}
