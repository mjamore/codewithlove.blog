import { Topic } from './types';

export const URLS = {
  DOMAIN: 'https://codewithlove.blog',
  ROUTES: {
    HOME: '/',
    ABOUT: '/about',
    TOPICS: '/topics',
    TOPIC_CSS: '/topics/css',
    TOPIC_NEXTJS_13: '/topics/nextjs-13'
  }
};

export const TOPICS: Topic[] = [
  {
    friendlyName: 'CSS',
    directory: 'css',
    icon: '',
    url: URLS.ROUTES.TOPIC_CSS
  },
  {
    friendlyName: 'Next.js 13',
    directory: 'nextjs-13',
    icon: '',
    url: URLS.ROUTES.TOPIC_NEXTJS_13
  }
];
