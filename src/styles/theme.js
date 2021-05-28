import { theme, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  ...theme,
  config,
  styles: {
    global: {
      "html": {
        scrollBehavior: "smooth",
        WebkitTapHighlightColor: "transparent",
      },
      "body": {
        bg: "gray.800",
      },
      "::selection": {
        color: "white",
        background: "pallete.500",
      },
      "::-webkit-scrollbar": {
        width: "8px",
        height: "8px ",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "5px",
        bgColor: "gray.600",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "pallete.200",
      },
      "::-webkit-scrollbar-corner": {
        bg: "transparent",
      },
      "_focus": {
        boxShadow: "0 0 0 3px #F56235 !important",
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "jw.200",
        position: "fixed",
        zIndex: "1031",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
      },
    },
  },

  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },

  colors: {
    pallete: {
      100: "#FFE345",
      200: "#F45831", //Dark
      500: "#F45831",
      600: "#F23A1F", //Light
    },
    jw: {
      100: "#FFE345",
      200: "#F45831", //Dark
      500: "#F45831",
      600: "#F23A1F", //Light
    },
  },
});

export default customTheme;
