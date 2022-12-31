import { URLS } from '../utils/constants';
import CommonHeadTags from '../components/CommonHeadTags';

export default function Head() {
  const meta = {
    title: 'About the Code With Love Web Development Blog by Michael Amore',
    description: `The Code With Love blog is the personal blog of software engineer Michael Amore where I blog about my journey as a software engineer.`,
    image: '/images/logos/logo-amore-red-white.png',
    type: 'website',
    editedDate: '12/30/2022',
  };

  return (
    <>
      <CommonHeadTags />
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <link rel='canonical' href={`${URLS.DOMAIN}/${URLS.ROUTES.ABOUT}`} />
      <meta property='og:url' content={`${URLS.DOMAIN}/${URLS.ROUTES.ABOUT}`} />
      <meta property='og:type' content={meta.type} />
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
