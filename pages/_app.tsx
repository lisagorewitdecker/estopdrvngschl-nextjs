import { library } from "@fortawesome/fontawesome-svg-core";
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
import { GoogleTagManager } from "@next/third-parties/google";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={G-B0JWV1HFBS} />
    </>
  )
}
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
