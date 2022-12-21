import { Topic } from './types';

export const URLS = {
  DOMAIN: 'https://codewithlove.blog',
  ROUTES: {
    HOME: '/',
    ABOUT: '/about',
    TOPICS: '/topics',
    TOPIC_CSS: '/topics/css',
    TOPIC_JAVASCRIPT: '/topics/javascript'
  }
};

export const TOPICS: Topic[] = [
  {
    friendlyName: 'CSS',
    directory: 'css',
    icon: '/images/blog/css/css-icon.png',
    tagline: 'The design language of the web',
    url: URLS.ROUTES.TOPIC_CSS
  },
  {
    friendlyName: 'JavaScript',
    directory: 'javascript',
    icon: '/images/blog/javascript/javascript-icon.png',
    tagline: 'Any application that can be written in JavaScript, will eventually be written in JavaScript',
    url: URLS.ROUTES.TOPIC_JAVASCRIPT
  }
];
