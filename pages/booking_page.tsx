import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import React, { Component } from "react";
import CountUp, { useCountUp } from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
    name: "/SCHEDULE",
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

const IframeComponent = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2X5prOOhhr9YY9lm18M6ccMEaEvW6SXqUkLSGyd5ZPeWZ_azMZEpImoszopFVTB4UXsnNkDOfy"
      width="800"
      height="800"
      title="The Best Driving School - eStop Driving School in Marin County and Sonoma County"
    />
  );
};

export default IframeComponent;
