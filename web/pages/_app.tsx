import type { AppProps } from "next/app";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";

import GlobalStyles from "../styles/global-styles";
import "../public/fonts/hack/hack.css";

/**
 * Usage of Emotion CacheProvider pulled from Twin.Macro documentation and example
 * https://github.com/ben-rogerson/twin.examples/blob/master/next-emotion-typescript/pages/_app.tsx
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div tw="antialiased">
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Component {...pageProps} />
      </CacheProvider>
    </div>
  );
}

export default MyApp;