export const URLS = {
  DOMAIN: 'https://codewithlove.blog',
  ROUTES: {
    HOME: '/',
    ABOUT: '/about',
    BLOG_TOPIC: `/blog/{blogTopic}`,
    BLOG_ARTICLE: `/blog/{blogTopic}/{blogArticle}`
  }
}

export const BLOG = {
  TOPICS: [
    {
      "friendlyName": "CSS",
      "directory": "css",
      "icon": "",
      "url": "/css"
    },
    {
      "friendlyName": "Next.js 13",
      "directory": "nextjs-13",
      "icon": "",
      "url": "/nextjs-13"
    }
  ]
}