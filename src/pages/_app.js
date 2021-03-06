import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/styles/theme";
import "swiper/swiper-bundle.css";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Júlio Werner"
        description="Júlio Werner is a Designer and Developer focused on the digital market"
        openGraph={{
          url: "https://juliowerner.netlify.app/",
          title: "Júlio Werner",
          description:
            "Júlio Werner is a Designer and Developer focused on the digital market",
          images: [
            {
              url: "/Banner.png",
              width: 1200,
              height: 627,
              alt:
                "Júlio Werner is a Designer and Developer focused on the digital market",
            },
            {
              url: "/Banner 2.png",
              width: 1240,
              height: 480,
              alt:
                "Júlio Werner is a Designer and Developer focused on the digital market",
            },
          ],
        }}
      />
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
