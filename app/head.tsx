export default function Head() {
  const meta = {
    title: 'Michael Amore | Technologist, Software Engineer, Wannabe Hacker',
    description: `A blog about software engineering, written by Michael Amore, a software engineer in Orange County, California.`,
    image: '/images/logo.png',
    type: 'website',
    editedDate: '12/22/2022'
  };

  return (
    <>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
      <link rel="icon" href="/favicon.ico" />
      <title>{meta.title}</title>
      {/* <meta name="robots" content="follow, index" /> */}
      <meta content={meta.description} name="description" />
      {/* <meta property="og:url" content={`https://codewithlove.blog${router.asPath}`} />
      <link rel="canonical" href={`https://codewithlove.blog${router.asPath}`} /> */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Michael Amore" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@leeerob" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.editedDate && <meta property="article:published_time" content={meta.editedDate} />}
    </>
  );
}
