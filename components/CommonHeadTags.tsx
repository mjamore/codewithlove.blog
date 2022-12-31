export default function CommonHeadTags() {
  return (
    <>
      <meta charSet='utf-8'></meta>
      <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover'></meta>
      {/* To run the web application in full-screen */}
      <meta name='apple-mobile-web-app-capable' content='yes' />
      {/* Status Bar Style (see Supported Meta Tags below for available values)
      Has no effect unless you have the previous meta tag */}
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#d42622' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='msapplication-TileColor' content='#444444' />
      <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
      <meta name='theme-color' content='#444444' />

      <meta name='robots' content='follow, index' />
      <meta property='og:site_name' content='The Code With Love Blog' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:image:width' content='700' />
      <meta property='og:image:height' content='575' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@amore_codes' />
      <meta name='twitter:creator' content='@amore_codes' />
      <meta name='article:author' content='Michael Amore' />
    </>
  );
}
