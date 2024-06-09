import { library } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react';
import { GoogleTagManager } from "@next/third-parties/google";

import {
  faArrowUp,
  faCar,
  faCheckSquare,
  faChild,
  faCoffee,
  faUniversalAccess,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import type { AppProps } from "next/app";
import "../styles/globals.css";

library.add(
  faCoffee,
  faCheckSquare,
  faUser,
  faChild,
  faUniversalAccess,
  faCar,
  faArrowUp
);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-HY6B7RQQ9N" />
    </>
  );
}
export default MyApp;

