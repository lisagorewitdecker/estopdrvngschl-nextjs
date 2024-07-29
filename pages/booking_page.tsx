import Script from "next/script";
import React, { Component } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useCallback } from "react";

const NavConfig = [
  {
    name: "HOME",
    link: "/home",
  },
  {
    name: "ABOUT US",
    link: "/about",
  },
  {
    name: "SCHEDULE",
    link: "/schedule",
  },
  {
    name: "TRAINING & SERVICES",
    link: "/training_and_services",
  },
  {
    name: "CONTACT US",
    link: "/contact",
  },
];
}
const MyComponent = () => {
  return (
    <iframe src="https://calendar.app.google/HMwwZEXYNCrUxCve7" title="The Best Driving School - eStop Driving School in Marin County and Sonoma County"><IframeComponent lazy />
  );
};

export default MyComponent;
