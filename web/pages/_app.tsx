import type { AppProps } from "next/app";
import Head from "next/head";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";

import { GlobalStyles } from "twin.macro";
import "../public/fonts/hack/hack.css";

/**
 * Usage of Emotion CacheProvider pulled from Twin.Macro documentation and example
 * https://github.com/ben-rogerson/twin.examples/blob/master/next-emotion-typescript/pages/_app.tsx
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <div tw="antialiased font-hack">
        <CacheProvider value={cache}>
          <GlobalStyles />
          <Component {...pageProps} />
        </CacheProvider>
      </div>
    </>
  );
}

export default MyApp;