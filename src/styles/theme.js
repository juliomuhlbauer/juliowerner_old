import { theme, extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const customTheme = extendTheme({
  ...theme,
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
