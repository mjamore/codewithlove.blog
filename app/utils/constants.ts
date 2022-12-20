export const URLS = {
  DOMAIN: 'https://codewithlove.blog',
  ROUTES: {
    HOME: '/',
    ABOUT: '/about',
    BLOG_TOPIC: `/blog/{blogTopic}`,
    BLOG_ARTICLE: `/blog/{blogTopic}/{blogArticle}`
  }
};

export type BlogTopic = {
  friendlyName: string;
  directory: string;
  icon: string;
  url: string;
};

export const BLOG_TOPICS: BlogTopic[] = [
  {
    friendlyName: 'CSS',
    directory: 'css',
    icon: '',
    url: '/css'
  },
  {
    friendlyName: 'Next.js 13',
    directory: 'nextjs-13',
    icon: '',
    url: '/nextjs-13'
  }
];
