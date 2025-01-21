import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Upskilleduonline</title>
        <link rel="icon" href="/fav.ico" />
        <meta property="og:image" content="/fav.ico" />
        <link rel="apple-touch-icon" href="/fav.ico"/>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
        <meta name="description" content="Upskilleduonline is an innovative language learning platform designed to help users master new languages through interactive and engaging lessons." />
        <meta name="keywords" content="upskilleduonline, Upskilledu Solutions, Upskilledu, Uspkilledu online, upskilledusolutions, upskilleduonline.com" />
        <meta name="author" content="Upskilleduonline" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Upskilleduonline" />
        <meta property="og:description" content="Upskilleduonline is an innovative language learning platform designed to help users master new languages through interactive and engaging lessons." />
        <meta property="og:image" content="https://www.upskilleduonline.com/newlogo1.png" />
        <meta property="og:url" content="https://www.upskilleduonline.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="Upskilleduonline" />
        <meta name="twitter:title" content="Upskilleduonline" />
        <meta name="twitter:description" content="Upskilleduonline is an innovative language learning platform designed to help users master new languages through interactive and engaging lessons." />
        <meta name="twitter:image" content="https://www.upskilleduonline.com/newlogo1.png" />
        <link rel="canonical" href="https://www.upskilleduonline.com" />
        <meta name="robots" content="index, follow" />
      </Head>  
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
