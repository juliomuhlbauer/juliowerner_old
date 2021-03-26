import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/styles/theme";
import "swiper/swiper-bundle.css";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";

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
              url: "https://juliowerner.com/banner/banner.png",
              width: 1200,
              height: 630,
              alt: description,
            },
            {
              url: "https://juliowerner.com/banner/banner2.png",
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
