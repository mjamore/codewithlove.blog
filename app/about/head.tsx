import { URLS } from '../../utils/constants';
import CommonHeadTags from '../../components/CommonHeadTags';
import { metadata } from './metadata';

export default function Head() {
  return (
    <>
      <CommonHeadTags />
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
      <link rel='canonical' href={`${URLS.DOMAIN}${URLS.ROUTES.ABOUT}`} />
      <meta property='og:url' content={`${URLS.DOMAIN}${URLS.ROUTES.ABOUT}`} />
      <meta property='og:description' content={metadata.description} />
      <meta property='og:title' content={metadata.title} />
      <meta property='og:image' content={metadata.image} />
      <meta name='twitter:title' content={metadata.title} />
      <meta name='twitter:description' content={metadata.description} />
      <meta name='twitter:image' content={metadata.image} />
      {metadata.editedDate && <meta property='article:published_time' content={metadata.editedDate} />}
    </>
  );
}
