import React, { Component } from "react";
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
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
const MyApp = ({ Component, pageProps }) => {
   return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;


