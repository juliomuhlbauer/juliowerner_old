import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  colors: {
    gradient: {
      100: "#ff554b",
      200: "#f9c529",
    },
  },
});

export default customTheme;
