import { library } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics
        beforeSend={(event) => {
          if (localStorage.getItem('va-disable')) {
            return null;
          }
          return event;
        }}
      />
    </>
  );
}
 
export default MyApp;
