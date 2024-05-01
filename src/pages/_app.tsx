import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserContextProvider from "../context/UserContextProvider";

import React from "react";
import LandingPageComponent from "../components/LandingPageComponent/LandingPageComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}
