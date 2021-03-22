import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/styles/theme";
import "swiper/swiper-bundle.css";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";

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
        title="Júlio Werner"
        description="Júlio Werner is a Designer and Developer focused on the digital market"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Design, Development, Desenvolvimento, Startup, Programming, Programação, Identidade Visual",
          },
        ]}
        openGraph={{
          url: "https://juliowerner.com",
          title: "Júlio Werner",
          description:
            "Júlio Werner is a Designer and Developer focused on the digital market",
          images: [
            {
              url: "https://ik.imagekit.io/juliowerner/Banner.png",
              alt:
                "Júlio Werner is a Designer and Developer focused on the digital market",
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
