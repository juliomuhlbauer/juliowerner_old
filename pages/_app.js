import "styles/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "styles/theme";
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
