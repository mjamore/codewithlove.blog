export const URLS = {
  DOMAIN: 'https://codewithlove.blog',
  ROUTES: {
    HOME: '/',
    ABOUT: '/about',
    TOPICS: '/topics',
    TOPIC_CSS: '/topics/css',
    TOPIC_CSS_HOW_TO_CENTER_A_DIV: '/topics/css/how-to-center-a-div',
    TOPIC_NEXTJS_13: '/topics/nextjs-13',
    TOPIC_NEXTJS_13_DEPLOYING_TO_VERCEL: '/topics/css/deploying-to-vercel'
  }
};

export type Article = {
  title: string;
  description: string;
  author: string;
  url: string;
  editedDate: string;
};

export type Topic = {
  friendlyName: string;
  directory: string;
  icon: string;
  url: string;
  articles: Article[];
};

export const TOPICS: Topic[] = [
  {
    friendlyName: 'CSS',
    directory: 'css',
    icon: '',
    url: URLS.ROUTES.TOPIC_CSS,
    articles: [
      {
        title: 'How to Center a Div',
        description: '...',
        author: 'Michael Amore',
        url: URLS.ROUTES.TOPIC_CSS_HOW_TO_CENTER_A_DIV,
        editedDate: '12/20/22'
      }
    ]
  },
  {
    friendlyName: 'Next.js 13',
    directory: 'nextjs-13',
    icon: '',
    url: URLS.ROUTES.TOPIC_NEXTJS_13,
    articles: [
      {
        title: 'Deploying to Vercel',
        description: '...',
        author: 'Michael Amore',
        url: URLS.ROUTES.TOPIC_NEXTJS_13_DEPLOYING_TO_VERCEL,
        editedDate: '12/20/22'
      }
    ]
  }
];
