import CommonHeadTags from '../components/CommonHeadTags';
import { URLS } from '../utils/constants';

export default function Head() {
  const meta = {
    title: 'The Code With Love Web Development Blog | Tech and Software Engineering',
    description: `A blog about web development, technology, and software engineering, written by Michael Amore, in Orange County, California.`,
    image: '/images/logos/logo-amore-red-white.png',
    editedDate: '12/30/2022',
  };

  return (
    <>
      <CommonHeadTags />
      <title>{meta.title}</title>
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${URLS.DOMAIN}`} />
      <link rel='canonical' href={`${URLS.DOMAIN}`} />
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
