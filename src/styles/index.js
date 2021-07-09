import { theme, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  jw: {
    100: "#FFE345",
    200: "#F45831", //Dark
    500: "#F45831",
    600: "#F23A1F", //Light
  },
};

const fonts = {
  body: "Inter, sans-serif",
  heading: "Inter, sans-serif",
};

const Button = {
  baseStyle: {
    _focus: {
      ring: "3px",
      ringColor: "jw.500",
    },
  },
};

const Link = {
  baseStyle: {
    _focus: {
      ring: "3px",
      ringColor: "jw.500",
    },
  },
};

const components = {
  Button,
  Link,
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      WebkitTapHighlightColor: "transparent",
    },
    body: {
      bg: "gray.800",
    },
    _selection: {
      textColor: "white",
      background: "jw.500",
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
      background: "jw.200",
    },
    "::-webkit-scrollbar-corner": {
      bg: "transparent",
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
};

const customTheme = extendTheme({
  ...theme,
  config,
  fonts,
  colors,
  components,
  styles,
});

export default customTheme;
