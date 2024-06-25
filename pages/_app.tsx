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
)
}
export class MyApp extends Component {
    render() {
        return (
            <div>
                Hello
            </div>
        );
    componentDidMount() {
        require('jquery');
        require('popper');
        require('bootstrap');
    }
}};
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};
export default MyApp;
