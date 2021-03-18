import { AnimatePresence } from "framer-motion";
import { useEffect } from 'react'

import { useRouter } from "next/router";
import "../styles/globals.css";
import * as gtag from "../lib/gtag";

import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

import GoogleTagManager from "../components/GoogleTagManager";
// import FacebookPixel from '../components/FacebookPixel'

import { appWithTranslation } from "next-i18next";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <GoogleTagManager>
        {/* <FacebookPixel> */}
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        {/* </FacebookPixel> */}
      </GoogleTagManager>
    </>
  );
}

export default appWithTranslation(MyApp);
