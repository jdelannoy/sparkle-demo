import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const authorHost = process.env.NEXT_PUBLIC_AUTHOR_HOST;

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          fetchpriority="high"
          rel="preload"
          href="/wknd-logo-dk.svg"
          id="wknd-logo"
          as="image"
          type="image/svg+xml"
        />

        <link rel="DNS-prefetch" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="true" />
        <link rel="DNS-prefetch" href="https://p.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="true" />
        <link rel="stylesheet" href="https://use.typekit.net/bud6jdy.css" />
        
        <script dangerouslySetInnerHTML={{
          __html: `window.NEXT_PUBLIC_AUTHOR_HOST = "${process.env.NEXT_PUBLIC_AUTHOR_HOST}";`,
        }} />

        <Script id="dataFetchScript" type="module" src="/dataFetch.js" strategy="beforeInteractive" />
        <Script id="aue" src="https://universal-editor-service.experiencecloud.live/corslib/LATEST" strategy="afterInteractive" />
        <Script id="componentDefinition" type="application/vnd.adobe.aue.component+json" src="/component-definition.json" strategy="beforeInteractive" />

        <meta name="urn:adobe:aue:system:aemconnection" content={`aem:${authorHost}`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
