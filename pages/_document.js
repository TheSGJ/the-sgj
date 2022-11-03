import { Html, Head, Main, NextScript } from 'next/document'
import { Navbar } from '../components/Navbar'
import NextNProgress from 'nextjs-progressbar';
export default function Document() {
  const meta = {
    title: 'TheSGJ',
    description: 'Portfolio & Blog website of TheSGJ',
    image: 'https://avatars.githubusercontent.com/u/60005430?v=4'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TheSGJyt" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Navbar />
      <body>
        <Main />
      <NextNProgress />
        <NextScript />
      </body>

    </Html>
  )
}
