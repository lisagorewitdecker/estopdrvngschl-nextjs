import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
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

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <<Component {...pageProps} />;>
      <Analytics
        beforeSend={(event) => {
          const url = new URL(event.url);
          url.searchParams.delete('secret');
          return {
            ...event,
            url: url.toString(),
          };
        }}
      />
    </>
  );
}
 
export default MyApp;
