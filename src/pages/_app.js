import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/styles/theme";
import "swiper/swiper-bundle.css";
import Styles from "@/styles/styles";
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Styles />
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
