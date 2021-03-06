import { theme, extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const customTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      "html": {
        "scrollBehavior": "smooth",
        "-webkit-tap-highlight-color": "transparent",
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
        background: "pallete.500",
      },
      "::-webkit-scrollbar-corner": {
        bg: "transparent",
      },
    },
  },
  config,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },

  colors: {
    pallete: {
      100: "#f9c529",
      200: "#f9c529", //Dark
      300: "#f9c529",
      400: "#f9c529",
      500: "#ff554b",
      600: "#ff554b", //Light
      700: "#ff554b",
      800: "#ff554b",
      900: "#ff554b",
    },
  },
});

export default customTheme;
