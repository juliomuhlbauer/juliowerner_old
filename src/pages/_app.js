import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/styles/theme";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";
import NProgress from "nprogress";
import * as gtag from "@/lib/gtag";
import { GA_TRACKING_ID } from "@/lib/gtag";

import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import Head from "next/head";
import Script from "next/script";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const title = "Júlio Werner";
const url = "https://juliowerner.com";
const description =
  "Júlio Werner is a Designer and Developer focused on the digital market";

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
      <Head>
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });`}
      </Script>

      <DefaultSeo
        title={title}
        description={description}
        openGraph={{
          type: "website",
          url: url,
          title: "Júlio Werner",
          description: description,
          images: [
            {
              url: "https://res.cloudinary.com/juliowerner/image/upload/v1616790970/banner/banner.png",
              width: 1200,
              height: 630,
              alt: description,
            },
          ],
        }}
        twitter={{
          handle: "@juliowernermm",
          site: "@juliowernermm",
          cardType: "summary_large_image",
        }}
      />
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
